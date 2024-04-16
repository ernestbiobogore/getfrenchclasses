import {
	CONTACT_FORM_RECIPIENT_EMAIL,
	CONTACT_FORM_SENDER_EMAIL,
	CONTACT_FORM_SENDER_NAME,
} from "$env/static/private";
import { getSingleModularPage } from "$lib/graphql/queries/modular";
import { sendResendEmail } from "$lib/server/resend";
import { error, fail } from "@sveltejs/kit";

export const load = async () => {
	const modularPage = await getSingleModularPage("contact");

	if (!modularPage) {
		error(404, "Page not found");
	}

	return {
		modularPage,
	};
};

export const actions = {
	default: async event => {
		const formData = Object.fromEntries(await event.request.formData());
		const { name, email, message } = formData as {
			name: string | undefined;
			email: string | undefined;
			message: string | undefined;
		};

		if (!name || !email || !message) {
			return fail(400, {
				error: {
					title: "Please fill out the form correctly",
					message: undefined,
				},
			});
		}

		try {
			const date = new Intl.DateTimeFormat("en-US", {
				weekday: "long",
				day: "numeric",
				month: "long",
				year: "numeric",
				hour: "numeric",
				minute: "numeric",
			}).format(new Date());

			const sendEmailResponse = await sendResendEmail({
				from: CONTACT_FORM_SENDER_NAME + "<" + CONTACT_FORM_SENDER_EMAIL + ">",
				to: CONTACT_FORM_RECIPIENT_EMAIL,
				subject: `New contact form submission from GetFrenchClasses on ${date}`,
				html: `
					Name: ${name}
					<br />
					<br />
					Email: ${email}
					<br />
					<br />
					Message:
					<p>${message}</p>
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
				message: "Your message has been sent. Thank you for contacting us!",
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
