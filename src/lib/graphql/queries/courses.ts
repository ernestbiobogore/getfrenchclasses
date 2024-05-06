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
	videoBlockFields,
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

			// Modules
			courseSyllabus: {
				id: true,
				week: true,
				startDate: true,
				endDate: true,
				modules: {
					id: true,
					title: true,
					description: {
						value: true,
					},
					lessonsTitles: {
						text: true,
					},
					lessonsNumber: true,
					projectsNumber: true,
				},
			},

			// Schedule
			courseDurationWeek: true,
			scheduleItems: {
				id: true,
				heading: true,
				subheading: true,
				description: {
					value: true,
				},
			},

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

			// CTA Banner
			ctaBannerTitle: true,
			ctaBannerMidActions: {
				link: true,
				text: true,
			},
			ctaBannerImages: {
				image: {
					responsiveImage: responsiveImageFieldSelection,
				},
				text: true,
			},
			ctaBannerButton: {
				link: true,
				text: true,
			},

			// Right CTA
			rightCtaMainText: true,
			rightCtaSubtext: true,
			rightCtaActions: {
				link: true,
				text: true,
			},
			rightCtaMainAction: {
				link: true,
				text: true,
			},
			rightCtaMedia: {
				on_RecordInterface: {
					__typename: true,
					id: true,
				},
				on_VideoBlockRecord: videoBlockFields,
				on_ImageBlockRecord: {
					image: {
						responsiveImage: responsiveImageFieldSelection,
					},
				},
			},
			enrolledStudents: {
				images: {
					responsiveImage: responsiveImageFieldSelection,
				},
				description: true,
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
