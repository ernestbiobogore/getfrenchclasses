<script lang="ts">
	import StructuredText from "$dato/StructuredText/index.svelte";
	import AvatarsGroup from "$lib/components/AvatarsGroup.svelte";
	import type { getSingleBlogPost } from "$lib/graphql/queries/posts";
	import { getSampleAvatars } from "$lib/utils";
	import { Button } from "$shadcn/button";
	import CheckCircle from "~icons/lucide/check-circle-2";

	export let postCta: NonNullable<Awaited<ReturnType<typeof getSingleBlogPost>>>["postCtas"][0];

	$: ctaPosition = postCta.ctaPosition;
	$: ctaData = postCta.cta;
</script>

{#if postCta}
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

			<div class="gap-3 text-center flex-s-center">
				<AvatarsGroup avatars={getSampleAvatars(2)} size={20} />
				<span class="text-[9px] max-w-[36ch]">
					and 4570+ learners went from noob to fluent French speakers with our programs.
				</span>
			</div>
		</div>
	{/if}
{/if}
