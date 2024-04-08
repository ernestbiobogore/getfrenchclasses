import type { TestimonialBlockCtaRecord } from "$lib/graphql/generated";
import { getTestimonialBySlug } from "$lib/graphql/queries/testimonials";

export const load = async () => {
	return {
		testimonial: (await getTestimonialBySlug("jane-doe-cta")) as
			| TestimonialBlockCtaRecord
			| undefined,
	};
};
