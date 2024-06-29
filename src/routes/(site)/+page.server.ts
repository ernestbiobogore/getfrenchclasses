import { ISR_BYPASS_TOKEN } from "$env/static/private";
import { getSingleModularPage } from "$lib/graphql/queries/modular";
import { error } from "@sveltejs/kit";

export const config = {
	isr: {
		expiration: 600,
		bypassToken: ISR_BYPASS_TOKEN,
	},
};

export const load = async () => {
	const modularPage = await getSingleModularPage("get-french-classes");

	if (!modularPage) {
		error(404, "Page not found");
	}

	return {
		modularPage,
	};
};
