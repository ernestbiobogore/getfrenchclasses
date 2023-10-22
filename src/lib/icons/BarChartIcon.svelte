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
	><line x1="12" x2="12" y1="20" y2="10" /><line x1="18" x2="18" y1="20" y2="4" /><line
		x1="6"
		x2="6"
		y1="20"
		y2="16"
	/></svg
>
