import { getJobBySlug } from "$lib/graphql/queries/jobs";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
	const job = await getJobBySlug(params.job);

	if (!job) {
		error(404, "Job not found");
	}

	return {
		job,
	};
}
