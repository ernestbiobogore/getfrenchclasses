import { getFaqItemBySlug } from "$lib/graphql/queries/faq";

export async function load() {
	return {
		homeFaq: await getFaqItemBySlug("homepage-faq"),
	};
}
