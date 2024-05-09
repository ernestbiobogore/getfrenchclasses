import type { getSingleModularPage } from "$lib/graphql/queries/modular";

type Seo = NonNullable<Awaited<ReturnType<typeof getSingleModularPage>>>["seo"];

const getSeoData = ({ seo, href, title }: { seo: Seo; href: string; title: string }) => {
	const block = seo?.seoBlock;

	return {
		url: href,
		title: (block?.title || title) + " - GetFrenchClasses",
		description: block?.description || title,
		image: block?.image
			? {
					url: block?.image?.responsiveImage?.src || block?.image?.url,
					alt: block?.image?.alt || title,
					width: 1200,
					height: 630,
				}
			: null,
	};
};

export { getSeoData, type Seo };
