import { getCoursesSlugs } from "$lib/graphql/queries/courses";
import { getBlogPostsSlugs, getPostFullPath } from "$lib/graphql/queries/posts";

export const GET = async ({ url }) => {
	const siteURL = url.origin;
	const priority = 0.6;
	const frequency = "daily";

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

	const coursesEntries = (await getCoursesSlugs()).map(({ slug, _updatedAt }) => ({
		url: `${siteURL}/courses/${slug}`,
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
		...postsEntries,
		...coursesEntries,
	];

	const entriesXml = entries.map(({ url, lastmod, priority, frequency }) => {
		return `
			<url>
				<loc>${url}</loc>
				<lastmod>${lastmod}</lastmod>
				<priority>${priority}</priority>
				<changefreq>${frequency}</changefreq>
			</url>
		`;
	});

	const xml = `
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
			${entriesXml.join("")}
		</urlset>
	`;

	return new Response(xml, {
		headers: {
			"Cache-Control": "max-age=0, s-maxage=3600",
			"Content-Type": "application/xml",
		},
	});
};
