import { dev } from "$app/environment";
import {
	DATOCMS_API_ENDPOINT,
	DATOCMS_API_KEY,
	DATOCMS_ENVIRONMENT_NAME,
} from "$env/static/private";
import { createClient } from "$lib/graphql/generated";
import fs from "fs";
import path from "path";

const packageJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), "package.json"), "utf8"));
const version = packageJson.version;
const clientName = packageJson.name;

const environment = dev ? "local" : "prod";

const client = createClient({
	url: DATOCMS_API_ENDPOINT,
	headers: {
		Authorization: `Bearer ${DATOCMS_API_KEY}`,
		"X-Environment": DATOCMS_ENVIRONMENT_NAME,
		"X-Exclude-Invalid": "true",
		"x-graphql-client-name": `${clientName}@${environment}`,
		"x-graphql-client-version": version,
	},
});

export { client };
