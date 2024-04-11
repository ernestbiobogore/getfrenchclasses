<script lang="ts">
	import StructuredText from "$dato/StructuredText/index.svelte";
	import CardMedia from "$dato/blocks/CardMedia.svelte";
	import Heading from "$dato/blocks/Heading.svelte";
	import type { CardsSectionRecord } from "$lib/graphql/generated";
	import { cn } from "$lib/utils";
	import * as Card from "$shadcn/card";
	import { Image } from "@datocms/svelte";

	export let record: CardsSectionRecord;
</script>

{#if record.sectionType === "default"}
	<section class="py-20 space-y-12 container-base">
		{#if record.heading}
			<Heading heading={record.heading} />
		{/if}

		{#if record.cards.length > 0}
			<div class="grid gap-6 max-md:max-w-sm max-md:mx-auto md:mt-8 md:grid-cols-2 lg:grid-cols-3">
				{#each record.cards as card}
					<Card.Root>
						<Card.Header class="space-y-8">
							{#if card.media}
								<CardMedia media={card.media} />
							{/if}

							{#if card.heading.heading}
								<Card.Title>{card.heading.heading}</Card.Title>
							{/if}
						</Card.Header>

						{#if card.heading.subheading}
							<Card.Content>
								<StructuredText richText={card.heading.subheading} />
							</Card.Content>
						{/if}
					</Card.Root>
				{/each}
			</div>
		{/if}
	</section>
{/if}

{#if record.sectionType === "left_and_right"}
	<section class="py-20 space-y-12 container-base">
		{#if record.heading}
			<Heading heading={record.heading} />
		{/if}

		{#if record.cards.length > 0}
			<div class="space-y-10">
				{#each record.cards as card, index}
					<Card.Root
						class={cn(
							"md:flex items-center gap-8 bg-transparent border-none shadow-none",
							index % 2 === 0 ? "flex-row-reverse" : "flex-row"
						)}
					>
						<Card.Header class="p-0 space-y-8 basis-6/12">
							{#if card.media?.format === "svg"}
								{#if card.media.url}
									<img src={card.media?.url} alt={card.media?.alt} class="w-12 h-12" />
								{/if}
							{:else if card.media?.responsiveImage}
								<Image data={card.media.responsiveImage} />
							{/if}
						</Card.Header>

						{#if card.heading.subheading}
							<Card.Content class="p-0 space-y-4">
								{#if card.heading.heading}
									<Card.Title
										class="text-2xl/[2.275rem] sm:text-[1.75rem]/[2.275rem] -tracking-[0.1rem]"
										>{card.heading.heading}</Card.Title
									>
								{/if}

								<StructuredText richText={card.heading.subheading} />
							</Card.Content>
						{/if}
					</Card.Root>
				{/each}
			</div>
		{/if}
	</section>
{/if}

{#if record.sectionType === "companies_logos"}
	<section class="py-20 space-y-12 bg-gray-900 text-white">
		{#if record.heading}
			<Heading heading={record.heading} />
		{/if}

		{#if record.cards.length > 0}
			<div class="container-base grid grid-cols-2 sm:grid-cols-4 gap-4">
				{#each record.cards as { media }}
					{#if media}
						<CardMedia {media} />
					{/if}
				{/each}
			</div>
		{/if}
	</section>
{/if}
