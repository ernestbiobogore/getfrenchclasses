import type {
	ActionBlockRecordGenqlSelection,
	CardBlockNewRecordGenqlSelection,
	CardBlockRecordGenqlSelection,
	CardsSectionRecordGenqlSelection,
	ComparisonSectionRecordGenqlSelection,
	CourseRecordGenqlSelection,
	CoursesSectionRecordGenqlSelection,
	FaqBlockNewRecordGenqlSelection,
	FaqItemRecordGenqlSelection,
	FaqSectionRecordGenqlSelection,
	HeadingBlockNewRecordGenqlSelection,
	HeroSectionRecordGenqlSelection,
	PostRecordGenqlSelection,
	ResponsiveImageGenqlSelection,
	RichTextBlockModelRichTextFieldGenqlSelection,
	SeoFieldGenqlSelection,
	TestimonialBlockCtaRecordGenqlSelection,
	TestimonialBlockDefaultRecordGenqlSelection,
	TestimonialsSectionRecordGenqlSelection,
	TutorRecordGenqlSelection,
	TutorsByCitySectionRecordGenqlSelection,
	VideoBlockRecordGenqlSelection,
} from "$lib/graphql/generated";

const headingFieldSelection = {
	__typename: true,
	heading: true,
	highlightedWords: true,
	subheading: {
		value: true,
	},
} satisfies HeadingBlockNewRecordGenqlSelection;

const faqBlockFieldSelection = {
	id: true,
	faq: headingFieldSelection,
} satisfies FaqBlockNewRecordGenqlSelection;

const actionBlockFieldSelection = {
	id: true,
	text: true,
	link: true,
} satisfies ActionBlockRecordGenqlSelection;

const responsiveImageFieldSelection = {
	src: true,
	width: true,
	height: true,
	alt: true,
	base64: true,
	bgColor: true,
	sizes: true,
} satisfies ResponsiveImageGenqlSelection;

const cardBlockFieldSelection = {
	id: true,
	heading: headingFieldSelection,
	cta: actionBlockFieldSelection,
	media: {
		format: true,
		url: true,
		alt: true,
		responsiveImage: responsiveImageFieldSelection,
		video: {
			mp4Url: true,
			alt: true,
		},
	},
} satisfies CardBlockNewRecordGenqlSelection;

const cardBlockFields = {
	title: true,
	cta: {
		text: true,
		link: true,
	},
	media: {
		url: true,
		alt: true,
		responsiveImage: {
			src: true,
			width: true,
			height: true,
			alt: true,
			sizes: true,
		},
		video: {
			mp4Url: true,
		},
	},
	content: {
		richText: {
			__typename: true,
			value: true,
		},
	},
} satisfies CardBlockRecordGenqlSelection;

const seoFieldsSelection = {
	title: true,
	description: true,
	image: {
		url: true,
		alt: true,
		responsiveImage: {
			__args: {
				imgixParams: {
					w: 1248,
					h: 702,
				},
			},
			...responsiveImageFieldSelection,
		},
	},
} satisfies SeoFieldGenqlSelection;

const postCategoryBlockFields = {
	name: true,
	slug: true,
} satisfies PostRecordGenqlSelection["category"];

const videoBlockFields = {
	video: {
		on_RecordInterface: {
			__typename: true,
			id: true,
		},
		on_VideoBlockExternalRecord: {
			url: true,
			altText: true,
		},
		on_VideoBlockInternalRecord: {
			video: {
				video: {
					muxPlaybackId: true,
					title: true,
					width: true,
					height: true,
					mp4Url: true,
					blurUpThumb: {
						__args: {
							punch: 1,
							size: 48,
							quality: 100,
						},
					},
				},
			},
		},
	},
} satisfies VideoBlockRecordGenqlSelection;

const tutorMetaFields = {
	id: true,
	name: true,
	slug: true,
	summary: true,
	rate: true,
	rating: true,
	numberOfRatings: true,
	levels: true,
	audiences: true,
	city: {
		name: true,
	},
	remoteStatus: true,
	profilePicture: {
		responsiveImage: responsiveImageFieldSelection,
	},
	coverMedia: {
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
	topics: {
		text: true,
	},
} satisfies TutorRecordGenqlSelection;

const courseMetaFields = {
	id: true,
	slug: true,
	name: true,
	duration: true,
	numberOfSections: true,
	numberOfEnrolledStudents: true,
	level: true,
	price: true,
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
} satisfies CourseRecordGenqlSelection;

const faqItemFieldsSelection = {
	id: true,
	title: true,
	slug: true,
	faqBlocks: faqBlockFieldSelection,
} satisfies FaqItemRecordGenqlSelection;

const defaultTestimonialFieldsSelection = {
	__typename: true,
	id: true,
	author: true,
	role: true,
	company: true,
	rotation: true,
	rating: true,
	picture: {
		responsiveImage: responsiveImageFieldSelection,
	},
	content: {
		value: true,
	},
} satisfies TestimonialBlockDefaultRecordGenqlSelection;

const ctaTestimonialFieldsSelection = {
	__typename: true,
	id: true,
	author: true,
	role: true,
	company: true,
	picture: {
		responsiveImage: responsiveImageFieldSelection,
	},
	highlight: {
		value: true,
	},
	content: headingFieldSelection,
	cta: actionBlockFieldSelection,
} satisfies TestimonialBlockCtaRecordGenqlSelection;

const heroSectionSelection = {
	heading: headingFieldSelection,
	cta: actionBlockFieldSelection,
	testimonialTitle: true,
	heroImages: {
		image: {
			responsiveImage: responsiveImageFieldSelection,
		},
		text: true,
	},
	testimonialPictures: {
		responsiveImage: responsiveImageFieldSelection,
	},
	video: videoBlockFields,
	videoText: true,
} satisfies HeroSectionRecordGenqlSelection;

const faqSectionSelection = {
	heading: headingFieldSelection,
	faq: {
		faqBlocks: faqBlockFieldSelection,
	},
} satisfies FaqSectionRecordGenqlSelection;
const comparisonSectionSelection = {
	comparison: {
		title: true,
		slug: true,
		heading: headingFieldSelection,
		comparisons: {
			feature: true,
			hasFeature: true,
			companies: {
				id: true,
				name: true,
				paid: true,
				logo: {
					url: true,
					alt: true,
				},
			},
		},
	},
} satisfies ComparisonSectionRecordGenqlSelection;
const cardSectionSelection = {
	heading: headingFieldSelection,
	sectionType: true,
	cards: cardBlockFieldSelection,
} satisfies CardsSectionRecordGenqlSelection;
const testimonialSectionSelection = {
	heading: headingFieldSelection,
	testimonials: {
		testimonial: {
			on_TestimonialBlockDefaultRecord: defaultTestimonialFieldsSelection,
			on_TestimonialBlockCtaRecord: ctaTestimonialFieldsSelection,
		},
	},
} satisfies TestimonialsSectionRecordGenqlSelection;

const courseSectionSelection = {
	heading: headingFieldSelection,
	courses: courseMetaFields,
} satisfies CoursesSectionRecordGenqlSelection;

const tutorsByCitySectionSelection = {
	city: {
		slug: true,
		name: true,
	},
} satisfies TutorsByCitySectionRecordGenqlSelection;

const richTextBlockSelection = {
	value: true,
	blocks: {
		on_RecordInterface: {
			__typename: true,
			id: true,
		},
		on_NoteBlockRecord: {
			noteType: true,
			card: cardBlockFields,
		},
		on_ImageBlockRecord: {
			image: {
				responsiveImage: {
					src: true,
					width: true,
					height: true,
					alt: true,
					sizes: true,
				},
			},
		},
		on_CoursesBlockRecord: {
			courses: {
				...courseMetaFields,
			},
		},
		on_TutorsBlockRecord: {
			tutors: {
				...tutorMetaFields,
			},
		},
		on_TestimonialsListBlockRecord: {
			testimonials: {
				testimonial: {
					on_TestimonialBlockDefaultRecord: defaultTestimonialFieldsSelection,
				},
			},
		},
		on_CardBlockRecord: cardBlockFields,
	},
} satisfies RichTextBlockModelRichTextFieldGenqlSelection;

export {
	actionBlockFieldSelection,
	cardBlockFieldSelection,
	cardBlockFields,
	cardSectionSelection,
	comparisonSectionSelection,
	courseMetaFields,
	courseSectionSelection,
	ctaTestimonialFieldsSelection,
	defaultTestimonialFieldsSelection,
	faqBlockFieldSelection,
	faqItemFieldsSelection,
	faqSectionSelection,
	headingFieldSelection,
	heroSectionSelection,
	postCategoryBlockFields,
	responsiveImageFieldSelection,
	seoFieldsSelection,
	testimonialSectionSelection,
	tutorMetaFields,
	tutorsByCitySectionSelection,
	richTextBlockSelection,
};
