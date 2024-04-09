<script lang="ts">
	import StructuredText from "$lib/components/dato/StructuredText/index.svelte";
	import * as Card from "$lib/components/shadcn/ui/card";
	import type { TestimonialBlockDefaultRecord } from "$lib/graphql/generated";
	import { Image } from "@datocms/svelte";
	import "./styles/testimonial.css";

	export let testimonial: TestimonialBlockDefaultRecord;
</script>

<Card.Root class="single-testimonial" style="--rotation:{testimonial.rotation};">
	<div class="gap-2 flex-s-start">
		<div class="bg-red-600 rounded-full">
			{#if testimonial.picture?.responsiveImage}
				<Image data={testimonial.picture.responsiveImage} class="rounded-full !size-8" />
			{/if}
		</div>

		<div>{testimonial.author}</div>
	</div>

	<StructuredText richText={testimonial.content} />
</Card.Root>
