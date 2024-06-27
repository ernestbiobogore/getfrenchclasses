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

const getLocationModularPagesCount = async ({
	pageTypes,
}: {
	pageTypes?: ("courses" | "tutors")[];
}) => {
	const pageTypeFilter = (pageTypes || ["courses", "tutors"]).map(pageType => ({
		pageType: {
			eq: pageType,
		},
	}));

	const { _allModularPageLocationsMeta } = await client.query({
		_allModularPageLocationsMeta: {
			count: true,
			__args: {
				filter: {
					OR: pageTypeFilter,
				},
			},
		},
	});

	return _allModularPageLocationsMeta.count;
};

type GetLocationModularPagesSlugsParams = {
	pageTypes?: ("courses" | "tutors")[];
	itemsPerPage?: number;
	currentPage?: number;
	extraEntriesCount?: number;
};
const getLocationModularPagesSlugs = async ({
	pageTypes,
	itemsPerPage = 50,
	currentPage = 1,
	extraEntriesCount = 0,
}: GetLocationModularPagesSlugsParams) => {
	const pageTypeFilter = (pageTypes || ["courses", "tutors"]).map(pageType => ({
		pageType: {
			eq: pageType,
		},
	}));

	const totalPosts = (await getLocationModularPagesCount({ pageTypes })) + extraEntriesCount;
	const totalPages = Math.ceil(totalPosts / itemsPerPage);

	if (currentPage < 1 || currentPage > totalPages) {
		console.error(`Invalid page number. Must be between 1 and ${totalPages}`);

		return {
			slugsData: [],
			totalPosts: 0,
			totalPages: 0,
		};
	}

	const skip = Math.max(0, (currentPage - 1) * itemsPerPage - extraEntriesCount);
	const first = Math.min(itemsPerPage, Math.max(0, itemsPerPage - (extraEntriesCount - skip)));

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

	return {
		slugsData: allModularPageLocations,
		totalPosts,
		totalPages,
	};
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
	getLocationModularPagesCount, getLocationModularPagesSlugs,
	getModularPageSlugs,
	getSingleLocationModularPage,
	getSingleModularPage
};

