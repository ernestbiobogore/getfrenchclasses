import { getFaqItemBySlug } from "$lib/graphql/queries/faq";
import { getResourcePage } from "$lib/graphql/queries/resource";
import { getHomeTestomoinialCta } from "$lib/graphql/queries/testimonial.js";

export async function load({ params }) {
	const [homeFaq, resource, homepage] = await Promise.all([
		getFaqItemBySlug("homepage-faq"),
		getResourcePage(params.slug),
		getHomeTestomoinialCta(),
	]);

	return { homeFaq, resource, homepage };
}
