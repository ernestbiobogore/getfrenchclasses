import { client } from "$lib/graphql/client";
import {
	cardSectionSelection,
	comparisonSectionSelection,
	faqSectionSelection,
	heroSectionSelection,
	referenceSectionSelection,
	seoFieldsSelection,
	testimonialSectionSelection,
} from "$lib/graphql/queries/fields";

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
				on_ReferenceSectionRecord: referenceSectionSelection,
				on_ComparisonSectionRecord: comparisonSectionSelection,
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
