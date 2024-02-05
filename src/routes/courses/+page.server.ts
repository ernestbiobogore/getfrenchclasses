import { getAllCourses } from "$lib/graphql/queries/courses";

export const load = async () => {
	const allCourses = await getAllCourses();

	return {
		allCourses,
	};
};
