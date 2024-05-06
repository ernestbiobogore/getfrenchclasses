import { client } from "$lib/graphql/client";

const getSiteConfig = async () => {
	const { siteConfig } = await client.query({
		siteConfig: {
			__typename: true,
			companyDescription: {
				value: true,
			},
			socialLinks: {
				socialType: true,
				link: true,
			},
		},
	});

	return siteConfig;
};

export { getSiteConfig };
