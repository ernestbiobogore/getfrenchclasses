<script lang="ts">
	import Video from "$dato/blocks/Video.svelte";
	import { type FormattedSingleTutor, type FormattedTutorMeta } from "$dato/blocks/tutors/types";
	import * as Card from "$shadcn/card";
	import { Image } from "@unpic/svelte";
	import { setContext } from "svelte";
	import TutorInsideCard from "./Card.svelte";

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

		{#if tutor.coverMedia.__typename === "ImageBlockRecord" && tutor.coverMedia.image.responsiveImage?.src}
			<Image
				src={tutor.coverMedia.image.responsiveImage?.src}
				alt={tutor.coverMedia.image.responsiveImage?.alt}
				layout="fullWidth"
				height={240}
				background={tutor.coverMedia.image.responsiveImage?.base64 ||
					tutor.coverMedia.image.responsiveImage?.bgColor ||
					"auto"}
				class="object-cover"
			/>
		{/if}
	{:else}
		<Image
			src="/placeholder.svg"
			alt="Banner"
			layout="fullWidth"
			height={240}
			background="auto"
			class="object-cover"
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
