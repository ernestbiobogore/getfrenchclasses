import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

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

export { cn, getSampleAvatars };
