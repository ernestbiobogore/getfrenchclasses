<script lang="ts">
	import AvatarsGroup from '$lib/components/ui/AvatarsGroup.svelte';
	import ArrowRightIcon from '$lib/icons/ArrowRightIcon.svelte';
	import BarChartIcon from '$lib/icons/BarChartIcon.svelte';
	import ClockIcon from '$lib/icons/ClockIcon.svelte';
	import DatabaseIcon from '$lib/icons/DatabaseIcon.svelte';
	import PenSquareIcon from '$lib/icons/PenSquareIcon.svelte';

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
	<div class=" py-2 md:py-4 bg-indigo-600">
		<p class=" text-[11px] md:text-sm text-center text-white">
			Get a free starter guide when you sign up for any of our <a
				href="/"
				class="font-bold underline">courses</a
			>.
		</p>
	</div>

	<header class="flex items-center justify-between py-8 container-base">
		<a href="/" class="text-xs md:text-xl font-bold">Get French Classes</a>
		<nav class="py-4 space-x-2 hidden md:block">
			<a href="/" class="px-3 py-2 font-medium rounded-lg hover:bg-gray-300">Courses</a>
			<a href="/" class="px-3 py-2 font-medium rounded-lg hover:bg-gray-300">About</a>
			<a href="/" class="px-3 py-2 font-medium rounded-lg hover:bg-gray-300">FAQ's</a>
			<a href="/" class="px-3 py-2 font-medium rounded-lg hover:bg-gray-300">Contact</a>
		</nav>

		<a href="/" class="action-base text-xs md:text-xl">Get Started</a>
	</header>
</section>

<!-- Hero -->
<section class=" p-3 md:py-20 container-base">
	<div class="w-full md:w-8/12 mx-auto space-y-8">
		<h1
			class="font-medium text-center text-4xl md:text-[4.375rem]/[1.2] tracking-normal md:-tracking-[0.25rem]"
		>
			Invest in a better future, invest in yourself.
		</h1>
		<p class=" w-full md:w-7/12 mx-auto text-center">
			Offering comprehensive online finance courses designed to empower individuals with the
			knowledge and skills needed to make informed financial decisions.
		</p>
		<div class="flex justify-center">
			<a href="/" class="action-base w-fit text-xs">View Courses</a>
		</div>

		<div class="flex items-center justify-center gap-4">
			<AvatarsGroup avatars={getSampleAvatars()} />
			<p class="text-xs">Trusted by over 2,000 people.</p>
		</div>
	</div>
</section>

<!-- Popular Courses -->
<section class="py-24 container-base space-y-11">
	<div class="flex items-center gap-x-7 justify-between">
		<h2 class="text-2xl tracking-tight w-3/6">Browse our most popular courses.</h2>

		<a href="/" class="flex items-center gap-2 px-3 py-2 text-xs rounded-lg hover:bg-gray-300">
			<span>View All</span>
			<div class="p-[0.125rem] bg-gray-900 rounded-full">
				<ArrowRightIcon class="w-3 h-3 stroke-white" />
			</div>
		</a>
	</div>

	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each getSampleCoursesData() as course}
			<div class="p-8 space-y-4 bg-white rounded-2xl">
				<div class="bg-indigo-500 flex items-center justify-center h-[12rem] rounded-xl">
					<DatabaseIcon class="w-12 h-12 stroke-indigo-950" />
				</div>

				<h3>{course.title}</h3>

				<div class="flex justify-between">
					<div class="flex items-center gap-2">
						<ClockIcon class="w-4 h-4 stroke-gray-400" />
						<p class="text-xs text-gray-500">{course.duration} hours</p>
					</div>

					<div class="flex items-center gap-2">
						<PenSquareIcon class="w-4 h-4 stroke-gray-400" />
						<p class="text-xs text-gray-500">{course.sections} sections</p>
					</div>

					<div class="flex items-center gap-2">
						<BarChartIcon class="w-4 h-4 stroke-gray-400" />
						<p class="text-xs text-gray-500">{course.level} level</p>
					</div>
				</div>

				<p>
					{course.description}
				</p>

				<p>
					<span class="text-2xl">$ {course.price} USD</span>
					<span class="text-sm text-gray-500">excl. taxes </span>
				</p>

				<div class="flex justify-between">
					<a href="/" class="action-base w-fit text-xs">Enroll Now</a>

					<div class="flex items-center gap-2">
						<AvatarsGroup avatars={getSampleAvatars()} loading="lazy" />
						<p class="text-xs">{course.enrolled} enrolled.</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- New Courses -->
<section class="py-24 container-base space-y-11">
	<div class="flex items-center justify-between">
		<h2 class="text-2xl tracking-tight w-3/6">New Courses.</h2>

		<a href="/" class="flex items-center gap-2 px-3 py-2 text-xs rounded-lg hover:bg-gray-300">
			<span>View All</span>
			<div class="p-[0.125rem] bg-gray-900 rounded-full">
				<ArrowRightIcon class="w-3 h-3 stroke-white" />
			</div>
		</a>
	</div>

	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each getSampleCoursesData() as course}
			<div class="p-8 space-y-4 bg-white rounded-2xl">
				<div class="bg-indigo-500 flex items-center justify-center h-[12rem] rounded-xl">
					<DatabaseIcon class="w-12 h-12 stroke-indigo-950" />
				</div>

				<h3>{course.title}</h3>

				<div class="flex justify-between">
					<div class="flex items-center gap-2">
						<ClockIcon class="w-4 h-4 stroke-gray-400" />
						<p class="text-xs text-gray-500">{course.duration} hours</p>
					</div>

					<div class="flex items-center gap-2">
						<PenSquareIcon class="w-4 h-4 stroke-gray-400" />
						<p class="text-xs text-gray-500">{course.sections} sections</p>
					</div>

					<div class="flex items-center gap-2">
						<BarChartIcon class="w-4 h-4 stroke-gray-400" />
						<p class="text-xs text-gray-500">{course.level} level</p>
					</div>
				</div>

				<p>
					{course.description}
				</p>

				<p>
					<span class="text-2xl">$ {course.price} USD</span>
					<span class="text-sm text-gray-500">excl. taxes </span>
				</p>

				<div class="flex justify-between">
					<a href="/" class="action-base w-fit text-xs">Enroll Now</a>

					<div class="flex items-center gap-2">
						<AvatarsGroup avatars={getSampleAvatars()} loading="lazy" />
						<p class="text-xs">{course.enrolled} enrolled.</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- Support -->
<section class="py-24 container-base space-y-11">
	<div>
		<h2>Everything you nee, all in one place</h2>
		<p>
			Experience the transformative power of Filearn as you gain financial confidence, build wealth
			and secure a better future.
		</p>
		<div>
			<a href="/" class="action-base w-fit text-xs">View Courses</a>
		</div>
	</div>

	<div class="grid gap-8 grid-cols-2 grid-rows-3 md:grid-cols-2 lg:grid-cols-3" />
</section>
