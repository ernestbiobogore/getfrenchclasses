import { formatTutorMeta } from "$dato/blocks/tutors/utils.server";
import { CONTACT_FORM_RECIPIENT_EMAIL, CONTACT_FORM_SENDER_NAME } from "$env/static/private";
import { getCourseBySlug } from "$lib/graphql/queries/courses";
import { getAllTutorsMetas } from "$lib/graphql/queries/tutors";
import { sendResendEmail } from "$lib/server/resend";
import { error, fail } from "@sveltejs/kit";

export const load = async ({ params }) => {
	const course = await getCourseBySlug(params.slug);
	const tutorsMetas = await getAllTutorsMetas(3);

	if (!course) {
		throw error(404, "Course not found");
	}

	return {
		course,
		tutorsMetas: tutorsMetas.map(formatTutorMeta),
	};
};

export const actions = {
	sendUserEmail: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());
		const { email, slug } = formData as {
			email: string | undefined;
			slug: string;
		};

		if (!email) {
			return fail(400, {
				error: {
					title: "Email address is required",
					message: undefined,
				},
			});
		}

		const course = await getCourseBySlug(slug);

		try {
			const sendEmailResponse = await sendResendEmail({
				from: CONTACT_FORM_SENDER_NAME + "<" + "courses@updates.getfrenchclasses.com" + ">",
				to: CONTACT_FORM_RECIPIENT_EMAIL,
				subject: `New user email (courses)`,
				html: `
					Course: ${course?.name}
					<br />
					Email: ${email}
				`,
			});

			if (sendEmailResponse.type === "error") {
				return fail(sendEmailResponse.status, {
					error: {
						title: sendEmailResponse.title,
						message: sendEmailResponse.message,
					},
				});
			}

			return {
				success: true,
				message: "Your email has been sent. Thank you!",
			};
		} catch (error) {
			return fail(500, {
				error: {
					title: "An error occurred while sending the form. Please try again",
					message: undefined,
				},
			});
		}
	},
};
