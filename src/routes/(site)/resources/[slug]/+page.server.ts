import { getHomePageData } from "$lib/graphql/queries/home";

export async function load() {
	return {
		homepageData: await getHomePageData(),
	};
}
