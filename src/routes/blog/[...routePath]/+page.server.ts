import { getSingleBlogPost } from '$lib/graphql/queries/posts';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const { routePath } = params;
	const parts = routePath.split('/');

	const post = await getSingleBlogPost(parts[parts.length - 1]);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
        post: {
			...post,
			seo: post.seo[0].seoBlock
		}
    };
};
