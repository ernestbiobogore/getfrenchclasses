import { getAllBlogPosts } from '$lib/graphql/queries/posts';

export const load = async () => {
	return {
		posts: await getAllBlogPosts()
	};
};
