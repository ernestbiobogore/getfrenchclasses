<script lang="ts">
	import StructuredText from "$dato/StructuredText/index.svelte";
	import type { TestimonialBlockDefaultRecord } from "$lib/graphql/generated";
	import * as Card from "$shadcn/card";
	import * as Dialog from "$shadcn/dialog";
	import { Image } from "@unpic/svelte";
	import StarFilled from "~icons/ic/baseline-star";
	import StarEmpty from "~icons/ic/baseline-star-outline";
	import PlayCircle from "~icons/lucide/play-circle";
	import Video from "./Video.svelte";
	import "./styles/testimonial.css";

	export let testimonial: TestimonialBlockDefaultRecord;
</script>

<Card.Root class="single-testimonial" style="--rotation:{testimonial.rotation};">
	<div class="gap-2 flex-s-start">
		{#if testimonial.media}
			{#if testimonial.media.__typename === "VideoBlockRecord"}
				<Dialog.Root>
					<Dialog.Trigger>
						<PlayCircle class="w-8 h-8 text-brand-primary" />
					</Dialog.Trigger>

					<Dialog.Content>
						<Video video={testimonial.media} class="h-80" />
					</Dialog.Content>
				</Dialog.Root>
			{/if}

			{#if testimonial.media.__typename === "ImageBlockRecord" && testimonial.media.image.responsiveImage?.src}
				<Image
					src={testimonial.media.image.responsiveImage.src}
					alt={testimonial.media.image.responsiveImage.alt}
					layout="constrained"
					width={32}
					aspectRatio={1}
					background={testimonial.media.image.responsiveImage?.base64 ||
						testimonial.media.image.responsiveImage?.bgColor ||
						"auto"}
				/>
			{/if}
		{/if}

		<div>{testimonial.author}</div>

		<div class="flex-s-center ml-auto">
			{#each { length: testimonial.rating || 0 } as _}
				<StarFilled class="!size-4 text-yellow-500" />
			{/each}

			{#each { length: 5 - (testimonial.rating || 0) } as _}
				<StarEmpty class="!size-4 text-yellow-500" />
			{/each}
		</div>
	</div>

	<StructuredText richText={testimonial.content} />
</Card.Root>
