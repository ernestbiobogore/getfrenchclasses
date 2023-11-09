<script lang="ts">
	import Accordion from '$lib/components/ui/Accordion.svelte';
	import AvatarsGroup from '$lib/components/ui/AvatarsGroup.svelte';
	import CourseCard from '$lib/components/ui/CourseCard.svelte';
	import Person1 from '$lib/images/person1.png';
	import SupportImage from '$lib/images/supportImage.png';
	import Teacher1 from '$lib/images/teacher1.png';
	import Teacher2 from '$lib/images/teacher2.png';
	import { getSampleAvatars } from '$lib/utils';

	import {
		ChevronRight,
		DownloadCloud,
		Gem,
		MessagesSquare,
		ScanEye,
		ThumbsUp,
		Video
	} from 'lucide-svelte';

	export let data;
</script>

<svelte:head>
	<title>Get French Classes</title>
</svelte:head>

<!-- Hero -->
<section class="p-3 md:py-20 container-base">
	<div class="w-full mx-auto space-y-8 md:w-8/12">
		<h1 class="text-center">Invest in a better future, invest in yourself.</h1>
		<p class="w-full mx-auto text-center md:w-7/12">
			Offering comprehensive online finance courses designed to empower individuals with the
			knowledge and skills needed to make informed financial decisions.
		</p>
		<div class="flex justify-center">
			<a href="/" class="action-base w-fit">View Courses</a>
		</div>

		<div class="flex items-center justify-center gap-4">
			<AvatarsGroup avatars={getSampleAvatars()} />
			<p class="text-xs">Trusted by over 2,000 people.</p>
		</div>
	</div>
</section>

<!-- Popular Courses -->
<section class="py-24 container-base space-y-11">
	<div class="flex items-center justify-between gap-x-7">
		<h2>Browse our most popular courses.</h2>

		<a
			href="/"
			class="flex items-center justify-end w-4/12 gap-2 px-3 py-2 text-xs rounded-lg sm:w-auto hover:bg-gray-300"
		>
			<span>View All</span>
			<div class="p-[0.125rem] bg-gray-900 rounded-full">
				<ChevronRight class="w-3 h-3 stroke-white" />
			</div>
		</a>
	</div>

	<div class="grid gap-8 grid-col-1 md:grid-cols-2 lg:grid-cols-3">
		{#each data.popularCourses as course (course.id)}
			<CourseCard {course} />
		{/each}
	</div>
</section>

<!-- New Courses -->
<section class="py-24 container-base space-y-11">
	<div class="flex items-center justify-between">
		<h2>New Courses.</h2>

		<a
			href="/"
			class="flex items-center justify-end w-4/12 gap-2 px-3 py-2 text-xs rounded-lg sm:w-auto hover:bg-gray-300"
		>
			<span>View All</span>
			<div class="p-[0.125rem] bg-gray-900 rounded-full">
				<ChevronRight class="w-3 h-3 stroke-white" />
			</div>
		</a>
	</div>

	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each data.newCourses as course (course.id)}
			<CourseCard {course} />
		{/each}
	</div>
</section>

<!-- Support -->
<section class="py-24 space-y-11">
	<div class="space-y-5 container-base">
		<h2 class="text-center">Everything you need, all in one place</h2>

		<p class="mx-auto text-sm text-center md:w-4/12">
			Experience the transformative power of Filearn as you gain financial confidence, build wealth
			and secure a better future.
		</p>

		<div class="flex justify-center">
			<a href="/" class="action-base w-fit">View Courses</a>
		</div>
	</div>

	<div class="grid grid-cols-2 gap-8 sm:gap-16 lg:grid-cols-3 container-sm">
		<div class="space-y-4">
			<MessagesSquare color="#5e62d1" />
			<p>
				Get <span class="font-bold">instant chat support</span> and guidance from our dedicated chat
				support team throughout your learning journey.
			</p>
		</div>

		<div class="space-y-4">
			<DownloadCloud color="#5e62d1" />
			<p>
				<span class="font-bold">Access the course offline</span> without needing internet, allowing you
				to learn anytime, anywhere, and at your own convenience.
			</p>
		</div>

		<div class="space-y-4">
			<Gem color="#5e62d1" />
			<p>
				<span class="font-bold">Made by industry experts</span> who curated the course content with their
				extensive knowledge and insights.
			</p>
		</div>

		<div class="space-y-4">
			<ScanEye color="#5e62d1" />
			<p>
				<span class="font-bold"> Enjoy unlimited, lifetime access</span> to course materials, empowering
				you to revisit and reinforce your knowledge at any time.
			</p>
		</div>

		<div class="space-y-4">
			<Video color="#5e62d1" />
			<p>
				<span class="font-bold">Interactive learning techniques</span> through lessons, quizzes, and
				practical exercises that enhance your learning experience.
			</p>
		</div>

		<div class="space-y-4">
			<ThumbsUp color="#5e62d1" />
			<p>
				<span class="font-bold">Beginner-friendly courses</span> that provide a supportive and easy-to-understand
				learning environment.
			</p>
		</div>
	</div>
</section>

<!-- Learn About Us  -->
<section class="flex flex-col items-center justify-between gap-24 py-24 sm:flex-row container-base">
	<div class="space-y-6 flex flex-col gap-4">
		<div class="space-y-5 md:max-w-1/2 w-full">
			<h2 class="md:tracking-tighter md:w-1/2">
				Curated to help you be smarter, more responsible financially.
			</h2>
			<p class="md:w-8/12">
				We use the latest technologies and tools backed by industry experts that will help secure
				you dream universities, jobs and set you up for the future.
			</p>
		</div>

		<a href="/" class="action-base w-fit">Learn About Us</a>
	</div>

	<div class="">
		<img src={SupportImage} alt="Support pic" loading="lazy" class="" />
	</div>
</section>

<section class="flex flex-col items-center gap-20 py-24 container-sm sm:flex-row">
	<div class="basis-6/12">
		<img src={Person1} alt="Person 1" />
	</div>

	<blockquote class="space-y-6 basis-6/12">
		<div class="space-y-5">
			<p class="text-2xl/[2.275rem] sm:text-[1.75rem]/[2.275rem] -tracking-[0.1rem]">
				"Best decision I ever made"
			</p>
			<p>
				Their beginner-friendly approach made it easy for me to grasp complex financial concepts.
				The chat support was incredibly helpful whenever I had questions. The course has been
				invaluable, best decision I ever made buying it!
			</p>
		</div>

		<footer>Emily Thompson</footer>
	</blockquote>
</section>

<section class="py-24 container-base space-y-11 flex flex-col md:flex-row items-center">
	<div class="space-y-3 md:space-y-6 md:w-1/2">
		<h2 class="md:text-7xl md:tracking-tighter">
			Streamline your career goals with a collection of our top courses.
		</h2>
		<a href="/" class="action-base w-fit md:text-base">Get started Today</a>
	</div>

	<div class="space-y-12">
		<div class="flex flex-row items-end justify-evenly">
			<p><span class="text-2xl">2000+</span> <br /> Enrolled Students</p>
			<img class="w-5/12" src={Teacher1} alt="" />
		</div>

		<div class="flex flex-row items-center justify-evenly">
			<img class="w-5/12" src={Teacher2} alt="" />
			<p><span class="text-2xl"> 87</span> <br /> Available Courses</p>
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="py-24 text-center space-y-11 container-base">
	<div class="space-y-5">
		<h2>You have questions, we have the answers.</h2>

		<p class="mx-auto text-sm md:w-4/12">
			If you can’t find the answer to your question below, please get in
			<a class="underline" href="/">contact</a> with us today
		</p>
	</div>

	<div class="mx-auto md:w-6/12">
		<Accordion
			itemIds={Array.from({ length: 7 }, (_, i) => `item-${i + 1}`)}
			titles={Array.from(
				{ length: 7 },
				(_) => `Lorem ipsum dolor sit amet consectetur. Fermentum.`
			)}
			contents={Array.from(
				{ length: 7 },
				(_) => `Lorem ipsum dolor sit amet consectetur. Bibendum in ultrices ornare ut. Mattis nisl`
			)}
		/>
	</div>
</section>

<!-- CTA -->
<section class="container-base">
	<div class="p-12 space-y-5 bg-night rounded-2xl h-96 m-auto md:w-9/12">
		<h2 class="text-white text-[2.75rem]/[3.3rem] sm:w-5/12">
			Empower your financial future, today.
		</h2>
		<a href="/" class="action-white w-fit">View our courses</a>
	</div>
</section>
