import { getAllResources, getResourcesCount } from "$lib/graphql/queries/resource";

export const load = async () => {
	const allResources = await getAllResources();
	const resourcesCount = await getResourcesCount();

	return {
		allResources,
		resourcesCount,
	};
};
