import { getCoursesSlugs } from "$lib/graphql/queries/courses";
import { getLocationModularPagesSlugs, getModularPageSlugs } from "$lib/graphql/queries/modular";
import { getBlogPostsSlugs, getPostFullPath } from "$lib/graphql/queries/posts";
import { getTutorsSlugs } from "$lib/graphql/queries/tutors";

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

	const modularPagesSlugs = await getModularPageSlugs();
	const modularPagesEntries = modularPagesSlugs
		.filter(({ slug }) => slug !== "get-french-classes")
		.map(({ slug, _updatedAt }) => ({
			url: `${siteURL}/${slug}`,
			lastmod: new Date(_updatedAt).toISOString(),
			priority,
			frequency,
		}));

	const locationModularPagesSlugs = await getLocationModularPagesSlugs();
	const tutorsLocationModularSlugs = locationModularPagesSlugs.filter(
		({ pageType }) => pageType === "tutors"
	);
	const coursesLocationModularSlugs = locationModularPagesSlugs.filter(
		({ pageType }) => pageType === "courses"
	);

	const tutorsLocationModularPagesEntries = tutorsLocationModularSlugs.map(
		({ slug, _updatedAt }) => ({
			url: `${siteURL}/tutors/${slug}`,
			lastmod: new Date(_updatedAt).toISOString(),
			priority,
			frequency,
		})
	);
	const coursesLocationModularPagesEntries = coursesLocationModularSlugs.map(
		({ slug, _updatedAt }) => ({
			url: `${siteURL}/courses/${slug}`,
			lastmod: new Date(_updatedAt).toISOString(),
			priority,
			frequency,
		})
	);

	const coursesEntries = (await getCoursesSlugs()).map(({ slug, _updatedAt }) => ({
		url: `${siteURL}/course/${slug}`,
		lastmod: new Date(_updatedAt).toISOString(),
		priority,
		frequency,
	}));

	const tutorsSlugs = await getTutorsSlugs();
	const tutorsEntries = tutorsSlugs.map(({ slug, _updatedAt }) => ({
		url: `${siteURL}/tutor/${slug}`,
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
		...tutorsLocationModularPagesEntries,
		...coursesLocationModularPagesEntries,
		...postsEntries,
		...coursesEntries,
		...tutorsEntries,
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
