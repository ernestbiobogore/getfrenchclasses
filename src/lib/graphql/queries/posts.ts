import { client } from "$lib/graphql/client";
import {
	cardBlockFields,
	postCategoryBlockFields,
	postSeoBlockFields,
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

const getAllBlogPosts = async () => {
	const { allPosts } = await client.query({
		allPosts: {
			id: true,
			slug: true,
			title: true,
			category: postCategoryBlockFields,
			routePaths: {
				slug: true,
			},

			// SEO
			seo: postSeoBlockFields,
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
			cta: {
				title: true,
				content: {
					richText: {
						value: true,
					},
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
			seo: postSeoBlockFields,
		},
	});

	return post;
};

export { getAllBlogPosts, getBlogPostsSlugs, getPostFullPath, getSingleBlogPost };
