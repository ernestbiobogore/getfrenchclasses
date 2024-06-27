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

const getModularPageSlugs = async () => {
	const { _allModularPagesMeta } = await client.query({
		_allModularPagesMeta: {
			count: true,
		},
	});

	const slugs = [];

	const totalPosts = _allModularPagesMeta.count;
	const iterations = Math.ceil(totalPosts / 20);

	for (let i = 0; i < iterations; i++) {
		const skip = i * 20;
		const first = 20;

		const { allModularPages } = await client.query({
			allModularPages: {
				__args: {
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

		slugs.push(...allModularPages);
	}

	return slugs;
};

const getLocationModularPagesSlugs = async (pageTypes?: ("courses" | "tutors")[]) => {
	const { _allModularPageLocationsMeta } = await client.query({
		_allModularPageLocationsMeta: {
			count: true,
		},
	});

	const slugs = [];

	const totalPosts = _allModularPageLocationsMeta.count;
	const iterations = Math.ceil(totalPosts / 20);

	const pageTypeFilter = (pageTypes || ["courses", "tutors"]).map(pageType => ({
		pageType: {
			eq: pageType,
		},
	}));

	for (let i = 0; i < iterations; i++) {
		const skip = i * 20;
		const first = 20;

		const { allModularPageLocations } = await client.query({
			allModularPageLocations: {
				__args: {
					skip,
					first,
					filter: {
						OR: pageTypeFilter,
					},
				},
				slug: true,
				pageType: true,
				_updatedAt: true,
			},
		});

		slugs.push(...allModularPageLocations);
	}

	return slugs;
};

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

export {
	getLocationModularPagesSlugs,
	getModularPageSlugs,
	getSingleLocationModularPage,
	getSingleModularPage
};

