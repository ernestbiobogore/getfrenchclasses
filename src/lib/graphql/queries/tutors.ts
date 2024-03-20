import { client } from "$lib/graphql/client";



const getAllTutorsMetas = async (first?: number) => {
	const { allTutors } = await client.query({
		allTutors: {
			__args: {
				first,
			},
			id: true,
			name: true,
			slug: true,
			summary: {
				value: true,
			},
			rate: true,
			rating: true,
			numberOfRatings: true,
            levels: true,
			audiences: true,
            location: true,
            remoteStatus: true,
		},
	});

	return allTutors;
};

const getTutorBySlug = async (slug: string) => {
	const { tutor } = await client.query({
		tutor: {
			__args: {
				filter: {
					slug: {
						eq: slug,
					},
				},
			},
			id: true,
			name: true,
			slug: true,
		},
	});

	return tutor;
};

export { getAllTutorsMetas, getTutorBySlug };
