<script lang="ts">
	import * as Card from "$shadcn/card";
	import { type FormattedSingleTutor, type FormattedTutorMeta } from "$dato/blocks/tutors/types";
	import { type AltFileField } from "$lib/graphql/generated/schema";
	import { setContext } from "svelte";
	import TutorInsideCard from "./Card.svelte";

	export let tutor: FormattedTutorMeta | FormattedSingleTutor;
	export let withCTA = false;

	setContext<FormattedTutorMeta | FormattedSingleTutor>("tutor_data", tutor);
	setContext<boolean>("tutor_withCTA", withCTA);

	const getInitials = (name: string) => {
		return name
			.split(" ")
			.map(word => word[0])
			.join("");
	};

	$: coverMedia = "coverMedia" in tutor ? (tutor.coverMedia as AltFileField) : undefined;
</script>

<Card.Root class="overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer">
	{#if coverMedia}
		{#if coverMedia.video}
			<video class="w-full h-60 object-cover" src={coverMedia.video.mp4Url} controls>
				<track kind="captions" />
			</video>
		{/if}

		{#if coverMedia.responsiveImage}
			<img
				alt={coverMedia.responsiveImage.alt}
				class="object-cover w-full h-60 aspect-square"
				height="100"
				src={coverMedia.responsiveImage.src}
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
