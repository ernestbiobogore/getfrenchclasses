<script>
	import * as Card from "$shadcn/card";

	import File from "~icons/lucide/file";
	import Globe2 from "~icons/lucide/globe-2";
	import HelpingHand from "~icons/lucide/helping-hand";
	import Lightbulb from "~icons/lucide/lightbulb";

	import CtaTestimonial from "$dato/blocks/CtaTestimonial.svelte";
	import Teacher5 from "$lib/images/Teacher5.png";
	import SupportImage from "$lib/images/supportImage.png";
	import Teacher1 from "$lib/images/teacher1.png";
	import Teacher2 from "$lib/images/teacher2.png";
	import Teacher3 from "$lib/images/teacher3.png";
	import Teacher4 from "$lib/images/teacher4.png";

	export let data;
</script>

<!-- Hero -->
<section class="p-3 container-base space-y-7 md:py-20">
	<h1 class="text-4xl tracking-normal text-center">Providing the tools necessary to succeed</h1>

	<div class="hidden p-4 images md:block">
		<div class="items-center about-hero-images">
			<img src={Teacher1} alt="Teacher 1" class="col-span-1 row-span-2" />
			<img src={SupportImage} alt="Support" class="center-image" />
			<img src={Teacher3} alt="Teacher 3" class="justify-end col-span-1 row-span-1" />
			<img src={Teacher2} alt="Teacher 2" class="justify-center col-span-1 row-span-1" />
			<img src={Teacher4} alt="Teacher 4" class="col-span-1 row-span-1" />
		</div>
	</div>
</section>

<!-- Stats Section -->
<section class="grid grid-cols-2 gap-4 p-3 container-base md:py-20 lg:grid-cols-4 lg:px-32">
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
<section class="flex flex-col gap-6 p-3 py-20 container-base md:flex-row lg:px-28">
	<div class="flex-col justify-center md:flex md:w-1/2">
		<h3 class="font-semibold md:text-5xl">
			We have strong values, because we care about our Students
		</h3>
		<p class="text-sm pt-7">
			We believe that by implementing strong values throughout our company, we can provide the best
			possible resources for students to reach their goals.
		</p>
	</div>

	<div class="flex flex-col py-12 gap-7 md:w-1/2">
		<div class="flex flex-col gap-4">
			<HelpingHand class="text-brand-primary" />
			<p>
				<span>We empower individuals </span> to make informed financial decisions and take control of
				their financial well-being.
			</p>
		</div>

		<div class="flex flex-col gap-4">
			<Globe2 class="text-brand-primary" />
			<p>
				We strive to make financial education <span>accessible to everyone</span> , regardless of their
				background, location or knowledge.
			</p>
		</div>

		<div class="flex flex-col gap-4">
			<Lightbulb class="text-brand-primary" />
			<p>
				We are committed to providing <span>high-quality courses</span> taught by experienced instructors
				and industry experts.
			</p>
		</div>

		<div class="flex flex-col gap-4">
			<File class="text-brand-primary" />
			<p>
				We uphold the <span>highest standards of integrity and ethics </span> in all our interactions
				and course content.
			</p>
		</div>
	</div>
</section>

<!-- MEET THE TEAM -->
<section class="container-base">
	<div class="space-y-3 text-center">
		<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h2>
		<p
			class="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
		>
			Our team of language experts and instructors are dedicated to providing the best learning
			experience.
		</p>
	</div>

	<div class="grid items-start justify-center w-full grid-cols-1 gap-6 py-10 md:grid-cols-3">
		{#each [...Array(6)] as _}
			<Card.Root class="rounded-none">
				<Card.Content class="gap-6 p-4 flex-s-start">
					<img src={Teacher1} alt="Teacher1" class="rounded-full size-32" />
					<div>
						<h3 class="text-xl font-semibold">John Roberts</h3>
						<p class="text-gray-500">Founder & CEO</p>
					</div>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
</section>

<!-- testimony -->
<section class="flex flex-col items-center gap-20 py-24 container-sm sm:flex-row">
	<div class="basis-6/12">
		<img src={Teacher5} alt="Teacher5" />
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
<div class="container-base">
	<h2 class="w-2/3 py-20 text-4xl tracking-tight">
		Equipping the next generation of individuals with the knowledge and skills needed to achieve
		financial freedom.
	</h2>
</div>

{#if data.testimonial}
	<section class="py-20">
		<CtaTestimonial testimonial={data.testimonial} />
	</section>
{/if}
