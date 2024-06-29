import { ISR_BYPASS_TOKEN } from "$env/static/private";
import { getSingleLocationModularPage } from "$lib/graphql/queries/modular";
import { error } from "@sveltejs/kit";

export const config = {
	isr: {
		expiration: 600,
		bypassToken: ISR_BYPASS_TOKEN,
	},
};

export async function load({ params }) {
	const { pageSlug } = params;
	const modularPage = await getSingleLocationModularPage(pageSlug, "courses");

	if (!modularPage) {
		error(404, "Course page not found");
	}

	return {
		modularPage,
	};
}
