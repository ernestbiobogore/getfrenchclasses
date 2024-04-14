import { client } from "$lib/graphql/client";
import { tutorMetaFields } from "./fields";

const getCitiesWithTutors = async () => {
	const { allCities } = await client.query({
		allCities: {
			slug: true,
			name: true,
			_allReferencingTutorsMeta: {
				count: true,
			},
		},
	});

	return allCities.filter(city => city._allReferencingTutorsMeta.count > 0);
};

const getCountriesWithTutors = async () => {
	const { allCountries } = await client.query({
		allCountries: {
			slug: true,
			name: true,
			_allReferencingCities: {
				_allReferencingTutorsMeta: {
					count: true,
				},
			},
		},
	});

	return allCountries.filter(
		country =>
			country._allReferencingCities.flatMap(city => city._allReferencingTutorsMeta.count).length > 0
	);
};

const getCityBySlugWithTutors = async (citySlug: string) => {
	const { city } = await client.query({
		city: {
			__args: {
				filter: {
					slug: {
						eq: citySlug,
					},
				},
			},
			name: true,
			slug: true,
			_allReferencingTutors: tutorMetaFields,
		},
	});

	return city;
};

export { getCitiesWithTutors, getCityBySlugWithTutors, getCountriesWithTutors };
