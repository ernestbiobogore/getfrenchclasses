import { getSingleBlogPost } from '$lib/graphql/queries/posts';
import { error } from '@sveltejs/kit';

export const load = async ({ params, url }) => {
	const { routePath } = params;
	const parts = routePath.split('/');

	const post = await getSingleBlogPost(parts[parts.length - 1]);

	if (!post) {
		throw error(404, 'Post not found');
	}

	if (post.routePaths.length > 0 && parts.length < post.routePaths.length + 1) {
		return {
			correctUrl: `${url.origin}/blog/${post.routePaths.map((path) => path.slug).join('/')}/${
				post.slug
			}`
		};
	}

	return {
		post: {
			...post,
			seo: post.seo[0].seoBlock
		}
	};
};
