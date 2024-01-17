import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { PostShareOptions } from './types';
import { get } from 'svelte/store';
import { page } from '$app/stores';

const cn = (...args: ClassValue[]): string => {
	return twMerge(clsx(...args));
};

const getSampleAvatars = (n = 3) => {
	return Array.from({ length: n }, () => {
		const i = Math.floor(Math.random() * 100);

		return {
			src: `https://picsum.photos/100/100?random=${i + 1}`,
			alt: `Avatar ${i + 1}`
		};
	});
};

export function generateShareOptions(post: {
	slug: string | null;
	seo: { title: string | null; description: string | null } | null;
}): PostShareOptions {
	return {
		// for whatsapp and twitter and facebook and Web Share API
		title: post?.seo?.title || '',
		text: `Check out this article on Get French Classes`,
		url: `${get(page).url.origin}/blog/${post?.slug}`,

		// for mail`
		subject: post?.seo?.title || '',
		body: `Check out this article on Get French Classes: ${get(page).url.origin}/blog/${
			post?.slug
		}`,

		// for linkedin
		summary: post?.seo?.description || '',
		source: 'Get French Classes'
	};
}

export function getShareLinks(opts: PostShareOptions) {
	const { title, url, text, subject, body, summary, source } = opts;
	return {
		whatsappShareUrl: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
		twitterShareUrl: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
			text
		)}&url=${encodeURIComponent(url)}`,
		facebookShareUrl: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
		emailShareUrl: `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
			body
		)}`,
		linkedInShareUrl: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
			url
		)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(
			summary
		)}&source=${encodeURIComponent(source)}`,
		telegramShareUrl: `https://t.me/share/url?url=${encodeURIComponent(
			url
		)}&text=${encodeURIComponent(text)}`,
		pinterestShareUrl: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
			url
		)}&media=&description=${encodeURIComponent(text)}`,
		redditShareUrl: `https://www.reddit.com/submit?url=${encodeURIComponent(
			url
		)}&title=${encodeURIComponent(title)}`
	};
}

export { cn, getSampleAvatars };
