<script lang="ts">
	import StructuredText from "$dato/StructuredText/index.svelte";
	import FAQItems from "$dato/blocks/FAQItems.svelte";
	import Heading from "$dato/blocks/Heading.svelte";
	import AvatarsGroup from "$lib/components/AvatarsGroup.svelte";
	import CourseCtaBanner from "$lib/components/cta-section/CourseCtaBanner.svelte";
	import ArrowRight from "~icons/lucide/arrow-right";
	import BarChart from "~icons/lucide/bar-chart";
	import Check from "~icons/lucide/check";
	import Clock from "~icons/lucide/clock";
	import PenSquare from "~icons/lucide/pen-square";
	import BookOpen from "~icons/ph/book-open";
	import ChalkboardTeacher from "~icons/ph/chalkboard-teacher";
	import GraduationCap from "~icons/ph/graduation-cap";
	import KeyLight from "~icons/ph/key-light";
	import LightbulbLight from "~icons/ph/lightbulb-light";
	import UsersThree from "~icons/ph/users-three";
	import VideoCamera from "~icons/ph/video-camera";
	import Wrench from "~icons/ph/wrench";
	import CourseSyllabus from "./components/CourseSyllabus.svelte";

	import DefaultTestimonial from "$dato/blocks/DefaultTestimonial.svelte";
	import CtaTestimonial from "$dato/blocks/CtaTestimonial.svelte";
	import TutorCard from "$dato/blocks/tutors/TutorCard.svelte";
	import { f, getSampleAvatars } from "$lib/utils";
	import { Image } from "@datocms/svelte";

	export let data;

	let course = f(data.course);
	$: course = f(data.course);

	const instructors = [...Array(3)];
</script>

<svelte:head>
	<title>{data.course.name}</title>
</svelte:head>

<section class="flex flex-col justify-between gap-24 py-8 md:flex-row container-base">
	<!-- LEFT SIDE -->
	<div class="flex-1 space-y-5">
		<div class="space-y-4">
			<h1>{data.course.name}</h1>

			<div class="gap-4 flex-s-between md:justify-start">
				<div class="gap-2 flex-s-center">
					<Clock class="text-gray-400" />
					<p class="text-xs text-gray-500">{data.course.duration} hours</p>
				</div>

				<div class="gap-2 flex-s-center">
					<PenSquare class="text-gray-400" />
					<p class="text-xs text-gray-500">{data.course.numberOfSections} sections</p>
				</div>

				<div class="gap-2 flex-s-center">
					<BarChart class="text-gray-400" />
					<p class="text-xs text-gray-500">{data.course.level} level</p>
				</div>
			</div>
		</div>

		<p>{data.course.seo?.description}</p>

		<a href="/courses/{data.course.slug}" class="text-xs action-base w-fit">Enroll Now</a>

		<!-- INSTRUCTORS -->
		<div class="py-5">
			<div class="mb-2 text-xs text-gray-500 uppercase">Hosted By</div>

			<div
				class="grid w-full gap-4"
				style="grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));"
			>
				{#each instructors as _}
					<a href="/courses/{data.course.slug}#instructor" class="gap-3 flex-s-start">
						<div class="size-[64px] bg-red-400 rounded-xl">
							<img src="" alt="" />
						</div>
						<div class="flex-1">
							<p class="font-semibold">Name</p>
							<p class="text-sm max-w-[46ch]">
								Lead product designer at Gusto, ex Uber. Teaching 70k designers on Youtube
							</p>
						</div>
					</a>
				{/each}
			</div>
		</div>

		<!-- WHO THE COURSE IS FOR -->
		<div class="py-5">
			<h2>Who is this course for?</h2>

			<br />

			<!-- CARDS -->
			<div class="grid gap-4 sm:grid-cols-2">
				{#each [...Array(4)] as _, i}
					<div class="flex flex-col gap-3 p-4 border border-gray-400 rounded-lg">
						<div class="bg-white text-gray-800 size-[40px] rounded-full flex-s-center">
							0{i + 1}
						</div>

						<div class="font-semibold">Experienced designers</div>

						<p class="text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, odio sint neque quasi
							officia optio doloribus voluptatum asperiores aliquid, delectus necessitatibus. Rem ut
							odio possimus error quae id repellendus accusantium.
						</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- WHAT YOU'LL GET -->
		<div class="py-5">
			<h2>What you'll get</h2>

			<br />

			<!-- CARDS -->
			<div class="flex flex-col max-w-2xl gap-4">
				{#each [...Array(4)] as _, i}
					<div class="flex-s-start-start">
						<div>
							<div class="bg-green-600 size-[20px] text-white rounded-full flex-s-center">
								<Check />
							</div>
						</div>

						<div class="ml-3">
							<div class="font-semibold">Experienced designers</div>

							<p class="text-sm">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, odio sint neque quasi
								officia optio doloribus voluptatum asperiores aliquid, delectus necessitatibus. Rem
								ut odio possimus error quae id repellendus accusantium.
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- THIS COURSE INCLUDES -->
		<div class="py-5">
			<h2>This course includes</h2>

			<br />

			<!-- CARDS -->
			<div class="grid max-w-2xl gap-4 md:grid-cols-2">
				<div class="gap-2 flex-s-start">
					<VideoCamera class="text-xl" />
					<p>Live sessions with instructor</p>
				</div>
				<div class="gap-2 flex-s-start">
					<KeyLight class="text-xl" />
					<p>Lifetime access to course materials</p>
				</div>
				<div class="gap-2 flex-s-start">
					<BookOpen class="text-xl" />
					<p>74 in-depth lesson</p>
				</div>
				<div class="gap-2 flex-s-start">
					<ChalkboardTeacher class="text-xl" />
					<p>Direct access to instructor</p>
				</div>
				<div class="gap-2 flex-s-start">
					<Wrench class="text-xl" />
					<p>7 projects to apply learnings</p>
				</div>
				<div class="gap-2 flex-s-start">
					<LightbulbLight class="text-xl" />
					<p>Guided feedback & reflection</p>
				</div>
				<div class="gap-2 flex-s-start">
					<UsersThree class="text-xl" />
					<p>Private community of peers</p>
				</div>
				<div class="gap-2 flex-s-start">
					<GraduationCap class="text-xl" />
					<p>Course certificate upon completion</p>
				</div>
			</div>
		</div>
	</div>

	<!-- RIGHT SIDE -->
	<div class="md:flex-[0.7] lg:flex-[0.5] relative">
		<div class="bg-white shadow-lg rounded-xl overflow-hidden sticky top-[5.75rem]">
			<!--  -->
			<div class="w-full bg-red-400 aspect-video">
				<!-- NOTE: TEMPORARY -->
				<div class="size-full flex-s-center">Image / Video</div>
			</div>

			<div class="px-5 py-4">
				<div class="mb-1 flex-s-between">
					<div class="font-semibold">${data.course.price} USD</div>

					<div class="flex-s-start">
						<AvatarsGroup avatars={getSampleAvatars()} size={20} />
						<p class="text-xs">{data.course.numberOfEnrolledStudents} enrolled.</p>
					</div>
				</div>
				<div class="text-sm">
					<a href="/" class="font-medium underline">Get reimbursed</a>
					<span>|</span>
					<a href="/" class="font-medium underline">Bulk purchases</a>
				</div>

				<div class="py-6">
					<a href="/" class="w-full action-base">Enroll</a>
				</div>

				<div>
					<p class="text-xs font-medium text-gray-400 uppercase">CTA subtext</p>
					<p class="text-sm text-gray-800">Main Text</p>

					<div class="relative w-full mt-3">
						<input
							class="flex-1 w-full py-3 pl-3 text-sm border rounded-lg pr-14"
							type="text"
							placeholder="Your email"
						/>
						<div class="absolute top-0 right-0 h-full pr-1 flex-s-center">
							<button class="bg-night px-3 flex-s-center rounded-lg h-[80%] text-xl text-white">
								<ArrowRight />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<CourseSyllabus />

{#if data.course.testimonials && data.course.testimonials.length > 0}
	<section class="py-20 container-base space-y-8">
		<h2 class="text-center">What people say</h2>

		<div class="grid grid-cols-3 gap-8">
			{#if course.testimonials[0]?.testimonial.__typename === "TestimonialBlockDefaultRecord"}
				<DefaultTestimonial testimonial={course.testimonials[0]?.testimonial} />
			{/if}
		</div>
	</section>
{/if}

<CourseCtaBanner
	title={course.ctaTitle}
	midActions={course.ctaMidActions}
	cta={course.ctaButton}
	heroImages={course.ctaImages}
/>

<!-- INSTRUCTOR BIO -->
<section class="py-20 container-base space-y-4">
	<h2 class="text-center">Meet your instructor</h2>
	<p class="text-center mx-auto max-w-[46ch] md:max-w-[64ch]">{course.instructorSubheading}</p>
	<br />

	{#each course.instructors as instructor}
		<div
			class="w-full max-w-2xl gap-4 mx-auto max-md:space-y-4 md:flex-s-start not-last:mb-6"
			id="instructor"
		>
			<div class="size-[60px] bg-red-400 rounded-xl overflow-hidden md:!h-[300px] md:!w-[250px]">
				<!-- <img src="" alt="" /> -->
				<Image class="size-full" data={instructor.profilePicture.responsiveImage} />
			</div>

			<div class="flex-1">
				<div class="mb-2 text-lg font-semibold">{instructor.name}</div>
				<StructuredText class="flex flex-col gap-4" richText={instructor.about} />
			</div>
		</div>
	{/each}
</section>

<section class="py-20 container-base space-y-4">
	<h2 class="text-center">Tutors</h2>
	<p class="text-center mx-auto max-w-[46ch] md:max-w-[64ch]">
		Hi, I'm Femke! I am a design manager that worked as a product designer for over 5 years at the
		world's leading tech companies such as Uber, Wealthsimple and Gusto.
	</p>

	<br />

	<div class="grid gap-6 sm:grid-cols-3">
		{#each data.tutorsMetas as tutor}
			<TutorCard {tutor} withCTA />
		{/each}
	</div>
</section>

<section class="max-w-2xl px-4 mx-auto my-12">
	<h2 class="mb-6 text-3xl font-bold text-center">Course schedule</h2>
	<div class="flex items-center justify-center mb-4">
		<Clock class="mr-2 text-gray-500" />
		<span class="text-gray-500">3-4 hours per week</span>
	</div>

	<div class="pl-4 border-l-2 border-gray-400 border-dashed">
		<h3 class="mt-4 mb-2 text-xl font-semibold">Office hours</h3>
		<p class="mb-2 text-gray-700">
			<strong>Wednesdays or Fridays</strong>
		</p>
		<p class="mb-4 text-gray-700">
			Join Femke and course alumni mentors once a week on Wednesday's or Friday's for live sessions
			to get your burning questions answered while working through worksheets with your peers.
		</p>
		<p class="mb-4 text-gray-700">Sessions will run at Europe & North America friendly times.</p>
		<h3 class="mt-4 mb-2 text-xl font-semibold">Self-paced modules</h3>
		<p class="mb-2 text-gray-700">
			<strong>2 hours per week</strong>
		</p>
		<p class="mb-4 text-gray-700">
			Work through 2 modules a week with an accompanying video. This format was created to ensure
			you understand concepts, and provide you with tools to implement what you learned as a next
			step.
		</p>
		<h3 class="mt-4 mb-2 text-xl font-semibold">Resources, templates & worksheets</h3>
		<p class="mb-2 text-gray-700">
			<strong>2 hours per week</strong>
		</p>
		<p class="mb-4 text-gray-700">
			Tried and true templates, resources and worksheets you can use at work to advocate for your
			ideas, feel empowered to have strategic influence within your team and get included in product
			strategy conversations.
		</p>
	</div>
</section>

{#if course.testimonials[1]?.testimonial && course.testimonials[1]?.testimonial?.__typename === "TestimonialBlockCtaRecord"}
	<section class="py-20 space-y-12 container-base">
		<CtaTestimonial testimonial={course.testimonials[1].testimonial} />
	</section>
{/if}

{#if data.course.faq?.faqBlocks && data.course.faq?.faqBlocks.length > 0}
	<section class="max-w-2xl py-10 mx-auto space-y-12" id="faq">
		<Heading defaultHeading="Frequently Asked Questions" useDefaultHeading />
		<FAQItems items={data.course.faq} />
	</section>
{/if}
