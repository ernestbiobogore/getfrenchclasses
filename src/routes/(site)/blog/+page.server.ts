import { BLOG_JUMPER_LENGTH } from "$lib/constants";
import { getSingleModularPage } from "$lib/graphql/queries/modular";
import { getAllBlogPosts, getBlogPostsCount } from "$lib/graphql/queries/posts";
import { error, redirect } from "@sveltejs/kit";

export async function load({ url }) {
	const modularPage = await getSingleModularPage("blog");

	if (!modularPage) {
		error(404, "Page not found");
	}

	const count = await getBlogPostsCount({ featured: false });

	const allNonFeaturedPostsCount = count === 0 ? 1 : count;
	const firstParam = url.searchParams.get("first") || BLOG_JUMPER_LENGTH;

	if (Number(firstParam) > allNonFeaturedPostsCount) {
		redirect(301, `/blog?first=${allNonFeaturedPostsCount}`);
	}

	const first = Number(firstParam);

	return {
		first,
		allPosts: await getAllBlogPosts({ first }),
		featuredPosts: await getAllBlogPosts({ featured: true }),
		allNonFeaturedPostsCount,
		modularPage,
	};
}
