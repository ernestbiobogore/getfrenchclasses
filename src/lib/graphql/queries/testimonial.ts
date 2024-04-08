import { client } from "$lib/graphql/client";
import { ctaTestimonialFieldsSelection } from "./fields";

export async function getHomeTestomoinialCta() {
	const { modularPage } = await client.query({
		modularPage: {
			__args: {
				filter: {
					slug: {
						eq: "get-french-classes",
					},
				},
			},
			modularContent: {
				on_TestimonialsSectionRecord: {
					testimonials: {
						on_TestimonialBlockCtaRecord: ctaTestimonialFieldsSelection,
					},
				},
			},
		},
	});

	return modularPage;
}
