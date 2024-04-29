import { client } from "$lib/graphql/client";
import { responsiveImageFieldSelection } from "./fields";

export async function getResourcePage(slug: string) {
	const { resource } = await client.query({
		resource: {
			__args: {
				filter: {
					slug: {
						eq: slug,
					},
				},
			},
			id: true,
			title: true,
			slug: true,
			featuredImage: {
				url: true,
				alt: true,
				responsiveImage: responsiveImageFieldSelection,
			},
			summary: {
				value: true,
			},
			cta: {
				title: true,
				convertboxId: true,
			},
			contentHeading: true,
			contentItems: {
				text: true,
			},
			contentMedias: {
				url: true,
				alt: true,
				responsiveImage: responsiveImageFieldSelection,
			},
			descriptionHeading: true,
			descriptionContent: {
				value: true,
			},
		},
	});

	return resource;
}

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
				url: true,
				alt: true,
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
