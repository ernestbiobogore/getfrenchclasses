import { getAllCourses } from "$lib/graphql/queries/courses";
import { getHomePageData } from "$lib/graphql/queries/home";

export async function load({ params }) {
	const { tutor } = params;
	// console.log({ tutor });
	const [homepageData, allCourses] = await Promise.all([getHomePageData(), getAllCourses()]);

	return { homepageData, allCourses };
}
