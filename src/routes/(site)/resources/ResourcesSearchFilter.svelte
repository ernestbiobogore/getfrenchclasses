<script lang="ts">
	import { page } from "$app/stores";
	import { Badge } from "$shadcn/badge";
	import { Button } from "$shadcn/button";
	import { Input } from "$shadcn/input";
	import { Label } from "bits-ui";
	import LucideSearch from "~icons/lucide/search";
	import type { PageData } from "../resources/$types";
	import { selectedTopic } from "./stores";

	$: uniqueTopics = Array.from(
		new Map(
			($page.data as PageData).allResources
				.flatMap(item => item.topics)
				.map(topic => [topic.slug, topic])
		).values()
	);
</script>

<div class="flex flex-col gap-4">
	<div class="space-y-2">
		<Label.Root for="search-topics" class="text-sm">Search Topics</Label.Root>

		<div class="relative">
			<Input class="py-2 pl-3 pr-8 bg-white" type="text" placeholder="Search by Title" />

			<div class="absolute top-0 right-0 h-full pr-3 flex-s-center">
				<LucideSearch class="text-gray-500" />
			</div>
		</div>
	</div>

	<Badge class="capitalize w-fit bg-brand-primary">
		{#if $selectedTopic}
			{$selectedTopic}
		{:else}
			All
		{/if}
	</Badge>

	<div
		class="flex flex-col items-start gap-2 p-2 overflow-y-auto border border-gray-300 rounded-md"
	>
		<Button variant="link" class="p-0 h-fit" on:click={() => ($selectedTopic = undefined)}>
			All
		</Button>
		{#each uniqueTopics as topic (topic.slug)}
			<Button variant="link" class="p-0 h-fit" on:click={() => ($selectedTopic = topic.slug)}
				>{topic.name}</Button
			>
		{/each}
	</div>
</div>
