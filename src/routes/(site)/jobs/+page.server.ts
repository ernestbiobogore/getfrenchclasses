import { getallJobMetas } from "$lib/graphql/queries/jobs";
import { getSingleModularPage } from "$lib/graphql/queries/modular";
import { error } from "@sveltejs/kit";

export async function load({ url }) {
	const modularPage = await getSingleModularPage("jobs");

	if (!modularPage) {
		error(404, "Page not found");
	}

	const jobType = url.searchParams.get("type");
	const jobs = await getallJobMetas(jobType || undefined);

	return {
		modularPage,
		jobs,
	};
}
