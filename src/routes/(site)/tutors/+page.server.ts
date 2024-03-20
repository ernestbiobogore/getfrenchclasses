import { getFaqItemBySlug } from "$lib/graphql/queries/faq";
import { getAllTutorsMetas } from "$lib/graphql/queries/tutors";
import { formatTutorMeta } from "./utils.server";

export const load = async () => {
	const tutorsMetas = (await getAllTutorsMetas()).map(formatTutorMeta);

	return {
		tutorsMetas,
		homeFaq: await getFaqItemBySlug("homepage-faq"),
	};
};
