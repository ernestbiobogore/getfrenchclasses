<script lang="ts">
	import { page } from "$app/stores";
	import { Button } from "$shadcn/button";
	import { Input } from "$shadcn/input";
	import { Label } from "bits-ui";
	import { queryParam } from "sveltekit-search-params";
	import LucideSearch from "~icons/lucide/search";
	import type { PageData } from "../resources/$types";

	$: uniqueTopics = Array.from(
		new Map(
			($page.data as PageData).allResources
				.flatMap(item => item.topics)
				.map(topic => [topic.slug, topic])
		).values()
	);

	const topicParam = queryParam("topic");
</script>

<div class="flex flex-col gap-4">
	<div class="space-y-2">
		<Label.Root for="search-topics" class="text-sm">Search Topics</Label.Root>

		<div class="relative">
			<Input class="bg-white pl-3 pr-8 py-2" type="text" placeholder="Search by Title" />

			<div class="absolute right-0 top-0 pr-3 flex-s-center h-full">
				<LucideSearch class="text-gray-500" />
			</div>
		</div>
	</div>
	<div
		class="flex flex-col items-start gap-2 overflow-y-auto border border-gray-300 rounded-md p-2"
	>
		{#each uniqueTopics as topic (topic.slug)}
			<Button variant="link" class="p-0 h-fit" on:click={() => ($topicParam = topic.slug)}
				>{topic.name}</Button
			>
		{/each}
	</div>
</div>
