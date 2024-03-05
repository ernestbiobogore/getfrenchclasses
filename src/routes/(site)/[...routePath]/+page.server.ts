import { getSingleModularPage } from "$lib/graphql/queries/modular";
import { getRecordFullPath } from "$lib/graphql/queries/utils";
import { error, redirect } from "@sveltejs/kit";

export const load = async ({ params, url }) => {
	const { routePath } = params;
	const parts = routePath.split("/");

	if (parts.length === 1) {
		redirect(301, "/courses");
	}

	const modularPage = await getSingleModularPage(parts[parts.length - 1]);

	if (!modularPage) {
		throw error(404, "Page not found");
	}

	// Modular page has route paths, but the URL is missing them
	if (modularPage.routePaths.length > 0 && parts.length < modularPage.routePaths.length + 1) {
		const path = getRecordFullPath(
			modularPage.routePaths.map(path => path.slug),
			String(modularPage.slug)
		);

		return {
			correctUrl: `${url.origin}${path}`,
		};
	}

	// Modular page has not route paths, but the URL has them
	if (modularPage.routePaths.length === 0 && parts.length > 1) {
		return {
			correctUrl: `${url.origin}/${modularPage.slug}`,
		};
	}

	return {
		modularPage,
	};
};
