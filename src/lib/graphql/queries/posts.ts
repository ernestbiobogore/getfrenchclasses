import { client } from "$lib/graphql/client";
import {
	postCategoryBlockFields,
	richTextBlockSelection,
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

			// Authors
			author: {
				name: true,
			},
			reviewer: {
				name: true,
			},

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
				richText: richTextBlockSelection,
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
	getSingleBlogPost,
};
