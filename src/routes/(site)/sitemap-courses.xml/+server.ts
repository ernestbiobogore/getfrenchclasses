import { getCoursesSlugs } from "$lib/graphql/queries/courses";
import { getLocationModularPagesSlugs } from "$lib/graphql/queries/modular";
import {
	getSitemapEntriesXml,
	getSitemapMeta,
	getSitemapResponseHeaders,
	getSitemapXml,
} from "$lib/server/sitemaps";

export const GET = async ({ url }) => {
	const { siteURL, priority, frequency } = getSitemapMeta(url);

	const coursesEntries = (await getCoursesSlugs()).map(({ slug, _updatedAt }) => ({
		url: `${siteURL}/course/${slug}`,
		lastmod: new Date(_updatedAt).toISOString(),
		priority,
		frequency,
	}));

	const locationModularPagesSlugs = await getLocationModularPagesSlugs();

	const coursesLocationModularSlugs = locationModularPagesSlugs.filter(
		({ pageType }) => pageType === "courses"
	);

	const coursesLocationModularPagesEntries = coursesLocationModularSlugs.map(
		({ slug, _updatedAt }) => ({
			url: `${siteURL}/courses/${slug}`,
			lastmod: new Date(_updatedAt).toISOString(),
			priority,
			frequency,
		})
	);

	const entriesXml = getSitemapEntriesXml([
		...coursesLocationModularPagesEntries,
		...coursesEntries,
	]);

	return new Response(getSitemapXml(entriesXml), {
		headers: getSitemapResponseHeaders(),
	});
};
