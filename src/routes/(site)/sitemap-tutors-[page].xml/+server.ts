import { ISR_BYPASS_TOKEN } from "$env/static/private";
import { getLocationModularPagesSlugs } from "$lib/graphql/queries/modular";
import { getTutorsSlugs } from "$lib/graphql/queries/tutors";
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

	const tutorsSlugs = await getTutorsSlugs();
	const tutorsEntries = tutorsSlugs.map(({ slug, _updatedAt }) => ({
		url: `${siteURL}/tutor/${slug}`,
		lastmod: new Date(_updatedAt).toISOString(),
		priority,
		frequency,
	}));

	const { slugsData, totalPosts } = await getLocationModularPagesSlugs({
		pageTypes: ["tutors"],
		itemsPerPage: ITEMS_PER_PAGE,
		currentPage: page,
		extraEntriesCount: tutorsEntries.length,
	});
	const tutorsLocationModularPagesEntries = slugsData.map(({ slug, _updatedAt }) => ({
		url: `${siteURL}/tutors/${slug}`,
		lastmod: new Date(_updatedAt).toISOString(),
		priority,
		frequency,
	}));

	const maxPages = Math.ceil((tutorsEntries.length + totalPosts) / ITEMS_PER_PAGE);

	if (page > maxPages) {
		return new Response("Invalid page number", { status: 400 });
	}

	const entriesXml = getSitemapEntriesXml([
		...(page === 1 ? tutorsEntries : []),
		...tutorsLocationModularPagesEntries,
	]);

	return new Response(getSitemapXml(entriesXml), {
		headers: getSitemapResponseHeaders(),
	});
};
