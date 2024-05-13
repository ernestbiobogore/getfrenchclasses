<script lang="ts">
	import Youtube from "svelte-youtube-embed";

	export let youtubeId: string;
</script>

<Youtube id={youtubeId} />

<style>
	:global(.v__title) {
		@apply py-4;
	}

	:global(.v__title h3) {
		@apply text-base;
	}
</style>
