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
	<button use:melt={$trigger}>Company</button>
	<div use:melt={$menu}>
		<div {...$item} use:item>Courses</div>
		<div {...$item} use:item>About</div>
		<div {...$item} use:item>Features</div>
	</div>
</div>
