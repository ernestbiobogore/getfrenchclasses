import { getBlogPostsSlugs, getPostFullPath } from "$lib/graphql/queries/posts";
import {
    getSitemapEntriesXml,
    getSitemapMeta,
    getSitemapResponseHeaders,
    getSitemapXml,
} from "$lib/server/sitemaps";

export const GET = async ({ url }) => {
	const { siteURL, priority, frequency } = getSitemapMeta(url);

	const allPosts = await getBlogPostsSlugs();

	const postsEntries = allPosts.map(({ slug, routePaths, _updatedAt }) => {
		const path = getPostFullPath(
			routePaths.map(path => path.slug),
			String(slug)
		);
		const postFullPath = `${siteURL}${path}`;

		return {
			url: postFullPath,
			lastmod: new Date(_updatedAt).toISOString(),
			priority,
			frequency,
		};
	});

	const entriesXml = getSitemapEntriesXml(postsEntries);

	return new Response(getSitemapXml(entriesXml), {
		headers: getSitemapResponseHeaders(),
	});
};
