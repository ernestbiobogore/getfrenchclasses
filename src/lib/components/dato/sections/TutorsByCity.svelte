<script lang="ts">
	import Heading from "$dato/blocks/Heading.svelte";
	import TutorCard from "$dato/blocks/tutors/TutorCard.svelte";
	import type { TutorsByCitySectionRecord } from "$lib/graphql/generated";
	import type { getCityBySlugWithTutors } from "$lib/graphql/queries/locations";
	import { Button } from "$shadcn/button";
	import { onMount } from "svelte";

	export let record: TutorsByCitySectionRecord;

	let tutors: NonNullable<
		Awaited<ReturnType<typeof getCityBySlugWithTutors>>
	>["_allReferencingTutors"];

	onMount(async () => {
		const citySlug = record.city.slug;
		const tutorsResponse = await fetch(`/api/tutors/${citySlug}`);

		if (tutorsResponse.ok) {
			const tutorsData = await tutorsResponse.json();
			tutors = tutorsData.tutors;
		}
	});
</script>

{#if tutors && tutors.length > 0}
	<section class="py-20 space-y-12 container-base">
		{#if record.heading}
			<Heading heading={record.heading} />
		{/if}

		<div class="grid gap-6 sm:grid-cols-3">
			{#each tutors as tutor (tutor.id)}
				<TutorCard {tutor} withCTA />
			{/each}
		</div>

		<div class="flex justify-center">
			<Button href="/tutors">All our tutors</Button>
		</div>
	</section>
{/if}
