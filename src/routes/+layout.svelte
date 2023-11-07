<script>
	import '$styles/app.postcss';
	import '@fontsource-variable/inter';
	import DropdownMenu from '$lib/components/ui/DropdownMenu.svelte';
</script>

<section>
	<div class="py-2 bg-indigo-600 md:py-4">
		<p class=" text-[11px] md:text-sm text-center text-white">
			Get a free starter guide when you sign up for any of our <a
				href="/"
				class="font-bold underline">courses</a
			>.
		</p>
	</div>

	<header class="flex items-center justify-between py-8 container-base">
		<a href="/" class="text-xs font-bold md:text-xl">Get French Classes</a>
		<div class="md:hidden">
			<DropdownMenu />
		</div>

		<nav class="hidden py-4 space-x-2 md:block">
			<a href="/" class="px-3 py-2 font-medium rounded-lg hover:bg-gray-300">Courses</a>
			<a href="/" class="px-3 py-2 font-medium rounded-lg hover:bg-gray-300">About</a>
			<a href="/" class="px-3 py-2 font-medium rounded-lg hover:bg-gray-300">FAQ's</a>
			<a href="/" class="px-3 py-2 font-medium rounded-lg hover:bg-gray-300">Contact</a>
		</nav>

		<a href="/" class="text-xs action-base">Get Started</a>
	</header>
</section>

<slot />
