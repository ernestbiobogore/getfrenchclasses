<script lang="ts">
	import type { PostShareOptions } from "$lib/types";
	import { getShareLinks } from "$lib/utils";
	import Fa6BrandsXTwitter from "~icons/fa6-brands/x-twitter";
	import LucideFacebook from "~icons/lucide/facebook";
	import LucideLinkedin from "~icons/lucide/linkedin";
	import PhRedditLogoBold from "~icons/ph/reddit-logo-bold";

	export let shareOptions: PostShareOptions;

	$: ({ twitterShareUrl, facebookShareUrl, linkedInShareUrl, redditShareUrl } =
		getShareLinks(shareOptions));
</script>

<div class="text-sm flex flex-wrap gap-2 items-center my-4 [&>*]:shrink-none [&>*]:h-[30px]">
	<a
		href={twitterShareUrl}
		class="gap-1 px-2 border border-gray-400 rounded-lg inline-flex-s-center"
	>
		<Fa6BrandsXTwitter />
		<span>Share on Twitter</span>
	</a>
	<a
		href={facebookShareUrl}
		class="gap-1 px-1 border border-gray-400 rounded-lg inline-flex-s-center"
	>
		<LucideFacebook class="text-lg" />
		<span>Share on Facebook</span>
	</a>
	<a
		href={linkedInShareUrl}
		class="gap-1 px-2 border border-gray-400 rounded-lg inline-flex-s-center"
	>
		<LucideLinkedin class="text-lg" />
		<span>Share on LinkedIn</span>
	</a>
	<a
		href={redditShareUrl}
		class="gap-1 px-2 border border-gray-400 rounded-lg inline-flex-s-center"
	>
		<PhRedditLogoBold class="text-lg" />
		<span>Share on Reddit</span>
	</a>
</div>
