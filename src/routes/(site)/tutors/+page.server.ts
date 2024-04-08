import { getSingleModularPage } from "$lib/graphql/queries/modular";
import { getAllTutorsMetas } from "$lib/graphql/queries/tutors";
import { formatTutorMeta } from "./utils.server";

export const load = async () => {
	const tutorsMetas = (await getAllTutorsMetas()).map(formatTutorMeta);

	return {
		tutorsMetas,
		modularPage: await getSingleModularPage("tutors"),
	};
};
