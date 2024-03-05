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
