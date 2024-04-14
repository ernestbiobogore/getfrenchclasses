import { client } from "$lib/graphql/client";
import { tutorMetaFields } from "./fields";

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

export { getCityBySlugWithTutors };
