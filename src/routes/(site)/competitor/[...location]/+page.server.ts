import { getAllCourses } from "$lib/graphql/queries/courses";
import { getHomePageData } from "$lib/graphql/queries/home";

export async function load({ params }) {
	const { location } = params;
	const locations = location.split("/");

	const [homepageData, newCourses, popularCourses] = await Promise.all([
		getHomePageData(),
		getAllCourses(3),
		getAllCourses(3),
	]);

	return {
		locations,
		homepageData,
		newCourses: newCourses.filter(course => course.tag === "new"),
		popularCourses: popularCourses.filter(course => course.tag === "popular"),
	};
}
