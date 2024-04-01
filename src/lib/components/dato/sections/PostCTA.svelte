<script lang="ts">
	import { page } from "$app/stores";
	import AvatarsGroup from "$lib/components/AvatarsGroup.svelte";
	import { getSampleAvatars } from "$lib/utils";
	import { Button } from "$shadcn/button";
	import type { PageData } from "../../../../routes/(site)/blog/[...routePath]/$types";

	$: postCta = ($page.data as PageData).post?.postCta;
</script>

{#if postCta}
	<div
		class="rounded-lg border-savoy-blue border-2 bg-white p-6 shadow-lg max-w-[400px] mx-auto flex flex-col gap-4"
	>
		<div class="flex gap-2">
			<img src="/get-french-classes-logo.png" alt="Get French Classes" class="w-8 h-8" />
			<p class="text-lg font-medium tracking-tight">{postCta.title}</p>
		</div>

		<!-- <StructuredText richText={postCta.content?.value} class="space-y-4" /> -->

		{#if postCta.cta}
			<Button href={postCta.cta.link} class="w-full text-white bg-savoy-blue">
				{postCta.cta.text}
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
