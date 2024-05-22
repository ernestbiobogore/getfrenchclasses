import { client } from "$lib/graphql/client";
import {
	postCategoryBlockFields,
	responsiveImageFieldSelection,
	richTextBlockSelection,
	seoFieldsSelection,
	videoBlockFields,
} from "$lib/graphql/queries/fields";

const TEST_POST_SLUG = "test-post";

const getPostFullPath = (
	postRoutePathSlugs: (string | null)[],
	postSlug: string,
	postsBasePath = "/blog"
) => {
	const pathString = postRoutePathSlugs.length > 0 ? `/${postRoutePathSlugs.join("/")}` : "";
	return `${postsBasePath}${pathString}/${postSlug}`;
};

const getBlogPostsSlugs = async () => {
	const { _allPostsMeta } = await client.query({
		_allPostsMeta: {
			count: true,
		},
	});

	const slugs = [];

	const totalPosts = _allPostsMeta.count;
	const iterations = Math.ceil(totalPosts / 20);

	for (let i = 0; i < iterations; i++) {
		const skip = i * 20;
		const first = 20;

		const { allPosts } = await client.query({
			allPosts: {
				__args: {
					filter: {
						slug: {
							neq: TEST_POST_SLUG,
						},
					},
					skip,
					first,
				},
				slug: true,
				_updatedAt: true,
				routePaths: {
					slug: true,
				},
			},
		});

		slugs.push(...allPosts);
	}

	return slugs;
};

const getBlogPostsCount = async ({ featured }: { featured: boolean }) => {
	const { _allPostsMeta } = await client.query({
		_allPostsMeta: {
			__args: {
				filter: {
					featured: { eq: featured },
					slug: {
						neq: TEST_POST_SLUG,
					},
				},
			},
			count: true,
		},
	});

	return _allPostsMeta.count;
};

const getCategoriesWithPosts = async () => {
	const { allCategories } = await client.query({
		allCategories: {
			slug: true,
			name: true,
			_allReferencingPostsMeta: {
				__args: {
					filter: {
						slug: {
							neq: TEST_POST_SLUG,
						},
					},
				},
				count: true,
			},
		},
	});

	return allCategories.filter(category => category._allReferencingPostsMeta.count > 0);
};

const getCategoryBySlug = async (slug: string) => {
	const { category } = await client.query({
		category: {
			__args: {
				filter: {
					slug: {
						eq: slug,
					},
				},
			},
			id: true,
		},
	});

	return category?.id;
};

type GetBlogPostsParams = {
	first?: number;
	skip?: number;
	featured?: boolean;
	categoryId?: string;
};
const getBlogPosts = async ({ first, skip, categoryId, featured = false }: GetBlogPostsParams) => {
	const { _allPostsMeta } = await client.query({
		_allPostsMeta: {
			count: true,
		},
	});

	const totalPosts = _allPostsMeta.count;
	const iterations = Math.ceil(totalPosts / 20);

	const posts = [];

	for (let i = 0; i < iterations; i++) {
		const skip = i * 20;
		const first = 20;

		const { allPosts } = await client.query({
			allPosts: {
				__args: {
					first,
					skip,
					filter: {
						featured: { eq: featured },
						category: {
							eq: categoryId,
						},
						slug: {
							neq: TEST_POST_SLUG,
						},
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

		posts.push(...allPosts);
	}

	return posts.map(post => ({
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

			// CTAs
			postCtas: {
				ctaPosition: true,
				cta: {
					title: true,
					content: {
						value: true,
					},
					media: {
						on_RecordInterface: {
							__typename: true,
							id: true,
						},
						on_VideoBlockRecord: videoBlockFields,
						on_ImageBlockRecord: {
							image: {
								url: true,
								responsiveImage: responsiveImageFieldSelection,
							},
						},
					},
					repeatableTitle: true,
					repeatableList: {
						text: true,
					},
					cta: {
						link: true,
						text: true,
					},
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
	getBlogPosts,
	getBlogPostsCount,
	getBlogPostsSlugs,
	getCategoriesWithPosts,
	getCategoryBySlug,
	getPostFullPath,
	getSingleBlogPost,
};
