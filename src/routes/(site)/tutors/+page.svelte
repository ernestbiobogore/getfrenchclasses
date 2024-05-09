<script lang="ts" context="module">
	const filterOptions = {
		levels: [
			{ value: "beginner", label: "Beginner" },
			{ value: "intermediate", label: "Intermediate" },
			{ value: "advanced", label: "Advanced" },
		],
		audiences: [
			{ value: "kids", label: "Kids" },
			{ value: "adults", label: "Adults" },
		],
	} as const;

	function isLevelOptionValue(value: string | undefined): value is LevelOptionValue {
		return filterOptions.levels.some(option => option.label === value);
	}

	function isAudienceOptionValue(value: string | undefined): value is AudienceOptionValue {
		return filterOptions.audiences.some(option => option.label === value);
	}

	function castAsRecord(t: any) {
		return t as Record<string, { value: string; label: string }[]>;
	}

	export type LevelOptionValue = (typeof filterOptions)["levels"][number]["value"];
	export type AudienceOptionValue = (typeof filterOptions)["audiences"][number]["value"];
	export type SelectedTutorOptions = Selected<LevelOptionValue | AudienceOptionValue>[];
</script>

<script lang="ts">
	import TutorCard from "$dato/blocks/tutors/TutorCard.svelte";
	import ModularPage from "$dato/sections/ModularPage.svelte";
	import CustomMultiselect, {
		type SelectChangeHandler,
	} from "$lib/components/CustomMultiselect.svelte";
	import Head from "$lib/components/seo/Head.svelte";
	import { Button } from "$shadcn/button";
	import * as Card from "$shadcn/card";
	import type { Selected } from "bits-ui";

	export let data;

	$: allTutorsMeta = data.tutorsMetas;
	$: filteredTutors = allTutorsMeta;

	const handleFilterChange: SelectChangeHandler = selected => {
		if (!selected || selected.length === 0) {
			filteredTutors = allTutorsMeta;
			return;
		}

		const selectedTutorOptions = selected as SelectedTutorOptions;

		filteredTutors = allTutorsMeta.filter(tutor => {
			const levelSelected = selectedTutorOptions.some(option => isLevelOptionValue(option.label));
			const audienceSelected = selectedTutorOptions.some(option =>
				isAudienceOptionValue(option.label)
			);

			if (levelSelected && audienceSelected) {
				return (
					tutor.levels.some(level => selectedTutorOptions.some(option => option.value === level)) ||
					tutor.audiences.some(audience =>
						selectedTutorOptions.some(option => option.value === audience)
					)
				);
			}

			if (levelSelected) {
				return tutor.levels.some(level =>
					selectedTutorOptions.some(option => option.value === level)
				);
			}

			if (audienceSelected) {
				return tutor.audiences.some(audience =>
					selectedTutorOptions.some(option => option.value === audience)
				);
			}

			return false;
		});
	};
</script>

<Head seo={data.modularPage.seo} title={data.modularPage.title} />

{#if data.modularPage}
	<ModularPage modularPage={data.modularPage} />
{/if}

<section class="pt-10 container-base">
	<CustomMultiselect
		onSelectedChange={handleFilterChange}
		placeholder="Filter by Level or Audience"
		options={castAsRecord(filterOptions)}
	/>
</section>

<section class="py-20 container-base">
	<!-- <CourseSectionDivider label="Beginner" /> -->

	<div class="grid gap-6 sm:grid-cols-3">
		{#each filteredTutors as tutor}
			<TutorCard {tutor} withCTA />
		{/each}
	</div>
</section>
