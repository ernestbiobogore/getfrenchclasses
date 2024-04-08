import { client } from "$lib/graphql/client";
import { ctaTestimonialFieldsSelection } from "./fields";

const getTestimonialBySlug = async (slug: string) => {
	const { testimonial } = await client.query({
		testimonial: {
			__args: {
				filter: {
					slug: {
						eq: slug,
					},
				},
			},

			testimonial: {
				on_TestimonialBlockCtaRecord: ctaTestimonialFieldsSelection,
			},
		},
	});

	return testimonial?.testimonial;
};

export { getTestimonialBySlug };
