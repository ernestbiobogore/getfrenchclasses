import type { CardBlockRecordGenqlSelection } from '$lib/graphql/generated';

const cardBlockFields: CardBlockRecordGenqlSelection = {
	title: true,
	cta: {
		text: true,
		link: true
	},
	media: {
		responsiveImage: {
			src: true,
			width: true,
			height: true,
			alt: true,
			sizes: true
		},
		video: {
			mp4Url: true
		},
		alt: true
	},
	content: {
		richText: {
			value: true
		}
	}
};

export { cardBlockFields };
