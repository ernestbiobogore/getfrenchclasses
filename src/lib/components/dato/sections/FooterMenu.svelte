<script lang="ts">
	import { page } from "$app/stores";
	import "@fontsource-variable/inter";
	import "nprogress/nprogress.css";
	import BiFacebook from "~icons/bi/facebook";
	import BiLinkedin from "~icons/bi/linkedin";
	import BiTwitter from "~icons/bi/twitter";
	import BiYoutube from "~icons/bi/youtube";
	import LucideInstagram from "~icons/lucide/instagram";
	import type { LayoutData } from "../../../../routes/(site)/$types";

	$: menuLists = ($page.data as LayoutData).footerMenu?.menuLists;
	$: currentYear = new Date().getFullYear();
</script>

<footer class="pt-24 pb-6 space-y-8 container-base">
	<div class="flex flex-col gap-8 sm:gap-0 sm:flex-row pt-8 border-t-[0.5px] border-t-[#999]">
		<div class="space-y-5 basis-9/12">
			<a href="/" class="font-bold">Get French Classes</a>
			<p class="text-sm sm:w-4/12">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto inventore repellendus
				perferendis illum autem, deserunt dignissimos aut.
			</p>

			<div class="flex gap-2 text-2xl">
				<LucideInstagram />
				<BiFacebook />
				<BiTwitter />
				<BiYoutube />
				<BiLinkedin />
			</div>
		</div>
		<div class="flex flex-col gap-5 md:gap-20 basis-3/12 md:flex-row">
			{#if menuLists && menuLists.length > 0}
				{#each menuLists as menuList (menuList.id)}
					{#if menuList.items && menuList.items.length > 0}
						<div class="space-y-4">
							{#if menuList.name}
								<p class="font-bold">{menuList.name}</p>
							{/if}

							<ul class="space-y-2 text-sm">
								{#each menuList.items as item (item.id)}
									<li>
										<a href={item.link}>{item.title}</a>
									</li>
								{/each}
							</ul>
						</div>
					{/if}
				{/each}
			{/if}
		</div>
	</div>

	<div>
		<p class="text-xs">© {currentYear} Get French Classes.</p>
	</div>
</footer>
