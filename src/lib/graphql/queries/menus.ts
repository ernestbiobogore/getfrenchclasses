import { client } from "$lib/graphql/client";
import type { MenuItemBlockRecordGenqlSelection } from "../generated";

const menuItemSelection = {
	id: true,
	title: true,
	link: true,
	subitems: {
		id: true,
		title: true,
		link: true,
	},
} satisfies MenuItemBlockRecordGenqlSelection;

const getMenuBySlug = async (slug: string) => {
	const { menu } = await client.query({
		menu: {
			__args: {
				filter: {
					slug: {
						eq: slug,
					},
				},
			},
			id: true,
			name: true,
			menuLists: {
				items: menuItemSelection,
			},
		},
	});

	return menu;
};

type Menu = Awaited<ReturnType<typeof getMenuBySlug>>;

export { getMenuBySlug, type Menu };
