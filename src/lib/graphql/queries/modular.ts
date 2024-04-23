import { client } from "$lib/graphql/client";
import {
	cardSectionSelection,
	comparisonSectionSelection,
	courseSectionSelection,
	faqSectionSelection,
	headingFieldSelection,
	heroSectionSelection,
	richTextBlockSelection,
	seoFieldsSelection,
	testimonialSectionSelection,
	tutorsByCitySectionSelection,
} from "$lib/graphql/queries/fields";

const getSingleLocationModularPage = async (slug: string, pageType: "courses" | "tutors") => {
	const { modularPageLocation } = await client.query({
		modularPageLocation: {
			__args: {
				filter: {
					slug: {
						eq: slug,
					},
					pageType: {
						eq: pageType,
					},
				},
			},
			_firstPublishedAt: true,
			id: true,

			// Meta
			title: true,
			slug: true,
			pageType: true,
			city: {
				slug: true,
				name: true,
			},

			// Content
			modularContent: {
				on_RecordInterface: {
					__typename: true,
					id: true,
				},
				on_HeroSectionRecord: heroSectionSelection,
				on_FaqSectionRecord: faqSectionSelection,
				on_CardsSectionRecord: cardSectionSelection,
				on_TestimonialsSectionRecord: testimonialSectionSelection,
				on_ComparisonSectionRecord: comparisonSectionSelection,
				on_CoursesSectionRecord: courseSectionSelection,
				on_TutorsByCitySectionRecord: tutorsByCitySectionSelection,
			},

			// SEO
			seo: {
				seoBlock: seoFieldsSelection,
			},
		},
	});

	return modularPageLocation;
};

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

				on_HeroSectionRecord: heroSectionSelection,
				on_FaqSectionRecord: faqSectionSelection,
				on_CardsSectionRecord: cardSectionSelection,
				on_TestimonialsSectionRecord: testimonialSectionSelection,
				on_ComparisonSectionRecord: comparisonSectionSelection,
				on_RichTextSectionRecord: {
					heading: headingFieldSelection,
					richTexts: {
						id: true,
						richText: richTextBlockSelection,
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

export { getSingleLocationModularPage, getSingleModularPage };
