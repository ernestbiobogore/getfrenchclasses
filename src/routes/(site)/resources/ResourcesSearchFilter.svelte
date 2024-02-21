<script lang="ts">
	import LucideSearch from "~icons/lucide/search";
	import { Input } from "$shadcn/input";
	import { Label } from "bits-ui";

	const topics = ["Grammar", "Vocabulary", "Listening", "Reading", "Writing", "Speaking"];
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
	<div class="flex flex-col gap-2 overflow-y-auto border border-gray-300 rounded-md p-2">
		{#each topics as topic}
			<a class="text-sm font-medium hover:underline" href="/freebies">{topic}</a>
		{/each}
	</div>
</div>
