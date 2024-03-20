import { getAllCourses } from "$lib/graphql/queries/courses";
import { getFaqItemBySlug } from "$lib/graphql/queries/faq";
import { getTutorBySlug } from "$lib/graphql/queries/tutors";
import { error } from "@sveltejs/kit";
import { formatSingleTutor } from "../utils.server";

export async function load({ params }) {
	const { tutorSlug } = params;
	const tutor = await getTutorBySlug(tutorSlug);

	if (!tutor) {
		error(404, "Tutor not found");
	}

	return {
		tutor: formatSingleTutor(tutor),
		allCourses: await getAllCourses(3),
		homeFaqBlocks: (await getFaqItemBySlug("homepage-faq"))?.faqBlocks,
	};
}
