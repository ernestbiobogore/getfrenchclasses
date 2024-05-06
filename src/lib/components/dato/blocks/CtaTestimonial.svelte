<script lang="ts">
	import StructuredText from "$dato/StructuredText/index.svelte";
	import type { TestimonialBlockCtaRecord } from "$lib/graphql/generated";
	import { cn } from "$lib/utils";
	import { Button } from "$shadcn/button";
	import * as Card from "$shadcn/card";
	import * as Dialog from "$shadcn/dialog";
	import { Image } from "@unpic/svelte";
	import CarbonQuotes from "~icons/carbon/quotes";
	import PlayCircle from "~icons/lucide/play-circle";
	import "../blocks/styles/testimonial.css";
	import Video from "./Video.svelte";

	export let testimonial: TestimonialBlockCtaRecord;
</script>

<Card.Root
	class="py-20 container-base"
	style="border-radius: 20px;
background: linear-gradient(261deg, #5e62d1 10%, #FFF 100%);
box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.25);"
>
	<Card.Header class="flex flex-col gap-6 md:flex-row lg:gap-8">
		<div class={cn("rounded-2xl bg-white flex-1", testimonial.highlight && "pt-2 px-4 pb-8")}>
			{#if testimonial.highlight}
				<CarbonQuotes class="mb-2 text-2xl text-brand-primary md:text-6xl" />
				<Card.Title>
					<StructuredText
						richText={testimonial.highlight}
						elementClasses={{
							p: "text-lg !font-medium tracking-normal md:text-2xl md:pl-4 lg:text-4xl/[3rem]",
						}}
					/>
				</Card.Title>
			{/if}
		</div>

		<div class="flex md:flex-col md:flex-[0.2]">
			{#if testimonial.media}
				{#if testimonial.media.__typename === "VideoBlockRecord"}
					<Dialog.Root>
						<Dialog.Trigger>
							<PlayCircle class="w-10 h-10 text-white" />
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
						width={248}
						aspectRatio={1}
						background={testimonial.media.image.responsiveImage?.base64 ||
							testimonial.media.image.responsiveImage?.bgColor ||
							"auto"}
					/>
				{/if}
			{/if}

			<div>
				<p class="text-lg font-semibold text-white">{testimonial.author}</p>
				<p class="text-sm font-medium text-white">{testimonial.role} - {testimonial.company}</p>
			</div>
		</div>
	</Card.Header>

	<Card.Content class="flex flex-col gap-4 pb-0 md:flex-row">
		{#if testimonial.content.heading}
			<div class="flex-1">
				<h3 class=" md:text-4xl">{testimonial.content.heading}</h3>
			</div>
		{/if}

		<div class="flex-1 space-y-8">
			{#if testimonial.content.subheading}
				<StructuredText richText={testimonial.content.subheading} />
			{/if}

			{#if testimonial.cta}
				<Button
					size="lg"
					href={testimonial.cta.link}
					class="w-full bg-aquamarine text-foreground hover:text-white"
					>{testimonial.cta.text}</Button
				>
			{/if}
		</div>
	</Card.Content>
</Card.Root>
