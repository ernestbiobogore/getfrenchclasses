<script lang="ts">
	import { page } from "$app/stores";
	import * as Sheet from "$shadcn/sheet";
	import AlignJustify from "~icons/lucide/align-justify";
	import type { LayoutData } from "../../../../routes/(site)/$types";

	$: menu = ($page.data as LayoutData).headerMenu;
	$: items = menu?.menuLists[0].items;
</script>

<nav class="py-4 sticky top-0 z-10 bg-magnolia border-b">
	<div class="container-base flex-s-between">
		<a href="/" class="text-xs font-bold md:text-xl">
			<img src="/get-french-classes-logo.png" alt="Get French Classes" class="w-12" />
		</a>

		{#if items && items.length > 0}
			<div class="hidden gap-4 [&_a]:py-2 [&_a]:font-medium [&_a]:rounded-lg lg:flex">
				{#each items as item (item.id)}
					<a class="hover:underline" href={item.link}>{item.title}</a>
				{/each}
			</div>
		{/if}

		<a href="/" class="text-xs action-base max-lg:ml-auto max-lg:mr-4">Get Started</a>

		<!-- MENU BUTTON / MENU -->
		<Sheet.Root>
			<Sheet.Trigger class="lg:hidden">
				<AlignJustify class="text-xl"></AlignJustify>
				<span class="sr-only">Toggle navigation menu</span>
			</Sheet.Trigger>

			<Sheet.Content class="p-0" side="right">
				<Sheet.Close>
					<a href="/" class="font-bold p-4 inline-block">Get French Classes</a>
				</Sheet.Close>

				{#if items && items.length > 0}
					<div
						class="flex flex-col [&>button]:text-start [&_a]:inline-block [&_a]:px-4 [&_a]:py-2 [&_a]:border-b-gray-200"
					>
						{#each items as item (item.id)}
							<Sheet.Close>
								<a class="hover:opacity-50" href={item.link}>{item.title}</a>
							</Sheet.Close>
						{/each}
					</div>
				{/if}
			</Sheet.Content>
		</Sheet.Root>
	</div>
</nav>
