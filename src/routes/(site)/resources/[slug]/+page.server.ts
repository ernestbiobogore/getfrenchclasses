import { getFaqItemBySlug } from "$lib/graphql/queries/faq";
import { getResourcePage } from "$lib/graphql/queries/resource";

export async function load({ params }) {
	const [homeFaq, resource] = await Promise.all([
		getFaqItemBySlug("homepage-faq"),
		getResourcePage(params.slug),
	]);

	return { homeFaq, resource };
}
