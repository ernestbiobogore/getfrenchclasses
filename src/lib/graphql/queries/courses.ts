import { client } from '$lib/graphql/client';

const getAllCourses = async (first?: number) => {
	const courses = await client.chain.query
		.allCourses({
			first
		})
		.get({
			id: true,
			name: true,
			slug: true,

			// Info
			price: true,
			duration: true,
			numberOfSections: true,
			level: true,
			numberOfEnrolledStudents: true,
			tag: true,

			// SEO
			seo: {
				seoBlock: {
					title: true,
					description: true,
					image: {
						url: true,
						alt: true
					}
				}
			}
		});

	return courses.map((course) => ({
		...course,
		seo: course.seo[0].seoBlock
	}));
};

export { getAllCourses };
