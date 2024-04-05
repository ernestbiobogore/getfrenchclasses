import { client } from "$lib/graphql/client";
import { responsiveImageFieldSelection } from "./fields";

const getTopicBySlug = async (slug: string) => {
	const { resourceTopic } = await client.query({
		resourceTopic: {
			__args: {
				filter: {
					slug: {
						eq: slug,
					},
				},
			},
			id: true,
		},
	});

	return resourceTopic;
};

const getResourcesCount = async () => {
	const { _allResourcesMeta } = await client.query({
		_allResourcesMeta: {
			count: true,
		},
	});

	return _allResourcesMeta.count;
};

type GetAllResourcesParams = {
	first?: number;
	skip?: number;
};
const getAllResources = async ({ first, skip }: GetAllResourcesParams) => {
	const { allResources } = await client.query({
		allResources: {
			__args: {
				first,
				skip,
			},
			id: true,
			__typename: true,

			title: true,
			slug: true,
			featuredImage: {
				responsiveImage: responsiveImageFieldSelection,
			},
			summary: {
				value: true,
			},
			topics: {
				id: true,
				slug: true,
				name: true,
			},
		},
	});

	return allResources;
};

export { getAllResources, getResourcesCount, getTopicBySlug };
