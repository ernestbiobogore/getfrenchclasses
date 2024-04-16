import { RESEND_API_KEY } from "$env/static/private";
import { Resend } from "resend";

type SendEmailResponse = {
	type: "error" | "success";
	status: number;
	title: string;
	message: string;
};

const sendResendEmail = async (options: {
	from: string;
	to: string;
	subject: string;
	html: string;
}): Promise<SendEmailResponse> => {
	const resend = new Resend(RESEND_API_KEY);

	try {
		const createEmailResponse = await resend.emails.send(options);

		if (createEmailResponse.error) {
			console.error(createEmailResponse.error);

			return {
				type: "error",
				status:
					"statusCode" in createEmailResponse.error
						? (createEmailResponse.error.statusCode as number)
						: 500,
				title: "Error sending email (Resend)",
				message: "An unknown error occurred while sending the email. Please try again later.",
			};
		}

		console.log("Email sent successfully");

		return {
			type: "success",
			status: 200,
			title: "Email sent successfully",
			message: "Check your inbox for the email.",
		};
	} catch (err) {
		console.error(err);

		return {
			type: "error",
			status: 500,
			title: "Error sending email",
			message: "An unknown error occurred while sending the email. Please try again later.",
		};
	}
};

export { sendResendEmail };
