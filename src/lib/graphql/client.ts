import { DATOCMS_API_ENDPOINT, DATOCMS_API_KEY } from '$env/static/private';
import { createClient } from '$lib/graphql/generated';

const client = createClient({
	url: DATOCMS_API_ENDPOINT,
	headers: {
		Authorization: `Bearer ${DATOCMS_API_KEY}`
	}
});

export { client };
