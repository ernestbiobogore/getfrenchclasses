import { formatTutorMeta } from "$dato/blocks/tutors/utils.server";
import { getSingleModularPage } from "$lib/graphql/queries/modular";
import { getAllTutorsMetas } from "$lib/graphql/queries/tutors";
import { error } from "@sveltejs/kit";

export const load = async () => {
	const tutorsMetas = (await getAllTutorsMetas()).map(formatTutorMeta);
	const modularPage = await getSingleModularPage("tutors");

	if (!modularPage) {
		error(404, "Page not found");
	}

	return {
		tutorsMetas,
		modularPage,
	};
};
