import { getAllCourses } from "$lib/graphql/queries/courses";
import { getFaqItemBySlug } from "$lib/graphql/queries/faq";

export async function load() {
	return {
		allCourses: await getAllCourses(3),
		homeFaqBlocks: (await getFaqItemBySlug("homepage-faq"))?.faqBlocks,
	};
}
