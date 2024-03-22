import { client } from "$lib/graphql/client";
import {
	courseMetaFields,
	defaultTestimonialFieldsSelection,
	faqItemFieldsSelection,
	tutorMetaFields,
} from "./fields";

const getAllTutorsMetas = async (first?: number) => {
	const { allTutors } = await client.query({
		allTutors: {
			__args: {
				first,
			},
			...tutorMetaFields,
		},
	});

	return allTutors;
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
			reviews: defaultTestimonialFieldsSelection,

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

export { getAllTutorsMetas, getTutorBySlug };
