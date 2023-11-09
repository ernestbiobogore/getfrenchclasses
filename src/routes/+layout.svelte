<script>
	import '$styles/app.postcss';
	import '@fontsource-variable/inter';
	import DropdownMenu from '$lib/components/ui/DropdownMenu.svelte';

	import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-svelte';
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
			<a href="/about" class="px-3 py-2 font-medium rounded-lg hover:bg-gray-300">About</a>
			<a href="/" class="px-3 py-2 font-medium rounded-lg hover:bg-gray-300">FAQ's</a>
			<a href="/contact" class="px-3 py-2 font-medium rounded-lg hover:bg-gray-300">Contact</a>
		</nav>

		<a href="/" class="text-xs action-base">Get Started</a>
	</header>
</section>

<slot />

<footer class="pt-8 pb-6 space-y-8 container-base">
	<div class="flex flex-col gap-8 sm:gap-0 sm:flex-row pt-8 border-t-[0.5px] border-t-[#999]">
		<div class="space-y-5 basis-9/12">
			<a href="/" class="font-bold">Get French Classes</a>
			<p class="text-sm sm:w-4/12">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto inventore repellendus
				perferendis illum autem, deserunt dignissimos aut.
			</p>

			<div class="flex gap-2">
				<Instagram />
				<Facebook class="bg-night rounded-full stroke-transparent fill-[#f1ecec]" />
				<Twitter class="fill-night" />
				<Youtube class="bg-night fill-[#f1ecec]" />
				<Linkedin class="bg-night fill-[#f1ecec] stroke-0" />
			</div>
		</div>
		<div class="flex gap-5 md:gap-20 basis-3/12 flex-col md:flex-row">
			<div class="space-y-4">
				<p class="font-bold">Company</p>
				<ul class="space-y-2 text-sm">
					<li>Courses</li>
					<li>Features</li>
					<li>FAQs</li>
					<li>Reviews</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</div>

			<div class="space-y-4">
				<p class="font-bold">Account</p>
				<ul class="space-y-2 text-sm">
					<li>Login</li>
					<li>Sign Up</li>
					<li>Reset Password</li>
				</ul>
			</div>

			<div class="space-y-4">
				<p class="font-bold">Resources</p>
				<ul class="space-y-2 text-sm">
					<li>Login</li>
					<li>Sign Up</li>
					<li>Reset Password</li>
				</ul>
			</div>
		</div>
	</div>

	<div>
		<p class="text-xs">© 2023 Get French Classes.</p>
	</div>
</footer>
