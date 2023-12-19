import { client } from '$lib/graphql/client';

const getSingleBlogPost = async (slug: string) => {
	const { post } = await client.query({
		post: {
			__args: {
				filter: {
					slug: {
						eq: slug
					}
				}
			},
			id: true,
			slug: true,
			title: true,
			_firstPublishedAt: true,
			_updatedAt: true,

			// Category
			category: {
				name: true,
				slug: true
			},

			// Content
			modularContent: {
				__typename: true,
				on_RichTextBlockRecord: {
					richText: {
						value: true
					}
				},
				on_NoteBlockRecord: {
					noteType: true,
					content: {
						richText: {
							value: true
						}
					}
				},
				on_ImageBlockRecord: {
					image: {
						responsiveImage: {
							src: true,
							width: true,
							height: true,
							alt: true,
							sizes: true
						}
					}
				}
			},

			// SEO
			seo: {
				seoBlock: {
					title: true,
					description: true,
					image: {
						url: true,
						alt: true
					}
				}
			}
		}
	});

	return post;
};

export { getSingleBlogPost };
