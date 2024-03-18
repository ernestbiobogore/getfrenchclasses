import { getFaqItemBySlug } from "$lib/graphql/queries/faq";

export async function load() {
	return {
		homeFaqBlocks: (await getFaqItemBySlug("homepage-faq"))?.faqBlocks,
	};
}
