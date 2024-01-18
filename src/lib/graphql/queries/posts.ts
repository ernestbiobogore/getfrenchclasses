import { client } from '$lib/graphql/client';

const getBlogPostsSlugs = async () => {
	const { allPosts } = await client.query({
		allPosts: {
			slug: true,
			_updatedAt: true,
			routePaths: {
				slug: true
			}
		}
	});

	return allPosts;
};

const getAllBlogPosts = async () => {
	const { allPosts } = await client.query({
		allPosts: {
			id: true,
			slug: true,
			title: true
		}
	});

	return allPosts;
};

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

			// CTA
			cta: {
				title: true,
				content: {
					richText: {
						value: true
					}
				},
				cta: {
					text: true,
					link: true
				}
			},

			// Category
			routePaths: {
				name: true,
				slug: true
			},

			// Content
			modularContent: {
				__typename: true,
				richText: {
					value: true,
					blocks: {
						on_RecordInterface: {
							__typename: true,
							id: true
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
						},
						// on_CardBlockRecord: {
						// 	title: true,
						// 	cta: {
						// 		text: true,
						// 		link: true
						// 	},
						// 	media: {
						// 		responsiveImage: {
						// 			src: true,
						// 			width: true,
						// 			height: true,
						// 			alt: true,
						// 			sizes: true
						// 		},
						// 		video: {
						// 			mp4Url: true,
						// 		},
						// 		alt: true
						// 	},
						// 	content: {
						// 		richText: {
						// 			value: true
						// 		}
						// 	}
						// }
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

export { getAllBlogPosts, getBlogPostsSlugs, getSingleBlogPost };
