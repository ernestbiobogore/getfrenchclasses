import { getFaqItemBySlug } from "$lib/graphql/queries/faq";
import { getResourcePage } from "$lib/graphql/queries/resource";
import { getTestimonialBySlug } from "$lib/graphql/queries/testimonial.js";

export async function load({ params }) {
	const [homeFaq, resource, testimonial] = await Promise.all([
		getFaqItemBySlug("homepage-faq"),
		getResourcePage(params.slug),
		getTestimonialBySlug("jane-doe-cta"),
	]);

	return { homeFaq, resource, testimonial };
}
