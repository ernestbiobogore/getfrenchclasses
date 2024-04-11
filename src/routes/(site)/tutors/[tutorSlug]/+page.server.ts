import { formatSingleTutor } from "$dato/blocks/tutors/utils.server";
import { getTutorBySlug } from "$lib/graphql/queries/tutors";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
	const { tutorSlug } = params;
	const tutor = await getTutorBySlug(tutorSlug);

	if (!tutor) {
		error(404, "Tutor not found");
	}

	return {
		tutor: formatSingleTutor(tutor),
	};
}
