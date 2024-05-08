import { getAllCoursesMetas } from "$lib/graphql/queries/courses";
import { getSingleModularPage } from "$lib/graphql/queries/modular";
import { getTestimonialBySlug } from "$lib/graphql/queries/testimonials";
import { error } from "@sveltejs/kit";

export const load = async () => {
	const modularPage = await getSingleModularPage("courses");

	if (!modularPage) {
		error(404, "Page not found");
	}

	const allCoursesMetas = await getAllCoursesMetas();
	const testimonial = await getTestimonialBySlug("jane-doe-cta");

	return {
		allCoursesMetas,
		testimonial,
		modularPage,
	};
};
