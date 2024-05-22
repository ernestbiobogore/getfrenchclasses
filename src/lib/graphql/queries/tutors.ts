import { client } from "$lib/graphql/client";
import {
	courseMetaFields,
	defaultTestimonialFieldsSelection,
	faqItemFieldsSelection,
	tutorMetaFields,
} from "./fields";

const getTutorsSlugs = async () => {
	const { _allTutorsMeta } = await client.query({
		_allTutorsMeta: {
			count: true,
		},
	});

	const slugs = [];

	const totalTutors = _allTutorsMeta.count;
	const iterations = Math.ceil(totalTutors / 20);

	for (let i = 0; i < iterations; i++) {
		const skip = i * 20;
		const first = 20;

		const { allTutors } = await client.query({
			allTutors: {
				__args: {
					first,
					skip,
				},
				slug: true,
				_updatedAt: true,
			},
		});

		slugs.push(...allTutors);
	}

	return slugs;
};

const getAllTutorsMetas = async (first?: number) => {
	const { _allTutorsMeta } = await client.query({
		_allTutorsMeta: {
			count: true,
		},
	});

	const totalTutors = _allTutorsMeta.count;
	const iterations = Math.ceil(totalTutors / 20);

	const tutors = [];

	for (let i = 0; i < iterations; i++) {
		const skip = i * 20;
		const first = 20;

		const { allTutors } = await client.query({
			allTutors: {
				__args: {
					first,
					skip,
				},
				...tutorMetaFields,
			},
		});

		tutors.push(...allTutors);
	}

	return tutors;
};

const getTutorBySlug = async (slug: string) => {
	const { tutor } = await client.query({
		tutor: {
			__args: {
				filter: {
					slug: {
						eq: slug,
					},
				},
			},
			...tutorMetaFields,

			qualifiedCoursesTitle: true,
			qualifiedCourses: courseMetaFields,

			about: {
				value: true,
			},

			faqTitle: true,
			faq: faqItemFieldsSelection,

			reviewsTitle: true,
			reviews: {
				testimonial: {
					on_TestimonialBlockDefaultRecord: defaultTestimonialFieldsSelection,
				},
			},

			verified: true,
			verifiedDescription: {
				value: true,
			},

			topics: {
				text: true,
			},

			otherTutors: tutorMetaFields,
		},
	});

	return tutor;
};

export { getAllTutorsMetas, getTutorBySlug, getTutorsSlugs };
