<script lang="ts">
	import Check from "~icons/lucide/check";
	import ChevronUpDown from "~icons/lucide/chevrons-up-down";
	import ListFilter from "~icons/lucide/list-filter";
	import { Select } from "bits-ui";
	import { flyAndScale } from "$lib/utils";

	const options = {
		levels: [
			{ value: "beginner", label: "Beginner" },
			{ value: "intermediate", label: "Intermediate" },
			{ value: "advanced", label: "Advanced" },
		],
		bundles: [{ value: "starter", label: "Starter" }],
	};
</script>

<Select.Root multiple onSelectedChange={selected => {}}>
	<Select.Trigger
		class="inline-flex h-[3rem] min-w-[229px] gap-2 items-center rounded-[9px] border border-1 bg-white px-[11px] text-sm transition-colors"
	>
		<ListFilter />
		<Select.Value class="text-gray-600" placeholder="Filter by Level or Bundle" />
		<ChevronUpDown class="ml-auto" />
	</Select.Trigger>
	<Select.Content
		class="w-full rounded-xl border border-gray-200 bg-white px-2 py-3 shadow-lg outline-none"
		transition={flyAndScale}
		sideOffset={8}
	>
		{#each Object.entries(options) as [key, arr]}
			<Select.Group>
				<Select.Label class="capitalize font-medium">{key}</Select.Label>
				{#each arr as level}
					<Select.Item
						class="flex h-10 w-full select-none items-center rounded py-3 pl-3 pr-1.5 text-sm
						text-gray-700 outline-none transition-all duration-75 data-[highlighted]:bg-magnolia/80"
						value={level.value}
						label={level.label}
					>
						{level.label}
						<Select.ItemIndicator class="ml-auto" asChild={false}>
							<Check />
						</Select.ItemIndicator>
					</Select.Item>
				{/each}
			</Select.Group>
		{/each}
	</Select.Content>
</Select.Root>
