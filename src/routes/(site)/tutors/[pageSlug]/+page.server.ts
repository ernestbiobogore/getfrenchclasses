import { getCitiesWithTutors, getCityBySlugWithTutors } from "$lib/graphql/queries/locations";
import { getSingleLocationModularPage } from "$lib/graphql/queries/modular";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
	const { pageSlug } = params;
	const modularPage = await getSingleLocationModularPage(pageSlug);

	if (!modularPage) {
		error(404, "Location page not found");
	}

	const citySlug = modularPage.city.slug;

	const citiesWithTutors = await getCitiesWithTutors();
	const city = await getCityBySlugWithTutors(citySlug);

	if (!city) {
		error(404, "City not found");
	}

	return {
		city,
		modularPage,
		// courses,
		citiesWithTutors,
		// countriesWithTutors,
	};
}
