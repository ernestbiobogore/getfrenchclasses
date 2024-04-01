import { client } from "$lib/graphql/client";
import { responsiveImageFieldSelection } from "./fields";

const getResourcesCount = async () => {
	const { _allResourcesMeta } = await client.query({
		_allResourcesMeta: {
			count: true,
		},
	});

	return _allResourcesMeta.count;
};

const getAllResources = async (first?: number) => {
	const { allResources } = await client.query({
		allResources: {
			__args: {
				first,
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
		},
	});

	return allResources;
};

export { getAllResources, getResourcesCount };
