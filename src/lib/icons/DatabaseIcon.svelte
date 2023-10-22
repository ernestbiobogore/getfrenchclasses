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
	><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path
		d="M3 12A9 3 0 0 0 21 12"
	/></svg
>
