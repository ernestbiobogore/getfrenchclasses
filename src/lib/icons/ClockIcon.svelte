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
	><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16.5 12" /></svg
>
