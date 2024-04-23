import { getSingleModularPage } from "$lib/graphql/queries/modular";
import { error } from "@sveltejs/kit";

export const load = async () => {
	const modularPage = await getSingleModularPage("about");

	if (!modularPage) {
		error(404, "Page not found");
	}

	return {
		modularPage,
	};
};
