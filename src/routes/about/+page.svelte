<script>
	import { HelpingHand, Globe2, Lightbulb, File } from 'lucide-svelte';
	import Person1 from '$lib/images/person1.png';
	import SupportImage from '$lib/images/supportImage.png';
	import Teacher1 from '$lib/images/teacher1.png';
	import Teacher2 from '$lib/images/teacher2.png';
	import Teacher3 from '$lib/images/teacher3.png';
	import Teacher4 from '$lib/images/teacher4.png';
	import Circle1 from '$lib/images/circle1.png';
	import Circle2 from '$lib/images/circle2.png';
	import Triangle from '$lib/images/triangle.png';
</script>

<!-- Hero -->
<section class="p-3 md:py-20 container-base">
	<h1 class="tracking-normal text-4xl text-center">Providing the tools necessary to succeed</h1>

	<div class="images">
		<div class="grid grid-cols-3">
			<img src={Teacher1} alt="Teacher 1" class="" />
			<img src={Teacher3} alt="Teacher 3" class="order-last" />
			<img src={SupportImage} alt="Support" class="order-3" />
			<img src={Teacher2} alt="Teacher 2" class="" />
			<img src={Teacher4} alt="Teacher 4" />
		</div>
	</div>
</section>

<!-- Stats Section -->
<section class="p-3 md:py-20 container-base grid grid-cols-2 gap-4 lg:grid-cols-4 lg:px-32">
	<div class="text-center">
		<h2>40K</h2>
		<p class="text-sm">Learners empowered with knowledge</p>
	</div>

	<div class="text-center">
		<h2>8</h2>
		<p class="text-sm">years of experience delivering courses</p>
	</div>

	<div class="text-center">
		<h2>15K</h2>
		<p class="text-sm">hours of course content delivered</p>
	</div>

	<div class="text-center">
		<h2>89</h2>
		<p class="text-sm">countries reached with our online courses</p>
	</div>
</section>

<!-- Values  -->
<section class="p-3 lg:px-28 py-20 container-base flex flex-col md:flex-row gap-6">
	<div class="md:flex flex-col justify-center md:w-1/2">
		<h3 class="font-semibold md:text-5xl">
			We have strong values, because we care about our Students
		</h3>
		<p class="text-sm pt-7">
			We believe that by implementing strong values throughout our company, we can provide the best
			possible resources for students to reach their goals.
		</p>
	</div>

	<div class="py-12 flex flex-col gap-7 md:w-1/2">
		<div class="flex flex-col gap-4">
			<HelpingHand color="#5e62d1" />
			<p>
				<span>We empower individuals </span> to make informed financial decisions and take control of
				their financial well-being.
			</p>
		</div>

		<div class="flex flex-col gap-4">
			<Globe2 color="#5e62d1" />
			<p>
				We strive to make financial education <span>accessible to everyone</span> , regardless of their
				background, location or knowledge.
			</p>
		</div>

		<div class="flex flex-col gap-4">
			<Lightbulb color="#5e62d1" />
			<p>
				We are committed to providing <span>high-quality courses</span> taught by experienced instructors
				and industry experts.
			</p>
		</div>

		<div class="flex flex-col gap-4">
			<File color="#5e62d1" />
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
<section class="py-24 container-base">
	<h2 class="py-20 tracking-tight text-4xl w-2/3">
		Equipping the next generation of individuals with the knowledge and skills needed to achieve
		financial freedom.
	</h2>

	<section class="container-base relative">
		<div class=" m-auto space-y-5 bg-night rounded-2xl h-96 w-full">
			<div class="p-12 md:p-8 md:w-[34rem] flex flex-col gap-10">
				<h2
					class="text-white md:text-[2.75rem]/[3.3rem] text-2xl sm:break-words sm:w-5/12 md:w-full"
				>
					Empower your financial future, today.
				</h2>
				<a href="/" class="action-white w-fit">View our courses</a>
			</div>
			<img
				src={Circle1}
				alt="Circle 1"
				class=" absolute w-16 h-16 bottom-3 left-20 md:left-[28rem] md:top-20 lg:left-[50rem] md:h-20 md:w-20"
			/>
			<img
				src={Circle2}
				alt="Circle 2"
				class=" absolute w-20 h-20 bottom-28 right-24 md:top-48 md:right-36 md:w-28 md:h-28 lg:right-48 lg:top-40"
			/>
			<img
				src={Triangle}
				alt="Triangle"
				class=" absolute w-24 h-28 bottom-0 right-4 md:w-40 md:h-40 md:right-4"
			/>
		</div>
	</section>
</section>
