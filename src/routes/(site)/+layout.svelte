<script lang="ts">
	import * as Sheet from "$shadcn/sheet";
	import AlignJustify from "~icons/lucide/align-justify";
</script>

<nav class="py-4 sticky top-0 z-10 bg-magnolia border-b">
	<div class="container-base flex-s-between">
		<a href="/" class="text-xs font-bold md:text-xl">
			<img src="/get-french-classes-logo.png" alt="Get French Classes" class="w-12" />
		</a>

		<div class="hidden gap-4 [&_a]:py-2 [&_a]:font-medium [&_a]:rounded-lg lg:flex">
			<a class="hover:underline" href="/courses">Courses</a>
			<a class="hover:underline" href="/tutors">Tutors</a>
			<a class="hover:underline" href="/about">About</a>
			<a class="hover:underline" href="/#faq">FAQ's</a>
			<a class="hover:underline" href="/blog">Blog</a>
			<a class="hover:underline" href="/wall-of-love">Wall of Love</a>
			<a class="hover:underline" href="/resources">Resources</a>
			<a class="hover:underline" href="/business">Business</a>
			<a class="hover:underline" href="/mullah">Affiliate</a>
			<a class="hover:underline" href="/contact">Contact</a>
		</div>

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

				<div
					class="flex flex-col [&>button]:text-start [&_a]:inline-block [&_a]:px-4 [&_a]:py-2 [&_a]:border-b-gray-200"
				>
					<Sheet.Close><a class="hover:opacity-50" href="/courses">Courses</a></Sheet.Close>
					<Sheet.Close><a class="hover:opacity-50" href="/tutors">Tutors</a></Sheet.Close>
					<Sheet.Close><a class="hover:opacity-50" href="/about">About</a></Sheet.Close>
					<Sheet.Close><a class="hover:opacity-50" href="/#faq">FAQ's</a></Sheet.Close>
					<Sheet.Close><a class="hover:opacity-50" href="/blog">Blog</a></Sheet.Close>
					<Sheet.Close
						><a class="hover:opacity-50" href="/wall-of-love">Wall of Love</a></Sheet.Close
					>
					<Sheet.Close><a class="hover:opacity-50" href="/resources">Resources</a></Sheet.Close>
					<Sheet.Close><a class="hover:opacity-50" href="/business">Business</a></Sheet.Close>
					<Sheet.Close><a class="hover:opacity-50" href="/mullah">Affiliate</a></Sheet.Close>
					<a href="/contact">Contact</a>
				</div>
			</Sheet.Content>
		</Sheet.Root>
	</div>
</nav>

<slot />
