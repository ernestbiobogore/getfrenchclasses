<script lang="ts">
	import "@fontsource-variable/inter";
	import "nprogress/nprogress.css";
	import "../app.css";

	import BiFacebook from "~icons/bi/facebook";
	import BiLinkedin from "~icons/bi/linkedin";
	import BiTwitter from "~icons/bi/twitter";
	import BiYoutube from "~icons/bi/youtube";
	import LucideInstagram from "~icons/lucide/instagram";

	import { navigating } from "$app/stores";
	import NProgress from "nprogress";

	NProgress.configure({ showSpinner: false, minimum: 0.16 });
	$: $navigating ? NProgress.start() : NProgress.done();
</script>

<slot />

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
