import { client } from "$lib/graphql/client";

export async function getallJobMetas(type?: string) {
	const { allJobs } = await client.query({
		allJobs: {
			__args: {
				filter: {
					jobType: {
						eq: type,
					},
				},
			},
			id: true,
			title: true,
			slug: true,
			location: true,
			jobType: true,
		},
	});

	return allJobs;
}

export async function getJobBySlug(slug: string) {
	const { job } = await client.query({
		job: {
			__args: {
				filter: {
					slug: {
						eq: slug,
					},
				},
			},
			id: true,
			title: true,
			location: true,
			cta: {
				link: true,
				text: true,
			},
			contentItems: {
				richText: {
					value: true,
				},
			},
		},
	});

	return job;
}
