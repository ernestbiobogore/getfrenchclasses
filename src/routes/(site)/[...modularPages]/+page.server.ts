import { getAllCourses } from "$lib/graphql/queries/courses";
import { getHomePageData } from "$lib/graphql/queries/home";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
	const { modularPages } = params;
	const routes = modularPages.split("/");

	if (routes.length === 1) {
		redirect(301, "/courses");
	}

	return {
		loacation: routes[1],
		homepageData: await getHomePageData(),
		newCourses: (await getAllCourses(3)).filter(course => course.tag === "new"),
		popularCourses: (await getAllCourses(3)).filter(course => course.tag === "popular"),
	};
}
