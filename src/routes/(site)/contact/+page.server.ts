import { getFaqItemBySlug } from "$lib/graphql/queries/faq";

export const load = async () => {
	return {
		homeFaqBlocks: (await getFaqItemBySlug("homepage-faq"))?.faqBlocks,
	};
};
