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
						value: true,
						blocks: {
							__typename: true,
							image: {
								id: true,
								responsiveImage: {
									__args: {
										imgixParams: {
											fit: 'crop',
											w: 300,
											h: 300,
											auto: ['format']
										}
									},
									src: true,
									width: true,
									height: true,
									alt: true,
									base64: true,
									bgColor: true,
									sizes: true
								}
							}
						}
					}
				},
				on_NoteBlockRecord: {
					noteType: true,
					content: {
						richText: {
							value: true
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
