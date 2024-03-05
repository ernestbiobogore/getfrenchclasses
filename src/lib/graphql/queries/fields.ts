import type {
	ActionBlockRecordGenqlSelection,
	CardBlockNewRecordGenqlSelection,
	CardBlockRecordGenqlSelection,
	FaqBlockNewRecordGenqlSelection,
	HeadingBlockNewRecordGenqlSelection,
	PostRecordGenqlSelection,
	ResponsiveImageGenqlSelection,
	SeoFieldGenqlSelection,
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
	sizes: true,
} satisfies ResponsiveImageGenqlSelection;

const cardBlockFieldSelection = {
	heading: headingFieldSelection,
	cta: actionBlockFieldSelection,
	media: {
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

export {
	actionBlockFieldSelection,
	cardBlockFieldSelection,
	cardBlockFields,
	faqBlockFieldSelection,
	headingFieldSelection,
	postCategoryBlockFields,
	responsiveImageFieldSelection,
	seoFieldsSelection,
};
