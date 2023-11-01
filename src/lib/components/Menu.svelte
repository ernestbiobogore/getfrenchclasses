<script lang="ts">
	import { createMenubar, melt } from '@melt-ui/svelte';

	const {
		elements: { menubar },
		builders: { createMenu }
	} = createMenubar();

	const {
		elements: { menu, item, trigger }
	} = createMenu();
</script>

<div use:melt={$menubar}>
	<button use:melt={$trigger}>Open Menu</button>
	<div use:melt={$menu}>
		<div {...$item} use:item />
		<div {...$item} use:item>...</div>
		<div {...$item} use:item>...</div>
	</div>
</div>
