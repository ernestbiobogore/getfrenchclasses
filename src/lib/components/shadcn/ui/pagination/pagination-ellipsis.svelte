<script lang="ts">
	import MoreHorizontal from "~icons/lucide/more-horizontal";
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	type $$Props = HTMLAttributes<HTMLSpanElement>;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<span
	aria-hidden
	class={cn("flex h-9 w-9 items-center justify-center", className)}
	{...$$restProps}
>
	<MoreHorizontal />
	<span class="sr-only">More pages</span>
</span>
