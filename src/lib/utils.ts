import type { PostShareOptions } from "./types";
import type { TransitionConfig } from "svelte/transition";
import { clsx } from "clsx";
import { cubicOut } from "svelte/easing";
import { get } from "svelte/store";
import { page } from "$app/stores";

const getSampleAvatars = (n = 3) => {
  return Array.from({ length: n }, () => {
    const i = Math.floor(Math.random() * 100);

    return {
      src: `https://picsum.photos/100/100?random=${i + 1}`,
      alt: `Avatar ${i + 1}`,
    };
  });
};

export function generateShareOptions(post: {
  slug: string | null;
  seo: { title: string | null; description: string | null } | null;
}): PostShareOptions {
  return {
    // for whatsapp and twitter and facebook and Web Share API
    title: post?.seo?.title || "",
    text: `Check out this article on Get French Classes`,
    url: `${get(page).url.origin}/blog/${post?.slug}`,

    // for mail`
    subject: post?.seo?.title || "",
    body: `Check out this article on Get French Classes: ${
      get(page).url.origin
    }/blog/${post?.slug}`,

    // for linkedin
    summary: post?.seo?.description || "",
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

export { clsx as cn, getSampleAvatars };
