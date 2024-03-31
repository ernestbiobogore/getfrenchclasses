import { getAllBlogPosts, getAllBlogPostsCount } from "$lib/graphql/queries/posts";
import { redirect } from "@sveltejs/kit";
import { JUMPER_LENGTH } from "./utils";

export async function load({ url }) {
	const allNonFeaturedPostsCount = await getAllBlogPostsCount({ featured: false });
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
