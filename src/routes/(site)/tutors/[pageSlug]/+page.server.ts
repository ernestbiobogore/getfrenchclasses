import { getCitiesWithTutors } from "$lib/graphql/queries/locations";
import { getSingleLocationModularPage } from "$lib/graphql/queries/modular";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
	const { pageSlug } = params;
	const modularPage = await getSingleLocationModularPage(pageSlug, "tutors");

	if (!modularPage) {
		error(404, "Location page not found");
	}

	const citiesWithTutors = await getCitiesWithTutors();

	return {
		modularPage,
		citiesWithTutors,
	};
}
