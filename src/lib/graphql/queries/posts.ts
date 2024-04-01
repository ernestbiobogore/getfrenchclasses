import { client } from "$lib/graphql/client";
import {
	cardBlockFields,
	postCategoryBlockFields,
	seoFieldsSelection,
} from "$lib/graphql/queries/fields";

const getPostFullPath = (
	postRoutePathSlugs: (string | null)[],
	postSlug: string,
	postsBasePath = "/blog"
) => {
	const pathString = postRoutePathSlugs.length > 0 ? `/${postRoutePathSlugs.join("/")}` : "";
	return `${postsBasePath}${pathString}/${postSlug}`;
};

const getBlogPostsSlugs = async () => {
	const { allPosts } = await client.query({
		allPosts: {
			slug: true,
			_updatedAt: true,
			routePaths: {
				slug: true,
			},
		},
	});

	return allPosts;
};

const getBlogPostsCount = async ({ featured }: { featured: boolean }) => {
	const { _allPostsMeta } = await client.query({
		_allPostsMeta: {
			__args: {
				filter: {
					featured: { eq: featured },
				},
			},
			count: true,
		},
	});

	return _allPostsMeta.count;
};

type GetAllBlogPostsParams = {
	first?: number;
	skip?: number;
	featured?: boolean;
};
const getAllBlogPosts = async ({ first, skip, featured = false }: GetAllBlogPostsParams) => {
	const { allPosts } = await client.query({
		allPosts: {
			__args: {
				first,
				skip,
				filter: {
					featured: { eq: featured },
				},
			},
			id: true,
			slug: true,
			title: true,
			category: postCategoryBlockFields,
			featured: true,
			routePaths: {
				slug: true,
			},

			// SEO
			seo: {
				seoBlock: seoFieldsSelection,
			},
		},
	});

	return allPosts.map(post => ({
		...post,
		path: getPostFullPath(
			post.routePaths.map(path => path.slug),
			String(post.slug)
		),
	}));
};

const getSingleBlogPost = async (slug: string) => {
	const { post } = await client.query({
		post: {
			__args: {
				filter: {
					slug: {
						eq: slug,
					},
				},
			},
			id: true,
			slug: true,
			title: true,
			_firstPublishedAt: true,
			_updatedAt: true,

			// CTA
			postCta: {
				title: true,
				content: {
					value: true,
				},
				repeatableTitle: true,
				repeatableList: {
					text: true,
				},
				cta: {
					text: true,
					link: true,
				},
			},

			// Category
			routePaths: {
				name: true,
				slug: true,
			},

			// Content
			modularContent: {
				__typename: true,
				richText: {
					value: true,
					blocks: {
						on_RecordInterface: {
							__typename: true,
							id: true,
						},
						on_NoteBlockRecord: {
							noteType: true,
							card: cardBlockFields,
						},
						on_ImageBlockRecord: {
							image: {
								responsiveImage: {
									src: true,
									width: true,
									height: true,
									alt: true,
									sizes: true,
								},
							},
						},
						on_CardBlockRecord: cardBlockFields,
					},
				},
			},

			// SEO
			seo: {
				seoBlock: seoFieldsSelection,
			},
		},
	});

	return post;
};

export {
	getAllBlogPosts,
	getBlogPostsCount,
	getBlogPostsSlugs,
	getPostFullPath,
	getSingleBlogPost
};

