import { getMenuBySlug } from "$lib/graphql/queries/menus";

export const load = async () => {
	return {
		headerMenu: await getMenuBySlug("header"),
	};
};
