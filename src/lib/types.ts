import type { getAllBlogPosts, getSingleBlogPost } from "$lib/graphql/queries/posts";

type PostShareOptions = {
	title: string;
	text: string;
	url: string;
	subject: string;
	body: string;
	summary: string;
	source: string;
};

type SinglePost = Awaited<ReturnType<typeof getSingleBlogPost>>;
type SinglePostFromAll = Awaited<ReturnType<typeof getAllBlogPosts>>[0];

export type { PostShareOptions, SinglePost, SinglePostFromAll };

/**
 * This is inspired by the `Some` type in the Rust programming language.
 * It's a type that removes `undefined` or `null from a type.
 * meaning `Some<string | undefined | null>` is `string`
 */
export type Some<T> = T extends undefined | null ? never : T;

/**
 * Create a `SomeKeys` type inspired by the `Some` type in the Rust programming language.
 * It's a type that removes `undefined` from the properties of an object.
 * meaning `SomeKeys<{ name: string | undefined | null }>` is `{ name: string }`
 */
export type SomeKeys<T> = T extends object
	? {
			[K in keyof T]: SomeKeys<Some<T[K]>>;
		}
	: Some<T>;
