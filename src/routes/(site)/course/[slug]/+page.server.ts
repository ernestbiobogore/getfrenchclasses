import { formatTutorMeta } from "$dato/blocks/tutors/utils.server";
import { getCourseBySlug } from "$lib/graphql/queries/courses";
import { getAllTutorsMetas } from "$lib/graphql/queries/tutors";
import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {
	const course = await getCourseBySlug(params.courseSlug);
	const tutorsMetas = await getAllTutorsMetas(3);

	if (!course) {
		throw error(404, "Course not found");
	}

	return {
		course,
		tutorsMetas: tutorsMetas.map(formatTutorMeta),
	};
};
