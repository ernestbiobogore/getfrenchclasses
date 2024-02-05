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
			<Popover.Trigger class="md:hidden">
				<AlignJustify class="text-xl"></AlignJustify>
				<span class="sr-only">Open Popover</span>
			</Popover.Trigger>

			<Popover.Content
				class="w-full max-w-[229px] bg-white rounded-xl z-10 shadow-2xl"
				transition={flyAndScale}
				sideOffset={16}
			>
				<div class="flex flex-col [&_a]:px-3 [&_a]:py-2 [&_a]:border-b-gray-200">
					<a class="b-b" href="/courses">Courses</a>
					<a class="b-b" href="/about">About</a>
					<a class="b-b" href="/#faq">FAQ's</a>
					<a class="b-b" href="/blog">Blog</a>
					<a class="b-b" href="/wall-of-love">Wall of Love</a>
					<a class="b-b" href="/resources">Resources</a>
					<a href="/contact">Contact</a>
				</div>
			</Popover.Content>
		</Popover.Root>

		<div class="hidden [&_a]:px-3 [&_a]:py-2 [&_a]:font-medium [&_a]:rounded-lg md:block">
			<a class="hover:bg-gray-300" href="/courses">Courses</a>
			<a class="hover:bg-gray-300" href="/about">About</a>
			<a class="hover:bg-gray-300" href="/#faq">FAQ's</a>
			<a class="hover:bg-gray-300" href="/blog">Blog</a>
			<a class="hover:bg-gray-300" href="/wall-of-love">Wall of Love</a>
			<a class="hover:bg-gray-300" href="/resources">Resources</a>
			<a class="hover:bg-gray-300" href="/contact">Contact</a>
		</div>

		<a href="/" class="text-xs action-base">Get Started</a>
	</div>
</nav>

<slot />
