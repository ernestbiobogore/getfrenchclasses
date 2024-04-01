import { getAllBlogPosts, getBlogPostsCount } from "$lib/graphql/queries/posts";
import { redirect } from "@sveltejs/kit";
import { JUMPER_LENGTH } from "./utils";

export async function load({ url }) {
	const count = await getBlogPostsCount({ featured: false });

	const allNonFeaturedPostsCount = count === 0 ? 1 : count;
	const firstParam = url.searchParams.get("first") || Number(JUMPER_LENGTH);

	if (Number(firstParam) > allNonFeaturedPostsCount) {
		redirect(301, `/blog?first=${allNonFeaturedPostsCount}`);
	}

	const first = Number(firstParam);

	return {
		first,
		allPosts: await getAllBlogPosts({ first }),
		featuredPosts: await getAllBlogPosts({ featured: true }),
		allNonFeaturedPostsCount,
	};
}
