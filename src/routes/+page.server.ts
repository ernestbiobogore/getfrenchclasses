import { getAllCourses } from '$lib/graphql/queries/courses';

export const load = async () => {
	return {
		newCourses: (await getAllCourses(3)).filter((course) => course.tag === 'new'),
		popularCourses: (await getAllCourses(3)).filter((course) => course.tag === 'popular')
	};
};
