<script lang="ts">
	import { page } from "$app/stores";
	import StructuredText from "$dato/StructuredText/index.svelte";
	import "@fontsource-variable/inter";
	import "nprogress/nprogress.css";
	import BiFacebook from "~icons/bi/facebook";
	import BiLinkedin from "~icons/bi/linkedin";
	import BiTwitter from "~icons/bi/twitter";
	import BiYoutube from "~icons/bi/youtube";
	import LucideInstagram from "~icons/lucide/instagram";
	import type { LayoutData } from "../../../../routes/(site)/$types";

	$: menuLists = ($page.data as LayoutData).footerMenu?.menuLists;
	$: siteConfig = ($page.data as LayoutData).siteConfig;
	$: currentYear = new Date().getFullYear();
</script>

<footer class="py-12 space-y-8 mt-20 text-white bg-gray-900">
	<div class="container-base">
		<div class="flex flex-col gap-8 py-12 sm:gap-0 sm:flex-row">
			<div class="space-y-5 basis-7/12">
				<a href="/" class="font-bold">Get French Classes</a>

				{#if siteConfig?.companyDescription}
					<StructuredText richText={siteConfig.companyDescription} class="text-sm sm:w-6/12" />
				{/if}

				{#if siteConfig?.socialLinks && siteConfig.socialLinks.length > 0}
					<div class="flex gap-2 text-2xl">
						{#each siteConfig.socialLinks as link}
							{#if link.socialType === "instagram"}
								<a href={link.link} target="_blank">
									<LucideInstagram />
								</a>
							{/if}

							{#if link.socialType === "facebook"}
								<a href={link.link} target="_blank">
									<BiFacebook />
								</a>
							{/if}

							{#if link.socialType === "twitter"}
								<a href={link.link} target="_blank">
									<BiTwitter />
								</a>
							{/if}

							{#if link.socialType === "linkedin"}
								<a href={link.link} target="_blank">
									<BiLinkedin />
								</a>
							{/if}

							{#if link.socialType === "youtube"}
								<a href={link.link} target="_blank">
									<BiYoutube />
								</a>
							{/if}
						{/each}
					</div>
				{/if}
			</div>
			<div class="flex flex-col gap-5 md:gap-16 basis-5/12 md:flex-row">
				{#if menuLists && menuLists.length > 0}
					{#each menuLists as menuList (menuList.id)}
						{#if menuList.items && menuList.items.length > 0}
							<div class="space-y-4">
								{#if menuList.name}
									<p class="font-bold">{menuList.name}</p>
								{/if}

								<ul class="pl-0 space-y-2 text-sm list-none">
									{#each menuList.items as item (item.id)}
										<li class="transition-all duration-200 hover:translate-x-2">
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

		<div class="py-8 sm:text-center">
			<p class="text-sm">
				© {currentYear} <a href="/" class="font-medium hover:underline">Get French Classes</a>.
			</p>
		</div>
	</div>
</footer>
