import { getCoursesCount } from "$lib/graphql/queries/courses";
import { getLocationModularPagesCount } from "$lib/graphql/queries/modular";
import { getTutorsCount } from "$lib/graphql/queries/tutors";
import { getSitemapResponseHeaders } from "$lib/server/sitemaps";

const ITEMS_PER_PAGE = 100;

export const GET = async ({ url }) => {
	const generatePaginatedEntries = async (baseUrl: string, totalItems: number) => {
		const pages = Math.ceil(totalItems / ITEMS_PER_PAGE);
		return Array.from({ length: pages }, (_, i) => `${baseUrl}-${i + 1}.xml`);
	};

	// Get total counts
	const coursesCount = await getCoursesCount();
	const tutorsCount = await getTutorsCount();

	const coursesLocationCount = await getLocationModularPagesCount({ pageTypes: ["courses"] });
	const tutorsLocationCount = await getLocationModularPagesCount({ pageTypes: ["tutors"] });

	const courseEntries = await generatePaginatedEntries(
		`${url.origin}/sitemap-courses`,
		coursesCount + coursesLocationCount
	);
	const tutorEntries = await generatePaginatedEntries(
		`${url.origin}/sitemap-tutors`,
		tutorsCount + tutorsLocationCount
	);

	const entries = [
		`${url.origin}/sitemap-posts.xml`,
		`${url.origin}/sitemap-pages.xml`,
		...courseEntries,
		...tutorEntries,
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
