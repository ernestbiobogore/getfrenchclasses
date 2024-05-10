import { getSingleModularPage } from "$lib/graphql/queries/modular";
import { getBlogPosts } from "$lib/graphql/queries/posts";
import { error } from "@sveltejs/kit";

export async function load() {
	const modularPage = await getSingleModularPage("blog");

	if (!modularPage) {
		error(404, "Page not found");
	}

	// const count = await getBlogPostsCount({ featured: false });

	// const allNonFeaturedPostsCount = count === 0 ? 1 : count;
	// const firstParam = url.searchParams.get("first") || BLOG_JUMPER_LENGTH;

	// if (Number(firstParam) > allNonFeaturedPostsCount) {
	// 	redirect(301, `/blog?first=${allNonFeaturedPostsCount}`);
	// }

	// const first = Number(firstParam);

	const featuredPosts = await getBlogPosts({ featured: true });
	const nonFeaturedPosts = await getBlogPosts({ featured: false });

	return {
		// first,
		nonFeaturedPosts,
		featuredPosts,
		// allNonFeaturedPostsCount,
		modularPage,
	};
}
