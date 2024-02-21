import { getHomePageData } from "$lib/graphql/queries/home";

export const load = async () => {
	return {
		homepageData: await getHomePageData(),
	};
};
