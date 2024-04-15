import { client } from "$lib/graphql/client";

const getCompanyById = async (id: string) => {
	const { competitor } = await client.query({
		competitor: {
			__args: {
				filter: {
					id: {
						eq: id,
					},
				},
			},
			id: true,
			name: true,
			slug: true,
			logo: {
				url: true,
				alt: true,
			},
			paid: true,
		},
	});

	return competitor;
};

export { getCompanyById };
