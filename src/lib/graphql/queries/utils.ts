const getRecordFullPath = (
	recordRoutePathSlugs: (string | null)[],
	recordSlug: string,
	recordsBasePath = "/"
) => {
	const pathString = recordRoutePathSlugs.length > 0 ? `/${recordRoutePathSlugs.join("/")}` : "";
	return `${recordsBasePath}${pathString}/${recordSlug}`;
};

export { getRecordFullPath };
