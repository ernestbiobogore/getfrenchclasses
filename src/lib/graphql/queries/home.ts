import { client } from "$lib/graphql/client";
import { cardBlockFields, faqBlockFieldSelection } from "$lib/graphql/queries/fields";

const getHomePageData = async () => {
	const { homepage } = await client.query({
		homepage: {
			id: true,
			_firstPublishedAt: true,
			title: true,

			// Hero
			heroTitle: true,
			heroSubtitle: true,
			heroCta: {
				text: true,
				link: true,
			},
			heroTestimonialTitle: true,
			heroTestimonialPictures: {
				url: true,
				alt: true,
			},
			heroVideo: {
				url: true,
			},
			heroVideoText: true,

			// Target audience
			targetAudienceHeading: {
				heading: true,
				subheading: true,
			},
			targetAudiences: {
				title: true,
				media: {
					url: true,
					alt: true,
				},
				content: {
					richText: {
						__typename: true,
						value: true,
					},
				},
			},

			// Popular courses
			popularCoursesTitle: true,
			popularCoursesRecords: {
				id: true,
				name: true,
				slug: true,
				duration: true,
				numberOfSections: true,

				numberOfEnrolledStudents: true,
				tag: true,

				level: true,
				price: true,
				seo: {
					seoBlock: {
						title: true,
						description: true,
						image: {
							url: true,
							alt: true,
						},
					},
				},
			},

			// New courses
			newCoursesTitle: true,
			newCoursesRecords: {
				id: true,
				name: true,
				slug: true,
				duration: true,
				numberOfSections: true,

				numberOfEnrolledStudents: true,
				tag: true,

				level: true,
				price: true,
				seo: {
					seoBlock: {
						title: true,
						description: true,
						image: {
							url: true,
							alt: true,
						},
					},
				},
			},

			// Features
			featuresHeading: {
				heading: true,
				subheading: true,
			},
			featuresCta: {
				text: true,
				link: true,
			},
			featureCards: {
				title: true,
				cta: {
					text: true,
					link: true,
				},
				media: {
					url: true,
					alt: true,
					video: {
						mp4Url: true,
					},
				},
				content: {
					richText: {
						__typename: true,
						value: true,
					},
				},
			},

			// About
			about: cardBlockFields,

			// Multiple testimonials
			multipleTestimonials: {
				id: true,
				title: true,
				image: {
					url: true,
					alt: true,
				},
				content: {
					richText: {
						value: true,
					},
				},
				author: true,
				role: true,
			},

			// Stats
			statsHeading: {
				heading: true,
				subheading: true,
			},
			statsAction: {
				text: true,
				link: true,
			},
			statsImages: {
				url: true,
				alt: true,
			},
			statsData: {
				heading: true,
				subheading: true,
			},

			// FAQ
			faqHeading: {
				heading: true,
				subheading: true,
			},
			faq: {
				faqBlocks: faqBlockFieldSelection,
			},

			// CTA
			ctaHeading: {
				heading: true,
				subheading: true,
			},
			ctaAction: {
				text: true,
				link: true,
			},

			// SEO
			seo: {
				seoBlock: {
					title: true,
					description: true,
					image: {
						url: true,
						alt: true,
					},
				},
			},
		},
	});

	return homepage;
};

export { getHomePageData };
