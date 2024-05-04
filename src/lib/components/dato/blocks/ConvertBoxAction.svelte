<script lang="ts">
	import { Button } from "$shadcn/button";

	export let convertboxId: string | null;
	export let title: string | null;
</script>

{#if convertboxId}
	<Button variant="brand" href={convertboxId}>
		{title}
	</Button>
{/if}
