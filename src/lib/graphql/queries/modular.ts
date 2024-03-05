import { client } from "$lib/graphql/client";
import {
	actionBlockFieldSelection,
	cardBlockFieldSelection,
	faqBlockFieldSelection,
	headingFieldSelection,
	responsiveImageFieldSelection,
	seoFieldsSelection,
} from "./fields";

const getSingleModularPage = async (slug: string) => {
	const { modularPage } = await client.query({
		modularPage: {
			__args: {
				filter: {
					slug: {
						eq: slug,
					},
				},
			},
			_firstPublishedAt: true,
			id: true,

			// Meta
			title: true,
			slug: true,
			routePaths: {
				slug: true,
			},

			// Content
			modularContent: {
				on_RecordInterface: {
					__typename: true,
					id: true,
				},

				on_HeroSectionRecord: {
					heading: headingFieldSelection,
					cta: actionBlockFieldSelection,
					testimonialTitle: true,
					testimonialPictures: {
						responsiveImage: responsiveImageFieldSelection,
					},
					video: {
						url: true,
						alt: true,
					},
				},

				on_FaqSectionRecord: {
					heading: headingFieldSelection,
					faq: {
						faqBlocks: faqBlockFieldSelection,
					},
				},

				on_CardsSectionRecord: {
					heading: headingFieldSelection,
					sectionType: true,
					cards: cardBlockFieldSelection,
				},

				on_TestimonialsSectionRecord: {
					heading: headingFieldSelection,
					testimonials: {
						on_RecordInterface: {
							__typename: true,
							id: true,
						},

						on_TestimonialBlockDefaultRecord: {
							author: true,
							role: true,
							company: true,
							picture: {
								responsiveImage: responsiveImageFieldSelection,
							},
							content: {
								value: true,
							},
						},

						on_TestimonialBlockCtaRecord: {
							author: true,
							role: true,
							company: true,
							picture: {
								responsiveImage: responsiveImageFieldSelection,
							},
							highlight: {
								value: true,
							},
							content: headingFieldSelection,
							cta: actionBlockFieldSelection,
						},
					},
				},
			},

			// SEO
			seo: {
				seoBlock: seoFieldsSelection,
			},
		},
	});

	return modularPage;
};

export { getSingleModularPage };
