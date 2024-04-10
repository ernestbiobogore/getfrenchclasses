import { page } from "$app/stores";
import { clsx, type ClassValue } from "clsx";
import { cubicOut } from "svelte/easing";
import { get } from "svelte/store";
import type { TransitionConfig } from "svelte/transition";
import { twMerge } from "tailwind-merge";
import type { PostShareOptions, SomeKeys } from "./types";

/**
 * Casts a value to a type with non-nullable keys.
 *
 * @param x The value to cast.
 * @returns The value casted to a type with non-nullable keys.
 *
 * @example
 * // return type as NonNullable<string | null | undefined>
 * const f = <T>(x: T) => x as SomeKeys<T>;
 *
 * f<string | null | undefined>(undefined) // type is string
 * f<string | null | undefined>("bat") // type is string
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const f = <T, _U>(x: T) => x as SomeKeys<T>;

/**
 * Applies span tags to specified words and phrases in a given string.
 * @param str - The input string to be spanified.
 * @param options - An object containing the words and phrases to be spanified.
 * @param options.words - An array of words to be spanified.
 * @param options.phrases - An array of phrases to be spanified.
 * @param className - The CSS class name to be applied to the span tags.
 * @returns The input string with span tags applied to the specified words and phrases.
 */
export function spanify(
	str: string | null,
	{ words = [], phrases = [] }: { words?: string[]; phrases?: string[] },
	className = ""
) {
	if (!str) return str;
	let regex = "";
	if (words.length) {
		regex += `\\b(${words.join("|")})\\b`;
	}
	if (phrases.length) {
		regex +=
			(regex ? "|" : "") +
			`(${phrases.map(phrase => phrase.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|")})`;
	}
	if (!regex) return str;
	return str.replace(new RegExp(regex, "gi"), `<span class="${className}">$&</span>`);
}

const getSampleAvatars = (n = 3) => {
	return Array.from({ length: n }, () => {
		const i = Math.floor(Math.random() * 100);

		return {
			src: `https://picsum.photos/100/100?random=${i + 1}`,
			alt: `Avatar ${i + 1}`,
		};
	});
};

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

type GenerateShareOptionsParams = {
	slug: string;
	title: string;
	description: string;
};

export function generateShareOptions(shareOptions: GenerateShareOptionsParams): PostShareOptions {
	return {
		// for whatsapp and twitter and facebook and Web Share API
		title: shareOptions.title,
		text: `Check out this article on Get French Classes`,
		url: `${get(page).url.origin}/blog/${shareOptions.slug}`,

		// for mail`
		subject: shareOptions.title,
		body: `Check out this article on Get French Classes: ${get(page).url.origin}/blog/${
			shareOptions.slug
		}`,

		// for linkedin
		summary: shareOptions.description,
		source: "Get French Classes",
	};
}

export function getShareLinks(opts: PostShareOptions) {
	const { title, url, text, subject, body, summary, source } = opts;
	return {
		whatsappShareUrl: `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
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
		)}&title=${encodeURIComponent(title)}`,
	};
}

type FlyAndScaleParams = {
	y?: number;
	x?: number;
	start?: number;
	duration?: number;
};
export const flyAndScale = (
	node: Element,
	params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig => {
	const style = getComputedStyle(node);
	const transform = style.transform === "none" ? "" : style.transform;
	const scaleConversion = (valueA: number, scaleA: [number, number], scaleB: [number, number]) => {
		const [minA, maxA] = scaleA;
		const [minB, maxB] = scaleB;
		const percentage = (valueA - minA) / (maxA - minA);
		const valueB = percentage * (maxB - minB) + minB;
		return valueB;
	};
	const styleToString = (style: Record<string, number | string | undefined>): string => {
		return Object.keys(style).reduce((str, key) => {
			if (style[key] === undefined) return str;
			return str + key + ":" + style[key] + ";";
		}, "");
	};
	return {
		duration: params.duration ?? 200,
		delay: 0,
		css: t => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);
			return styleToString({
				transform: transform + "translate3d(" + x + "px, " + y + "px, 0) scale(" + scale + ")",
				opacity: t,
			});
		},
		easing: cubicOut,
	};
};

export { getSampleAvatars };
