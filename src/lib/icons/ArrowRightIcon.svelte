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
	class={cn(baseClass, className)}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
>
