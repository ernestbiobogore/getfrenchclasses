import { getSitemapResponseHeaders } from "$lib/server/sitemaps";

export const GET = async ({ url }) => {
	const entries = [
		`${url.origin}/sitemap-courses.xml`,
		`${url.origin}/sitemap-tutors.xml`,
		`${url.origin}/sitemap-posts.xml`,
		`${url.origin}/sitemap-pages.xml`,
	];
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
	<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		${entries.map(entry => `<sitemap><loc>${entry}</loc></sitemap>`).join("")}
	</sitemapindex>
	`;

	return new Response(xml, {
		headers: getSitemapResponseHeaders(),
	});
};
