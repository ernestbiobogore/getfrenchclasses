import { getSingleLocationModularPage } from "$lib/graphql/queries/modular";
import { error } from "@sveltejs/kit";

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
