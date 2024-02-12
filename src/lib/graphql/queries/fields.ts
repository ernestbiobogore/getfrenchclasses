import type {
	CardBlockRecordGenqlSelection,
	PostRecordGenqlSelection,
} from "$lib/graphql/generated";

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

const postSeoBlockFields = {
	seoBlock: {
		title: true,
		description: true,
		image: {
			url: true,
			alt: true,
		},
	},
} satisfies PostRecordGenqlSelection["seo"];

const postCategoryBlockFields = {
	name: true,
	slug: true,
} satisfies PostRecordGenqlSelection["category"];

export { cardBlockFields, postCategoryBlockFields, postSeoBlockFields };

