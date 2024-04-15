import type {
	ActionBlockRecordGenqlSelection,
	CardBlockNewRecordGenqlSelection,
	CardBlockRecordGenqlSelection,
	CardsSectionRecordGenqlSelection,
	ComparisonSectionRecordGenqlSelection,
	CourseRecordGenqlSelection,
	FaqBlockNewRecordGenqlSelection,
	FaqItemRecordGenqlSelection,
	FaqSectionRecordGenqlSelection,
	HeadingBlockNewRecordGenqlSelection,
	HeroSectionRecordGenqlSelection,
	PostRecordGenqlSelection,
	ReferenceSectionRecordGenqlSelection,
	ResponsiveImageGenqlSelection,
	SeoFieldGenqlSelection,
	TestimonialBlockCtaRecordGenqlSelection,
	TestimonialBlockDefaultRecordGenqlSelection,
	TestimonialsSectionRecordGenqlSelection,
	TutorRecordGenqlSelection,
} from "$lib/graphql/generated";

const headingFieldSelection = {
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
		responsiveImage: responsiveImageFieldSelection,
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
	video: {
		video: {
			muxPlaybackId: true,
			title: true,
			width: true,
			height: true,
			blurUpThumb: {
				__args: {
					punch: 1,
					size: 48,
					quality: 100,
				},
			},
		},
	},
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
const referenceSectionSelection = {
	section: true,
} satisfies ReferenceSectionRecordGenqlSelection;

export {
	actionBlockFieldSelection,
	cardBlockFieldSelection,
	cardBlockFields, cardSectionSelection, comparisonSectionSelection, courseMetaFields,
	ctaTestimonialFieldsSelection,
	defaultTestimonialFieldsSelection,
	faqBlockFieldSelection,
	faqItemFieldsSelection, faqSectionSelection, headingFieldSelection,
	heroSectionSelection,
	postCategoryBlockFields, referenceSectionSelection, responsiveImageFieldSelection,
	seoFieldsSelection, testimonialSectionSelection, tutorMetaFields
};

