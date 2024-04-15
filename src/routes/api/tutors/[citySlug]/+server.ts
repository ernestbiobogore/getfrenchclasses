import { getCityBySlugWithTutors } from "$lib/graphql/queries/locations";
import { json } from "@sveltejs/kit";

export const GET = async ({ params }) => {
	const { citySlug } = params;

	const city = await getCityBySlugWithTutors(citySlug);

	if (!city) {
		return new Response("City not found", { status: 404 });
	}

	const tutors = city._allReferencingTutors;

	return json({
		tutors,
	});
};
