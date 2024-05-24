<script lang="ts">
	import StructuredText from "$dato/StructuredText/index.svelte";
	import Video from "$dato/blocks/Video.svelte";
	import type { getSingleBlogPost } from "$lib/graphql/queries/posts";
	import { Button } from "$shadcn/button";
	import { Image } from "@unpic/svelte";
	import CheckCircle from "~icons/lucide/check-circle-2";

	export let postCta: NonNullable<Awaited<ReturnType<typeof getSingleBlogPost>>>["postCtas"][0];

	$: ctaPosition = postCta.ctaPosition;
	$: ctaData = postCta.cta;
</script>

{#if postCta}
	{#if ctaPosition === "top"}
		<div class="flex flex-col sm:flex-row">
			{#if ctaData.media}
				<div class="basis-1/2">
					{#if ctaData.media?.__typename === "VideoBlockRecord"}
						<Video video={ctaData.media} class="h-full" />
					{/if}

					{#if ctaData.media?.__typename === "ImageBlockRecord"}
						<Image
							src={ctaData.media.image.responsiveImage?.src || ctaData.media.image.url}
							alt={ctaData.media.altText || ctaData.media.image.alt}
							layout="fullWidth"
							aspectRatio={ctaData.media.image.responsiveImage?.aspectRatio || 1.28}
							background={ctaData.media.image.responsiveImage?.base64 ||
								ctaData.media.image.responsiveImage?.bgColor ||
								"auto"}
							class="h-full"
						/>
					{/if}
				</div>
			{/if}

			<div class="bg-gray-50 p-8 basis-1/2 flex flex-col justify-center gap-4">
				<div class="flex gap-2">
					<p class="text-2xl font-medium tracking-tight">{ctaData.title}</p>
				</div>

				<StructuredText richText={ctaData.content} class="space-y-4" />

				<hr />

				{#if ctaData.repeatableList.length > 0}
					<div class="space-y-2">
						<p class="text-xl font-medium">{ctaData.repeatableTitle || "Features"}</p>

						<div class="flex flex-col">
							{#each ctaData.repeatableList as feature}
								<p class="flex items-center gap-2 text-sm">
									<CheckCircle class="text-green-700 stroke-2" />
									{feature.text}
								</p>
							{/each}
						</div>
					</div>
				{/if}

				{#if ctaData.cta}
					<Button href={ctaData.cta.link} class="w-full text-white bg-brand-primary">
						{ctaData.cta.text}
					</Button>
				{/if}
			</div>
		</div>
	{/if}

	{#if ctaPosition === "right"}
		<div
			class="rounded-lg border-brand-primary border-2 bg-white p-6 shadow-lg max-w-[400px] mx-auto flex flex-col gap-4"
		>
			<div class="flex gap-2">
				<img src="/get-french-classes-logo.png" alt="Get French Classes" class="w-5 h-5" />
				<p class="text-lg font-medium tracking-tight">{ctaData.title}</p>
			</div>

			<StructuredText richText={ctaData.content} class="space-y-4" />

			<hr />

			{#if ctaData.repeatableList.length > 0}
				<div class="space-y-2">
					<p class="text-xl font-medium">{ctaData.repeatableTitle || "Features"}</p>

					<div class="flex flex-col">
						{#each ctaData.repeatableList as feature}
							<p class="flex items-center gap-2 text-sm">
								<CheckCircle class="text-green-700 stroke-2" />
								{feature.text}
							</p>
						{/each}
					</div>
				</div>
			{/if}

			{#if ctaData.cta}
				<Button href={ctaData.cta.link} class="w-full text-white bg-brand-primary">
					{ctaData.cta.text}
				</Button>
			{/if}
		</div>
	{/if}
{/if}
