import { getAllResources } from "$lib/graphql/queries/resource";

export const load = async () => {
	const allResources = await getAllResources();

	return {
		allResources,
	};
};
