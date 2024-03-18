<script lang="ts">
	import StructuredText from "$lib/components/dato/StructuredText/index.svelte";
	import * as Card from "$lib/components/shadcn/ui/card";
	import type { CardsSectionRecord } from "$lib/graphql/generated";
	import { cn } from "$lib/utils";
	import { Image } from "@datocms/svelte";

	export let record: CardsSectionRecord;
</script>

<section class="py-20 space-y-12 container-base">
	<h2 class="text-center">{record.heading?.heading}</h2>
	<StructuredText
		richText={record.heading?.subheading}
		class="text-center mx-auto max-w-[46ch] md:max-w-[64ch]"
	/>

	{#if record.sectionType === "default"}
		{#if record.cards.length > 0}
			<div class="grid gap-6 max-md:max-w-sm max-md:mx-auto md:mt-8 md:grid-cols-2 lg:grid-cols-3">
				{#each record.cards as card}
					<Card.Root>
						<Card.Header class="space-y-8">
							{#if card.media?.format === "svg"}
								{#if card.media.url}
									<img src={card.media?.url} alt={card.media?.alt} class="w-12 h-12" />
								{/if}
							{:else if card.media?.responsiveImage}
								<Image data={card.media.responsiveImage} />
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
	{/if}

	{#if record.sectionType === "left_and_right"}
		{#if record.cards.length > 0}
			<div class="space-y-10">
				{#each record.cards as card, index}
					<Card.Root class={cn("md:flex items-center gap-8 bg-transparent border-none shadow-none", index % 2 === 0 ? "flex-row-reverse" : "flex-row")}>
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
									<Card.Title class="text-2xl/[2.275rem] sm:text-[1.75rem]/[2.275rem] -tracking-[0.1rem]">{card.heading.heading}</Card.Title>
								{/if}

								<StructuredText richText={card.heading.subheading} />
							</Card.Content>
						{/if}
					</Card.Root>
				{/each}
			</div>
		{/if}
	{/if}
</section>
