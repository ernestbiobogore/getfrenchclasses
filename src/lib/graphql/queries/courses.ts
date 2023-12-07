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

	return courses;
};

const getCourseBySlug = async (slug: string) => {
	const course = await client.chain.query.course({ filter: { slug: { eq: slug } } }).get({
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

		// FAQ
		faq: {
			title: true,
			faqBlocks: {
				id: true,
				question: true,
				answer: {
					richText: {
						value: true
					}
				}
			}
		},

		// Features
		featuresCards: {
			image: {
				url: true,
				alt: true
			},
			content: {
				richText: {
					value: true
				}
			},
	
		},

		// Single testimonial
		singleTestimonial: {
			title: true,
			image: {
				url: true,
				alt: true
			},
			content: {
				richText: {
					value: true
				}
			},
			author: true,
			company: true
		},

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

	return course;
};

export { getAllCourses, getCourseBySlug };
