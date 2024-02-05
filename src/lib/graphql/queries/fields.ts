import type { CardBlockRecordGenqlSelection } from "$lib/graphql/generated";

const cardBlockFields: CardBlockRecordGenqlSelection = {
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
};

export { cardBlockFields };
