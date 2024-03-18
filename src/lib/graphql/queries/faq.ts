import { client } from "$lib/graphql/client";
import { faqBlockFieldSelection } from "./fields";

const getFaqItemBySlug = async (slug: string) => {
	const { faqItem } = await client.query({
		faqItem: {
			__args: {
				filter: {
					slug: {
						eq: slug,
					},
				},
			},
			title: true,
			slug: true,
			faqBlocks: faqBlockFieldSelection,
		},
	});

	return faqItem;
};

export { getFaqItemBySlug };
