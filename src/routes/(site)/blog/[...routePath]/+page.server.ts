import { getPostFullPath, getSingleBlogPost } from "$lib/graphql/queries/posts";
import { error } from "@sveltejs/kit";

// TODO: prerender

export const load = async ({ params, url }) => {
	const { routePath } = params;
	const parts = routePath.split("/");

	const post = await getSingleBlogPost(parts[parts.length - 1]);

	if (!post) {
		throw error(404, "Post not found");
	}

	// Blog post has route paths, but the URL is missing them
	if (post.routePaths.length > 0 && parts.length < post.routePaths.length + 1) {
		const path = getPostFullPath(post.routePaths.map(path => path.slug), String(post.slug));

		return {
			correctUrl: `${url.origin}${path}`,
		};
	}

	// Blog post has not route paths, but the URL has them
	if (post.routePaths.length === 0 && parts.length > 1) {
		return {
			correctUrl: `${url.origin}/blog/${post.slug}`,
		};
	}

	return {
		post: {
			...post,
			seo: post.seo?.seoBlock,
		},
	};
};
