<script lang="ts">
	import StructuredText from "$dato/StructuredText/index.svelte";
	import type { TestimonialBlockDefaultRecord } from "$lib/graphql/generated";
	import * as Card from "$shadcn/card";
	import StarFilled from "~icons/ic/baseline-star";
	import StarEmpty from "~icons/ic/baseline-star-outline";
	import { Image } from "@unpic/svelte";
	import "./styles/testimonial.css";

	export let testimonial: TestimonialBlockDefaultRecord;
</script>

<Card.Root class="single-testimonial" style="--rotation:{testimonial.rotation};">
	<div class="gap-2 flex-s-start">
		<div class="bg-red-600 rounded-full">
			{#if testimonial.picture?.responsiveImage}
				<Image
					src={testimonial.picture.responsiveImage?.src || testimonial.picture.url}
					alt={testimonial.picture.alt}
					layout="constrained"
					width={32}
					aspectRatio={1}
					background={testimonial.picture.responsiveImage?.base64 ||
						testimonial.picture.responsiveImage?.bgColor ||
						"auto"}
				/>
			{/if}
		</div>

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
