import type {
	ActionBlockRecordGenqlSelection,
	CardBlockNewRecordGenqlSelection,
	CardBlockRecordGenqlSelection,
	CourseRecordGenqlSelection,
	FaqBlockNewRecordGenqlSelection,
	HeadingBlockNewRecordGenqlSelection,
	PostRecordGenqlSelection,
	ResponsiveImageGenqlSelection,
	SeoFieldGenqlSelection,
	TutorRecordGenqlSelection,
} from "$lib/graphql/generated";

const headingFieldSelection = {
	heading: true,
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
	location: true,
	remoteStatus: true,
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

export {
	actionBlockFieldSelection,
	cardBlockFieldSelection,
	cardBlockFields,
	courseMetaFields,
	faqBlockFieldSelection,
	headingFieldSelection,
	postCategoryBlockFields,
	responsiveImageFieldSelection,
	seoFieldsSelection,
	tutorMetaFields
};

