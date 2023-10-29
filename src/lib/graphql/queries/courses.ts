import { client } from '$lib/graphql/client';

const getAllCourses = async () => {
	const courses = await client.chain.query.allCourses().get({
		id: true,
		name: true,
		slug: true,

		// Info
		price: true,
		duration: true,
		numberOfSections: true,
		level: true,

		// SEO
		seo: {
			seoBlock: {
				title: true,
				description: true,
				image: {
					url: true
				}
			}
		}
	});

	return courses;
};

export { getAllCourses };
