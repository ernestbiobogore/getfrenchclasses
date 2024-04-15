import { client } from "$lib/graphql/client";
import {
	actionBlockFieldSelection,
	cardBlockFieldSelection,
	ctaTestimonialFieldsSelection,
	defaultTestimonialFieldsSelection,
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
					heroImages: {
						image: {
							responsiveImage: responsiveImageFieldSelection,
						},
						text: true,
					},
					testimonialPictures: {
						responsiveImage: responsiveImageFieldSelection,
					},
					video: {
						video: {
							muxPlaybackId: true,
							title: true,
							width: true,
							height: true,
							blurUpThumb: {
								__args: {
									punch: 1,
									size: 48,
									quality: 100,
								},
							},
						},
					},
					videoText: true,
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
						testimonial: {
							on_TestimonialBlockDefaultRecord: defaultTestimonialFieldsSelection,
							on_TestimonialBlockCtaRecord: ctaTestimonialFieldsSelection,
						},
					},
				},

				on_ReferenceSectionRecord: {
					section: true,
				},

				on_ComparisonSectionRecord: {
					comparison: {
						title: true,
						slug: true,
						heading: headingFieldSelection,
						comparisons: {
							feature: true,
							hasFeature: true,
							companies: {
								id: true,
								name: true,
								paid: true,
								logo: {
									url: true,
									alt: true,
								},
							},
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
