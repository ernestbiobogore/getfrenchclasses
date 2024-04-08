import type { TestimonialBlockCtaRecord } from "$lib/graphql/generated";
import { getFaqItemBySlug } from "$lib/graphql/queries/faq";
import { getTestimonialBySlug } from "$lib/graphql/queries/testimonials";
import { getAllTutorsMetas } from "$lib/graphql/queries/tutors";
import { formatTutorMeta } from "./utils.server";

export const load = async () => {
	const tutorsMetas = (await getAllTutorsMetas()).map(formatTutorMeta);

	return {
		homeFaq: await getFaqItemBySlug("homepage-faq"),
		tutorsMetas,
		testimonial: (await getTestimonialBySlug("jane-doe-cta")) as
			| TestimonialBlockCtaRecord
			| undefined,
	};
};
