<script lang="ts">
	import AlignJustify from "~icons/lucide/align-justify";
	import { Popover } from "bits-ui";
	import { flyAndScale } from "$lib/utils";
</script>

<nav class="py-4 sticky top-0 z-10 bg-magnolia border-b">
	<div class="container-base flex-s-between">
		<a href="/" class="text-xs font-bold md:text-xl">Get French Classes</a>

		<!-- MENU BUTTON / MENU -->
		<Popover.Root>
			<Popover.Trigger class="lg:hidden">
				<AlignJustify class="text-xl"></AlignJustify>
				<span class="sr-only">Open Popover</span>
			</Popover.Trigger>

			<Popover.Content
				class="w-full max-w-[229px] bg-white rounded-xl overflow-hidden z-10 shadow-2xl"
				transition={flyAndScale}
				sideOffset={16}
			>
				<div class="flex flex-col [&_a]:px-3 [&_a]:py-2 [&_a]:border-b-gray-200">
					<a class="border-b hover:bg-gray-100" href="/courses">Courses</a>
					<a class="border-b hover:bg-gray-100" href="/about">About</a>
					<a class="border-b hover:bg-gray-100" href="/#faq">FAQ's</a>
					<a class="border-b hover:bg-gray-100" href="/blog">Blog</a>
					<a class="border-b hover:bg-gray-100" href="/wall-of-love">Wall of Love</a>
					<a class="border-b hover:bg-gray-100" href="/resources">Resources</a>
					<a class="border-b hover:bg-gray-100" href="/business">Business</a>
					<a class="border-b hover:bg-gray-100" href="/mullah">Affiliate</a>
					<a href="/contact">Contact</a>
				</div>
			</Popover.Content>
		</Popover.Root>

		<div class="hidden gap-4 [&_a]:py-2 [&_a]:font-medium [&_a]:rounded-lg lg:flex">
			<a class="hover:underline" href="/courses">Courses</a>
			<a class="hover:underline" href="/about">About</a>
			<a class="hover:underline" href="/#faq">FAQ's</a>
			<a class="hover:underline" href="/blog">Blog</a>
			<a class="hover:underline" href="/wall-of-love">Wall of Love</a>
			<a class="hover:underline" href="/resources">Resources</a>
			<a class="hover:underline" href="/business">Business</a>
			<a class="hover:underline" href="/mullah">Affiliate</a>
			<a class="hover:underline" href="/contact">Contact</a>
		</div>

		<a href="/" class="text-xs action-base">Get Started</a>
	</div>
</nav>

<slot />
