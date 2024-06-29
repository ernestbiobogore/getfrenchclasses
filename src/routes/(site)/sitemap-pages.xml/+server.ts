import { ISR_BYPASS_TOKEN } from "$env/static/private";
import { getModularPageSlugs } from "$lib/graphql/queries/modular";
import {
	getSitemapEntriesXml,
	getSitemapMeta,
	getSitemapResponseHeaders,
	getSitemapXml,
} from "$lib/server/sitemaps";

export const config = {
	isr: {
		expiration: 1800,
		bypassToken: ISR_BYPASS_TOKEN,
	},
};

export const GET = async ({ url }) => {
	const { siteURL, priority, frequency } = getSitemapMeta(url);

	const modularPagesSlugs = await getModularPageSlugs();
	const modularPagesEntries = modularPagesSlugs
		.filter(({ slug }) => slug !== "get-french-classes")
		.map(({ slug, _updatedAt }) => ({
			url: `${siteURL}/${slug}`,
			lastmod: new Date(_updatedAt).toISOString(),
			priority,
			frequency,
		}));

	const entries = [
		{
			url: siteURL,
			lastmod: new Date().toISOString(),
			frequency,
			priority,
		},
		...modularPagesEntries,
	];

	const entriesXml = getSitemapEntriesXml(entries);

	return new Response(getSitemapXml(entriesXml), {
		headers: getSitemapResponseHeaders(),
	});
};
