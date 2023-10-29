<script lang="ts">
	import AvatarsGroup from '$lib/components/ui/AvatarsGroup.svelte';
	import ArrowRightIcon from '$lib/icons/ArrowRightIcon.svelte';
	import BarChartIcon from '$lib/icons/BarChartIcon.svelte';
	import ClockIcon from '$lib/icons/ClockIcon.svelte';
	import PenSquareIcon from '$lib/icons/PenSquareIcon.svelte';
	import { DownloadCloud, Gem, MessagesSquare, ScanEye, ThumbsUp, Video } from 'lucide-svelte';

	export let data;

	const getSampleAvatars = (n = 3) => {
		return Array.from({ length: n }, (_) => {
			const i = Math.floor(Math.random() * 100);

			return {
				src: `https://picsum.photos/100/100?random=${i + 1}`,
				alt: `Avatar ${i + 1}`
			};
		});
	};

	const getSampleCoursesData = (n = 3) => {
		return Array.from({ length: n }, (_) => {
			const i = Math.floor(Math.random() * 100);

			return {
				title: 'Lorem ipsum dolor sit amet consectetur',
				avatar: {
					src: `https://picsum.photos/100/100?random=${i + 1}`,
					alt: `Avatar ${i + 1}`
				},
				duration: Math.floor(Math.random() * 100),
				sections: Math.floor(Math.random() * 100),
				level: 'Expert',
				description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
				quod, voluptatum, quibusdam, quia voluptates.`,
				price: Math.floor(Math.random() * 100),
				enrolled: Math.floor(Math.random() * 100)
			};
		});
	};
</script>

<svelte:head>
	<title>Get French Classes</title>
</svelte:head>

<!-- Header -->
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
		<nav class="hidden py-4 space-x-2 md:block">
			<a href="/" class="px-3 py-2 font-medium rounded-lg hover:bg-gray-300">Courses</a>
			<a href="/" class="px-3 py-2 font-medium rounded-lg hover:bg-gray-300">About</a>
			<a href="/" class="px-3 py-2 font-medium rounded-lg hover:bg-gray-300">FAQ's</a>
			<a href="/" class="px-3 py-2 font-medium rounded-lg hover:bg-gray-300">Contact</a>
		</nav>

		<a href="/" class="text-xs action-base md:text-xl">Get Started</a>
	</header>
</section>

<!-- Hero -->
<section class="p-3 md:py-20 container-base">
	<div class="w-full mx-auto space-y-8 md:w-8/12">
		<h1
			class="font-medium text-center text-4xl md:text-[4.375rem]/[1.2] tracking-normal md:-tracking-[0.25rem]"
		>
			Invest in a better future, invest in yourself.
		</h1>
		<p class="w-full mx-auto text-center md:w-7/12">
			Offering comprehensive online finance courses designed to empower individuals with the
			knowledge and skills needed to make informed financial decisions.
		</p>
		<div class="flex justify-center">
			<a href="/" class="text-xs action-base w-fit">View Courses</a>
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
		<h2 class="w-3/6 text-2xl tracking-tight">Browse our most popular courses.</h2>

		<a href="/" class="flex items-center gap-2 px-3 py-2 text-xs rounded-lg hover:bg-gray-300">
			<span>View All</span>
			<div class="p-[0.125rem] bg-gray-900 rounded-full">
				<ArrowRightIcon class="w-3 h-3 stroke-white" />
			</div>
		</a>
	</div>

	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each data.popularCourses as course (course.id)}
			<div class="p-8 space-y-4 bg-white rounded-2xl">
				<img
					src={course.seo?.image?.url}
					alt={course.seo?.image?.alt}
					width="310"
					height="210"
					loading="lazy"
					class="w-[22.5rem] h-[13.125rem] rounded-xl"
				/>

				<h3>{course.name}</h3>

				<div class="flex justify-between">
					<div class="flex items-center gap-2">
						<ClockIcon class="w-4 h-4 stroke-gray-400" />
						<p class="text-xs text-gray-500">{course.duration} hours</p>
					</div>

					<div class="flex items-center gap-2">
						<PenSquareIcon class="w-4 h-4 stroke-gray-400" />
						<p class="text-xs text-gray-500">{course.numberOfSections} sections</p>
					</div>

					<div class="flex items-center gap-2">
						<BarChartIcon class="w-4 h-4 stroke-gray-400" />
						<p class="text-xs text-gray-500">{course.level} level</p>
					</div>
				</div>

				<p>
					{course.seo?.description}
				</p>

				<p>
					<span class="text-2xl">$ {course.price} USD</span>
					<span class="text-sm text-gray-500">excl. taxes </span>
				</p>

				<div class="flex justify-between">
					<a href="/" class="text-xs action-base w-fit">Enroll Now</a>

					<div class="flex items-center gap-2">
						<AvatarsGroup avatars={getSampleAvatars()} loading="lazy" />
						<p class="text-xs">{course.numberOfEnrolledStudents} enrolled.</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- New Courses -->
<section class="py-24 container-base space-y-11">
	<div class="flex items-center justify-between">
		<h2 class="w-3/6 text-2xl tracking-tight">New Courses.</h2>

		<a href="/" class="flex items-center gap-2 px-3 py-2 text-xs rounded-lg hover:bg-gray-300">
			<span>View All</span>
			<div class="p-[0.125rem] bg-gray-900 rounded-full">
				<ArrowRightIcon class="w-3 h-3 stroke-white" />
			</div>
		</a>
	</div>

	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each data.newCourses as course (course.id)}
			<div class="p-8 space-y-4 bg-white rounded-2xl">
				<img
					src={course.seo?.image?.url}
					alt={course.seo?.image?.alt}
					width="310"
					height="210"
					loading="lazy"
					class="w-[22.5rem] h-[13.125rem] rounded-xl"
				/>

				<h3>{course.name}</h3>

				<div class="flex justify-between">
					<div class="flex items-center gap-2">
						<ClockIcon class="w-4 h-4 stroke-gray-400" />
						<p class="text-xs text-gray-500">{course.duration} hours</p>
					</div>

					<div class="flex items-center gap-2">
						<PenSquareIcon class="w-4 h-4 stroke-gray-400" />
						<p class="text-xs text-gray-500">{course.numberOfSections} sections</p>
					</div>

					<div class="flex items-center gap-2">
						<BarChartIcon class="w-4 h-4 stroke-gray-400" />
						<p class="text-xs text-gray-500">{course.level} level</p>
					</div>
				</div>

				<p>
					{course.seo?.description}
				</p>

				<p>
					<span class="text-2xl">$ {course.price} USD</span>
					<span class="text-sm text-gray-500">excl. taxes </span>
				</p>

				<div class="flex justify-between">
					<a href="/" class="text-xs action-base w-fit">Enroll Now</a>

					<div class="flex items-center gap-2">
						<AvatarsGroup avatars={getSampleAvatars()} loading="lazy" />
						<p class="text-xs">{course.numberOfEnrolledStudents} enrolled.</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- Support -->
<section class="py-24 container-base space-y-11">
	<div class="flex flex-col items-center gap-4 text-center">
		<h2 class="text-2xl -tracking-[.1rem]">Everything you need, all in one place</h2>
		<p class="text-sm">
			Experience the transformative power of Filearn as you gain financial confidence, build wealth
			and secure a better future.
		</p>

		<a href="/" class="text-xs action-base w-fit">View Courses</a>
	</div>

	<div class="grid grid-cols-2 grid-rows-3 gap-4">
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
<section class="py-24 container-base space-y-11">
	<div class="space-y-6">
		<h2 class="text-2xl -tracking-[.1rem]">
			Curated to help you be smarter, more responsible financially.
		</h2>
		<p class="text-sm">
			We use the latest technologies and tools backed by industry experts that will help secure you
			dream universities, jobs and set you up for the future.
		</p>
		<a href="/" class="text-xs action-base w-fit">Learn About Us</a>
	</div>
	<div class="p-2">
		<img src="./src/lib/images/supportImage.png" alt="" />
	</div>

	<hr class="h-0.5 bg-black" />
</section>

<section class="py-24 container-base space-y-11">
	<div>
		<div class="flex flex-col gap-6">
			<img src="./src/lib/images/person1.png" alt="" />
			<blockquote class="font-medium">"Best decision I ever made"</blockquote>
			<p class="text-sm">
				Their beginner-friendly approach made it easy for me to grasp complex financial concepts.
				The chat support was incredibly helpful whenever I had questions. The course has been
				invaluable, best decision I ever made buying it!
			</p>
			<span class="text-xs">Emily Thompson <br /> Purchase the Financial Foundations Course. </span>
		</div>
	</div>

	<div class="flex flex-col gap-6">
		<div class="flex flex-row items-center justify-around">
			<img class="w-10 h-10 rounded-full" src="./src/lib/images/person1.png" alt="" />
			<span class="text-xs">Emily Thompson <br /> Purchase the Financial Foundations Course. </span>
		</div>
		<div class="flex flex-row items-center justify-around">
			<img class="w-10 h-10 rounded-full" src="./src/lib/images/person1.png" alt="" />
			<span class="text-xs">Emily Thompson <br /> Purchase the Financial Foundations Course. </span>
		</div>
		<div class="flex flex-row items-center justify-around">
			<img class="w-10 h-10 rounded-full" src="./src/lib/images/person1.png" alt="" />
			<span class="text-xs">Emily Thompson <br /> Purchase the Financial Foundations Course. </span>
		</div>
	</div>
</section>

<section class="py-24 container-base space-y-11">
	<div class="space-y-3">
		<h2 class="text-2xl tracking-tighter">
			Streamline your career goals with a collection of our top courses.
		</h2>
		<a href="/" class="text-xs action-base w-fit">Get started Today</a>
	</div>

	<div class="space-y-12">
		<div class="flex flex-row items-end justify-evenly">
			<p><span class="text-2xl">2000+</span> <br /> Enrolled Students</p>
			<img class="w-5/12" src="./src/lib/images/teacher1.png" alt="" />
		</div>

		<div class="flex flex-row items-center justify-evenly">
			<img class="w-5/12" src="./src/lib/images/teacher2.png" alt="" />
			<p><span class="text-2xl"> 87</span> <br /> Available Courses</p>
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="py-24 text-center container-base space-y-11">
	<h2 class="text-2xl tracking-tight">You questions, we have the answers.</h2>

	<p class="text-sm">
		If you can’t find the answer to your question below, please get in
		<a class="underline" href="/">Contact</a> with us today
	</p>

	<div>
		<div class="p-4 bg-white rounded-md">
			<a class="flex flex-row items-center justify-evenly" href="/">
				<h2 class="text-sm tracking-tight">Can I enroll in multiple courses at once?</h2>
				<span>&#43;</span>
			</a>

			<p class="hidden">
				Absolutely! You can enroll in multiple courses simultaneously. Each course is self-paced,
				allowing you to progress through the material at your own speed. However, we recommend
				focusing on one course at a time to ensure you absorb the content effectively.
			</p>
		</div>
	</div>
</section>

<!-- before footer -->
<section class="py-24 container-base space-y-11">
	<div class="bg-black">
		<a href="/" class="text-xs action-base w-fit">Get started Today</a>
	</div>
</section>
