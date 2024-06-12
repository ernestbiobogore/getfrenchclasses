const getSitemapMeta = (url: URL) => {
	return {
		siteURL: url.origin,
		priority: 0.6,
		frequency: "daily",
	};
};

type GetSitemapEntriesXmlParams = {
	url: string;
	lastmod: string;
	priority: number;
	frequency: string;
}[];
const getSitemapEntriesXml = (entries: GetSitemapEntriesXmlParams) => {
	return entries.map(({ url, lastmod, priority, frequency }) => {
		return `
            <url>
                <loc>${url}</loc>
                <lastmod>${lastmod}</lastmod>
                <priority>${priority}</priority>
                <changefreq>${frequency}</changefreq>
            </url>
        `;
	});
};

const getSitemapXml = (entries: string[]) => {
	return `
        <urlset
            xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
            xmlns:xhtml="https://www.w3.org/1999/xhtml"
            xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
            xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
            xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
        >
            ${entries.join("")}
        </urlset>
    `;
};

const getSitemapResponseHeaders = () => {
	return {
		"Cache-Control": "max-age=0, s-maxage=3600",
		"Content-Type": "application/xml",
	};
};

export { getSitemapEntriesXml, getSitemapMeta, getSitemapResponseHeaders, getSitemapXml };
