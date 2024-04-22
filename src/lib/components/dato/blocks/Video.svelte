<script lang="ts">
	import type { VideoBlockRecord } from "$lib/graphql/generated";
	import { cn } from "$lib/utils";

	let className: string | undefined = "";

	export let video: VideoBlockRecord;
	export { className as class };

	$: videoData = video.video;
</script>

{#if videoData.__typename === "VideoBlockExternalRecord"}
	<video class={cn("object-cover w-full", className)} src={videoData.url} controls>
		<track kind="captions" />
	</video>
{/if}

{#if videoData.__typename === "VideoBlockInternalRecord"}
	<video class={cn("object-cover w-full", className)} src={videoData.video.video.mp4Url} controls>
		<track kind="captions" />
	</video>
{/if}
