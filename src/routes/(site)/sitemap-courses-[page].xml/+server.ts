import { ISR_BYPASS_TOKEN } from "$env/static/private";
import { getCoursesSlugs } from "$lib/graphql/queries/courses";
import { getLocationModularPagesSlugs } from "$lib/graphql/queries/modular";
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

export const GET = async ({ url, params }) => {
	const { siteURL, priority, frequency } = getSitemapMeta(url);
	const page = parseInt(params.page, 10);

	if (isNaN(page) || page < 1) {
		return new Response("Invalid page number", { status: 400 });
	}

	const ITEMS_PER_PAGE = 100;

	const coursesEntries = (await getCoursesSlugs()).map(({ slug, _updatedAt }) => ({
		url: `${siteURL}/course/${slug}`,
		lastmod: new Date(_updatedAt).toISOString(),
		priority,
		frequency,
	}));

	const { slugsData, totalPosts } = await getLocationModularPagesSlugs({
		pageTypes: ["courses"],
		itemsPerPage: ITEMS_PER_PAGE,
		currentPage: page,
		extraEntriesCount: coursesEntries.length,
	});
	const coursesLocationModularPagesEntries = slugsData.map(({ slug, _updatedAt }) => ({
		url: `${siteURL}/courses/${slug}`,
		lastmod: new Date(_updatedAt).toISOString(),
		priority,
		frequency,
	}));

	const maxPages = Math.ceil((coursesEntries.length + totalPosts) / ITEMS_PER_PAGE);

	if (page > maxPages) {
		return new Response("Invalid page number", { status: 400 });
	}

	const entriesXml = getSitemapEntriesXml([
		...(page === 1 ? coursesEntries : []),
		...coursesLocationModularPagesEntries,
	]);

	return new Response(getSitemapXml(entriesXml), {
		headers: getSitemapResponseHeaders(),
	});
};
