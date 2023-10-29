<script lang="ts">
	import AvatarsGroup from '$lib/components/ui/AvatarsGroup.svelte';
	import CourseCard from '$lib/components/ui/CourseCard.svelte';
	import Person1 from '$lib/images/person1.png';
	import SupportImage from '$lib/images/supportImage.png';
	import Teacher1 from '$lib/images/teacher1.png';
	import Teacher2 from '$lib/images/teacher2.png';
	import { getSampleAvatars } from '$lib/utils';
	import { createAccordion, melt } from '@melt-ui/svelte';
	import {
		ChevronRight,
		DownloadCloud,
		Gem,
		MessagesSquare,
		Minus,
		Plus,
		ScanEye,
		ThumbsUp,
		Video
	} from 'lucide-svelte';
	import { slide } from 'svelte/transition';

	export let data;

	const {
		elements: { content, item: accordionItem, trigger: accordionTrigger },
		helpers: { isSelected }
	} = createAccordion({
		defaultValue: 'item-1'
	});
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

	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
<section class="py-24 container-base space-y-11">
	<div class="flex flex-col items-center gap-4 text-center">
		<h2>Everything you need, all in one place</h2>
		<p>
			Experience the transformative power of Filearn as you gain financial confidence, build wealth
			and secure a better future.
		</p>

		<a href="/" class="action-base w-fit">View Courses</a>
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
<section class="flex flex-col items-center justify-between gap-24 py-24 sm:flex-row container-base">
	<div class="space-y-6">
		<div class="space-y-5">
			<h2>Curated to help you be smarter, more responsible financially.</h2>
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

<section class="py-24 container-base space-y-11">
	<div>
		<div class="flex flex-col gap-6">
			<img src={Person1} alt="" />
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
			<img class="w-10 h-10 rounded-full" src={Person1} alt="" />
			<span class="text-xs">Emily Thompson <br /> Purchase the Financial Foundations Course. </span>
		</div>
		<div class="flex flex-row items-center justify-around">
			<img class="w-10 h-10 rounded-full" src={Person1} alt="" />
			<span class="text-xs">Emily Thompson <br /> Purchase the Financial Foundations Course. </span>
		</div>
		<div class="flex flex-row items-center justify-around">
			<img class="w-10 h-10 rounded-full" src={Person1} alt="" />
			<span class="text-xs">Emily Thompson <br /> Purchase the Financial Foundations Course. </span>
		</div>
	</div>
</section>

<section class="py-24 container-base space-y-11">
	<div class="space-y-3">
		<h2>Streamline your career goals with a collection of our top courses.</h2>
		<a href="/" class="action-base w-fit">Get started Today</a>
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
<section class="py-24 text-center container-base space-y-11">
	<div class="space-y-5">
		<h2>You have questions, we have the answers.</h2>

		<p class="mx-auto text-sm md:w-4/12">
			If you can’t find the answer to your question below, please get in
			<a class="underline" href="/">contact</a> with us today
		</p>
	</div>

	<div class="mx-auto space-y-4 md:w-6/12">
		{#each Array(6) as _, i}
			{@const id = `item-${i + 1}`}
			<div use:melt={$accordionItem(id)} class="px-6 py-4 space-y-4 bg-white rounded-xl">
				<h3>
					<button
						use:melt={$accordionTrigger(id)}
						class="flex justify-between w-full text-base font-medium"
					> 
						<span class="text-left basis-11/12"
							>Lorem ipsum dolor sit amet consectetur. Fermentum.</span
						>

						{#if $isSelected(id)}
							<Minus />
						{:else}
							<Plus />
						{/if}
					</button>
				</h3>
				{#if $isSelected(id)}
					<div use:melt={$content(id)} transition:slide>
						<p class="text-left">
							Lorem ipsum dolor sit amet consectetur. Bibendum in ultrices ornare ut. Mattis nisl
							nulla mattis euismod dictum egestas id eu ac. Sit dolor ut fermentum egestas phasellus
							egestas.
						</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>

<!-- before footer -->
<section class="py-24 container-base space-y-11">
	<div class="bg-black">
		<a href="/" class="action-base w-fit">Get started Today</a>
	</div>
</section>
