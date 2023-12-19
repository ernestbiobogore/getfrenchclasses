import { getSingleBlogPost } from '$lib/graphql/queries/posts';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const { blogSlug } = params;
	const post = await getSingleBlogPost(blogSlug);

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
