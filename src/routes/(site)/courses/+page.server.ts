import { getAllCoursesMetas } from "$lib/graphql/queries/courses";
import { getTestimonialBySlug } from "$lib/graphql/queries/testimonials";

export const load = async () => {
	const allCoursesMetas = await getAllCoursesMetas();
	const testimonial = await getTestimonialBySlug("jane-doe-cta");

	return {
		allCoursesMetas,
		testimonial,
	};
};
