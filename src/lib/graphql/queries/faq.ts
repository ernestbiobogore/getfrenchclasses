import { client } from "$lib/graphql/client";
import { faqItemFieldsSelection } from "./fields";

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
			...faqItemFieldsSelection,
		},
	});

	return faqItem;
};

export { getFaqItemBySlug };
