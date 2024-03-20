import { getFaqItemBySlug } from "$lib/graphql/queries/faq";

export const load = async () => {
	return {
		homeFaq: await getFaqItemBySlug("homepage-faq"),
	};
};
