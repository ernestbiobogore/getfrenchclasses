import { getAllBlogPosts } from "$lib/graphql/queries/posts";

export async function load() {
	return {
		allPosts: await getAllBlogPosts(),
	};
}
