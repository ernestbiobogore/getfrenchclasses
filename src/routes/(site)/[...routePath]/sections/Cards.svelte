<script lang="ts">
	import StructuredText from "$lib/components/dato/StructuredText/index.svelte";
	import * as Card from "$lib/components/shadcn/ui/card";
	import type { CardsSectionRecord } from "$lib/graphql/generated";
	import { Image } from "@datocms/svelte";

	export let record: CardsSectionRecord;
</script>

<section class="container-base flex flex-col gap-6 py-20">
	<h2 class="text-center">{record.heading?.heading}</h2>
	<StructuredText
		richText={record.heading?.subheading}
		class="text-center mx-auto max-w-[46ch] md:max-w-[64ch]"
	/>

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
</section>
