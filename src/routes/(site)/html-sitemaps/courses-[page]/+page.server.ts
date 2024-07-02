import { getLocationModularPagesSlugs } from "$lib/graphql/queries/modular";
import { getSitemapMeta } from "$lib/server/sitemaps";
import { error } from "@sveltejs/kit";

export const load = async ({ params, url }) => {
	const { siteURL, priority, frequency } = getSitemapMeta(url);
	const page = parseInt(params.page, 10);

	if (isNaN(page) || page < 1) {
		error(400, "Invalid page number");
	}

	const ITEMS_PER_PAGE = 100;

	const { slugsData, totalPosts } = await getLocationModularPagesSlugs({
		pageTypes: ["courses"],
		itemsPerPage: ITEMS_PER_PAGE,
		currentPage: page,
	});
	const coursesLocationModularPagesEntries = slugsData.map(({ slug, title, _updatedAt }) => ({
		url: `${siteURL}/courses/${slug}`,
		lastmod: new Date(_updatedAt).toISOString(),
		priority,
		frequency,
		title,
	}));

	const maxPages = Math.ceil(totalPosts / ITEMS_PER_PAGE);

	if (page > maxPages) {
		error(400, "Invalid page number");
	}

	return {
		totalPosts,
		page,
		maxPages,
		coursesLocationModularPagesEntries,
	};
};
