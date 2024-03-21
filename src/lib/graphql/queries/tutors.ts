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
			qualifiedCourses: courseMetaFields,
			about: {
				value: true,
			},
			faq: faqItemFieldsSelection,
			reviews: defaultTestimonialFieldsSelection,
			verified: true,
			verifiedDescription: {
				value: true,
			}
		},
	});

	return tutor;
};

export { getAllTutorsMetas, getTutorBySlug };
