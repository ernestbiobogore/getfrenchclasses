import { getSiteConfig } from "$lib/graphql/queries/config";

export const load = async () => {
	return {
		siteConfig: await getSiteConfig(),
	};
};
