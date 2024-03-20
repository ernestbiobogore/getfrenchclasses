import { getAllCoursesMetas } from "$lib/graphql/queries/courses";

export const load = async () => {
	const allCoursesMetas = await getAllCoursesMetas();

	return {
		allCoursesMetas,
	};
};
