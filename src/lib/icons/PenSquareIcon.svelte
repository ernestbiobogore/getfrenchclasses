<script lang="ts">
	import { cn } from '$lib/utils';

	export let width = 24;
	export let height = 24;
	export { className as class };

	let className: string | undefined = '';
	const baseClass = 'fill-none stroke-gray-900 stroke-2';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	{width}
	{height}
	viewBox="0 0 24 24"
	class={cn(baseClass, className)}
	><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path
		d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"
	/></svg
>
