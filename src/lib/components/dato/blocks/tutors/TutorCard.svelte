<script lang="ts">
	import * as Card from "$shadcn/card";
	import { type FormattedSingleTutor, type FormattedTutorMeta } from "$dato/blocks/tutors/types";
	import { type AltFileField } from "$lib/graphql/generated/schema";
	import { setContext } from "svelte";
	import TutorInsideCard from "./Card.svelte";
	import Video from "$dato/blocks/Video.svelte";

	export let tutor: FormattedTutorMeta | FormattedSingleTutor;
	export let withCTA = false;

	setContext<FormattedTutorMeta | FormattedSingleTutor>("tutor_data", tutor);
	setContext<boolean>("tutor_withCTA", withCTA);
</script>

<Card.Root class="overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer">
	{#if tutor.coverMedia}
		{#if tutor.coverMedia.__typename === "VideoBlockRecord"}
			<Video video={tutor.coverMedia} class="h-60" />
		{/if}

		{#if tutor.coverMedia.__typename === "ImageBlockRecord"}
			<img
				alt={tutor.coverMedia.image.responsiveImage?.src}
				class="object-cover w-full h-60 aspect-square"
				height="100"
				src={tutor.coverMedia.image.responsiveImage?.src}
				width="350"
			/>
		{/if}
	{:else}
		<img
			alt="Banner"
			class="object-cover w-full h-60 aspect-square"
			height="100"
			src="/placeholder.svg"
			width="350"
		/>
	{/if}

	{#if withCTA}
		<TutorInsideCard />
	{:else}
		<a href="/tutor/{tutor.slug}">
			<TutorInsideCard />
		</a>
	{/if}
</Card.Root>
