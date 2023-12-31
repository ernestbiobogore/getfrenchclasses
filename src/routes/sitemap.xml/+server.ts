import { getCoursesSlugs } from '$lib/graphql/queries/courses';
import { getBlogPostsSlugs } from '$lib/graphql/queries/posts';
import * as sitemap from 'super-sitemap';

export const GET = async ({ url }) => {
	const postsSlugs = (await getBlogPostsSlugs()).filter((slug): slug is string => slug !== null);
	const coursesSlugs = (await getCoursesSlugs()).filter((slug): slug is string => slug !== null);

	return await sitemap.response({
		origin: url.origin,
		paramValues: {
			'/blog/[blogSlug]': postsSlugs,
			'/courses/[courseSlug]': coursesSlugs
		}
	});
};
