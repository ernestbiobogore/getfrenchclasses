import { RESOURCES_PER_PAGE } from "$lib/constants";
import { getAllResources, getResourcesCount } from "$lib/graphql/queries/resource";
import { redirect } from "@sveltejs/kit";

export const load = async ({ url }) => {
	const resourcesCount = await getResourcesCount();
	const numberOfPages = Math.ceil(resourcesCount / RESOURCES_PER_PAGE);

	const pageParam = url.searchParams.get("page") || 1;
	// const topicParam = url.searchParams.get("topic");

	if (Number(pageParam) > numberOfPages) {
		redirect(301, "/resources?page=1");
	}

	const amountToSkip = (Number(pageParam) - 1) * RESOURCES_PER_PAGE;

	// let topicId: string | undefined;

	// if (topicParam) {
	// 	topicId = (await getTopicBySlug(topicParam))?.id;
	// }


	const allResources = await getAllResources({
		first: RESOURCES_PER_PAGE,
		skip: amountToSkip,
		// topics: topicId ? [topicId] : undefined,
	});

	return {
		allResources,
		resourcesCount,
		pageParam,
	};
};
