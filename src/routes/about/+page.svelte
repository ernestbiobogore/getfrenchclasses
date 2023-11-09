<script>
	import { HelpingHand, Globe2, Lightbulb, File } from 'lucide-svelte';
</script>

<!-- Hero -->
<section class="p-3 md:py-20 container-base">
	<h1>Providing tools necessary to succeed</h1>
</section>

<!-- Stats Section -->
<section class="p-3 md:py-20 container-base grid grid-cols-2 gap-4">
	<div>
		<h2>40K</h2>
		<p class="text-sm">Learners empowered with knowledge</p>
	</div>

	<div>
		<h2>8</h2>
		<p class="text-sm">years of experience delivering courses</p>
	</div>

	<div>
		<h2>15K</h2>
		<p class="text-sm">hours of course content delivered</p>
	</div>

	<div>
		<h2>89</h2>
		<p class="text-sm">countries reached with our online courses</p>
	</div>
</section>

<!-- Values  -->
<section class="p-3 md:py-20 container-base">
	<div>
		<h1>We have strong values, because we care about our Students</h1>
		<p>
			We believe that by implementing strong values throughout our company, we can provide the best
			possible resources for students to reach their goals.
		</p>
	</div>

	<div>
		<div>
			<HelpingHand />
			<p>
				<span>We empower individuals </span> to make informed financial decisions and take control of
				their financial well-being.
			</p>
		</div>

		<div>
			<Globe2 />
			<p>
				We strive to make financial education <span>accessible to everyone</span> , regardless of their
				background, location or knowledge.
			</p>
		</div>

		<div>
			<Lightbulb />
			<p>
				We are committed to providing <span>high-quality courses</span> taught by experienced instructors
				and industry experts.
			</p>
		</div>

		<div>
			<File />
			<p>
				We uphold the <span>highest standards of integrity and ethics </span> in all our interactions
				and course content.
			</p>
		</div>
	</div>
</section>
<!-- testimony -->

<section class="flex flex-col items-center gap-20 py-24 container-sm sm:flex-row">
	<div class="basis-6/12">
		<img alt="" />
	</div>

	<blockquote class="space-y-6 basis-6/12">
		<div class="space-y-5">
			<p>
				“Our vision is to empower individuals with the tools they need to take control of their
				financial destinies. Through our courses, we aim to demystify finance and provide practical
				knowledge that can be applied to real-life situations. Join us on this journey to financial
				empowerment and discover the possibilities that lie ahead."
			</p>
		</div>

		<footer>John Roberts</footer>
	</blockquote>
</section>

<!-- before footer -->
<section>
	<h2>
		Equipping the next generation of individuals with the knowledge and skills needed to achieve
		financial freedom.
	</h2>

	<div class="p-12 space-y-5 bg-night rounded-2xl h-96">
		<h2 class="text-white text-[2.75rem]/[3.3rem] sm:w-5/12">
			Empower your financial future, today.
		</h2>
		<a href="/" class="action-white w-fit">View our courses</a>
	</div>
</section>
