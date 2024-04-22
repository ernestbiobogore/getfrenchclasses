import { client } from "$lib/graphql/client";
import {
	cardBlockFieldSelection,
	courseMetaFields,
	ctaTestimonialFieldsSelection,
	defaultTestimonialFieldsSelection,
	faqItemFieldsSelection,
	headingFieldSelection,
	responsiveImageFieldSelection,
	tutorMetaFields,
} from "./fields";

const getCoursesSlugs = async () => {
	const { allCourses } = await client.query({
		allCourses: {
			slug: true,
			_updatedAt: true,
		},
	});

	return allCourses;
};

const getAllCourses = async (first?: number) => {
	const { allCourses } = await client.query({
		allCourses: {
			__args: {
				first,
			},
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
						alt: true,
					},
				},
			},
		},
	});

	return allCourses;
};

const getAllCoursesMetas = async (first?: number) => {
	const { allCourses } = await client.query({
		allCourses: {
			__args: {
				first,
			},
			...courseMetaFields,
		},
	});

	return allCourses;
};

const getCourseBySlug = async (slug: string) => {
	const { course } = await client.query({
		course: {
			__args: {
				filter: {
					slug: {
						eq: slug,
					},
				},
			},
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

			// Target audience
			targetAudienceHeading: headingFieldSelection,
			targetAudience: cardBlockFieldSelection,

			// Outcomes
			outcomesHeading: headingFieldSelection,
			outcomes: cardBlockFieldSelection,

			// Content list
			contentListHeading: headingFieldSelection,
			contentList: cardBlockFieldSelection,

			// FAQ
			faq: faqItemFieldsSelection,

			ctaTitle: true,
			ctaMidActions: {
				link: true,
				text: true,
			},
			ctaImages: {
				image: {
					responsiveImage: responsiveImageFieldSelection,
				},
				text: true,
			},
			ctaButton: {
				link: true,
				text: true,
			},

			// Instructors
			instructorsHeading: headingFieldSelection,
			instructors: {
				id: true,
				name: true,
				summary: true,
				about: {
					value: true,
				},
				profilePicture: {
					responsiveImage: responsiveImageFieldSelection,
				},
			},

			// Tutors
			tutorsHeading: headingFieldSelection,
			tutors: tutorMetaFields,

			// Features
			featuresCards: {
				media: {
					url: true,
					alt: true,
				},
				content: {
					richText: {
						value: true,
					},
				},
			},

			// Testimonialss
			testimonials: {
				testimonial: {
					on_TestimonialBlockDefaultRecord: defaultTestimonialFieldsSelection,
					on_TestimonialBlockCtaRecord: ctaTestimonialFieldsSelection,
				},
			},

			// SEO
			seo: {
				seoBlock: {
					title: true,
					description: true,
					image: {
						url: true,
						alt: true,
					},
				},
			},
		},
	});

	return course;
};

export { getAllCourses, getAllCoursesMetas, getCourseBySlug, getCoursesSlugs };
