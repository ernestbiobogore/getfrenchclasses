import { client } from "$lib/graphql/client";
import { cardBlockFields } from "$lib/graphql/queries/fields";
import type { PostRecordGenqlSelection } from "../generated";

const postSeoBlock = {
	seoBlock: {
		title: true,
		description: true,
		image: {
			url: true,
			alt: true,
		},
	},
} satisfies PostRecordGenqlSelection["seo"];

const postCategoryBlock = {
	name: true,
	slug: true,
} satisfies PostRecordGenqlSelection["category"];

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
			category: postCategoryBlock,

			// SEO
			seo: postSeoBlock,
		},
	});

	return allPosts;
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
							content: {
								richText: {
									value: true,
								},
							},
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
			seo: postSeoBlock,
		},
	});

	return post;
};

export { getAllBlogPosts, getBlogPostsSlugs, getSingleBlogPost };
