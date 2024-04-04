import { getallJobMetas } from "$lib/graphql/queries/jobs";
import { getSingleModularPage } from "$lib/graphql/queries/modular";
import { error } from "@sveltejs/kit";

export async function load() {
	const modularPage = await getSingleModularPage("jobs");

	if (!modularPage) {
		error(404, "Page not found");
	}

	const jobs = await getallJobMetas();

	return {
		modularPage,
		jobs,
	};
}
