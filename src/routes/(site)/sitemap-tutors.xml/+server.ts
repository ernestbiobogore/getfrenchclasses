import { getLocationModularPagesSlugs } from "$lib/graphql/queries/modular";
import { getTutorsSlugs } from "$lib/graphql/queries/tutors";
import {
	getSitemapEntriesXml,
	getSitemapMeta,
	getSitemapResponseHeaders,
	getSitemapXml,
} from "$lib/server/sitemaps";

export const GET = async ({ url }) => {
	const { siteURL, priority, frequency } = getSitemapMeta(url);

	const tutorsSlugs = await getTutorsSlugs();
	const tutorsEntries = tutorsSlugs.map(({ slug, _updatedAt }) => ({
		url: `${siteURL}/tutor/${slug}`,
		lastmod: new Date(_updatedAt).toISOString(),
		priority,
		frequency,
	}));

	const locationModularPagesSlugs = await getLocationModularPagesSlugs();
	const tutorsLocationModularSlugs = locationModularPagesSlugs.filter(
		({ pageType }) => pageType === "tutors"
	);
	const tutorsLocationModularPagesEntries = tutorsLocationModularSlugs.map(
		({ slug, _updatedAt }) => ({
			url: `${siteURL}/tutors/${slug}`,
			lastmod: new Date(_updatedAt).toISOString(),
			priority,
			frequency,
		})
	);

	const entriesXml = getSitemapEntriesXml([...tutorsLocationModularPagesEntries, ...tutorsEntries]);

	return new Response(getSitemapXml(entriesXml), {
		headers: getSitemapResponseHeaders(),
	});
};
