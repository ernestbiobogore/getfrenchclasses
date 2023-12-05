import { getCourseBySlug } from '$lib/graphql/queries/courses';
import { getHomePageData } from '$lib/graphql/queries/home';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const course = await getCourseBySlug(params.courseSlug);

	if (!course) {
		throw error(404, 'Course not found');
	}

	return {
		homepageData: await getHomePageData(),
		course: {
			...course,
			seo: course.seo[0].seoBlock
		}
	};
};
