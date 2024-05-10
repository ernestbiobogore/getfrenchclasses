import { getSingleModularPage } from "$lib/graphql/queries/modular";
import {
	getBlogPosts,
	getCategoriesWithPosts,
	getCategoryBySlug,
} from "$lib/graphql/queries/posts";
import { error } from "@sveltejs/kit";

export async function load({ url }) {
	const modularPage = await getSingleModularPage("blog");

	if (!modularPage) {
		error(404, "Page not found");
	}

	const categoryParam = url.searchParams.get("category");
	const categoryId = categoryParam ? await getCategoryBySlug(categoryParam) : undefined;

	const featuredPosts = await getBlogPosts({ featured: true, categoryId });
	const nonFeaturedPosts = await getBlogPosts({ featured: false, categoryId });

	const categoriesWithPosts = await getCategoriesWithPosts();

	return {
		// first,
		nonFeaturedPosts,
		featuredPosts,
		// allNonFeaturedPostsCount,
		modularPage,
		categoriesWithPosts,
	};
}
