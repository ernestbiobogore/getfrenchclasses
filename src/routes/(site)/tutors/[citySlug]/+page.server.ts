import { getAllCoursesMetas } from "$lib/graphql/queries/courses";
import { getCitiesWithTutors, getCityBySlugWithTutors } from "$lib/graphql/queries/locations";
import { getSingleModularPage } from "$lib/graphql/queries/modular";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
	const { citySlug } = params;
	const city = await getCityBySlugWithTutors(citySlug);

	if (!city) {
		error(404, "Location not found");
	}

	const modularPage = await getSingleModularPage("tutors-by-location");

	if (!modularPage) {
		error(404, "Page not found");
	}

	const courses = await getAllCoursesMetas(3);
	const citiesWithTutors = await getCitiesWithTutors();
	// const countriesWithTutors = await getCountriesWithTutors();

	return {
		city,
		modularPage,
		courses,
		citiesWithTutors,
		// countriesWithTutors,
	};
}
