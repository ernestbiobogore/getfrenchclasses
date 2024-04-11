<script>
	import FAQItems from "$dato/blocks/FAQItems.svelte";
	import Heading from "$dato/blocks/Heading.svelte";
	import Mail from "~icons/lucide/mail";
	import MapPin from "~icons/lucide/map-pin";
	import MessageSquare from "~icons/lucide/message-square";
	import Phone from "~icons/lucide/phone";
	import User from "~icons/lucide/user";

	export let data;
</script>

<section class="py-12 text-center">
	<h1>Here to help you.</h1>
	<p class="text-sm py-7">
		Fill out the form below and we will get back to you as soon as possible.
	</p>
	<div class="form p-7">
		<form method="" class="flex flex-col gap-5 m-auto  md:w-1/2 lg:w-1/3" id="contact-form">
			<div class="flex flex-row items-center gap-4 p-2 bg-white rounded-md md:p-4">
				<User color="grey" class="w-4 h-4" />
				<input
					id="name"
					name="name"
					type="text"
					placeholder="Enter your name"
					autocomplete="name"
					class="w-full p-2 text-xs border-none"
				/>
			</div>
			<div class="flex flex-row items-center gap-4 p-2 bg-white rounded-md md:p-4">
				<Mail color="grey" class="w-4 h-4" />
				<input
					id="email"
					name="email"
					placeholder="Enter your Email"
					autocomplete="email"
					class="w-full p-2 text-xs border-none"
				/>
			</div>

			<div class="flex flex-row gap-4 p-2 bg-white rounded-md md:p-4">
				<MessageSquare color="grey" class="w-4 h-4" />
				<textarea
					cols="25"
					rows="4"
					placeholder="Example Text"
					class="w-full p-2 text-xs border-none"
				/>
			</div>

			<button type="submit" class="self-end p-2 text-right text-white bg-black rounded-lg"
				>Submit Form</button
			>
		</form>
	</div>
</section>

<section class="flex-row gap-16 px-12 py-24 md:flex">
	<div class="md:w-1/2">
		<div class="space-y-5 text-center">
			<h2 class="tracking-normal">Our most frequently asked questions.</h2>
			<p class="text-sm">
				If we have not been able to answer your question and you do not want to fill out a form, you
				can contact us through the methods below.
			</p>
		</div>
		<div class="flex flex-col items-center py-4 md:flex-row justify-evenly flex-start">
			<button class="flex flex-row items-center gap-4 p-6 bg-white border-2 rounded-lg">
				<Mail class="text-brand-primary" />
				<a href="mailto:info.learn.com" class="text-xs text-left whitespace-pre-line">
					<span>info.learn.com</span>
					Email our support team
				</a>
			</button>

			<button class="flex flex-row items-center gap-4 p-6 bg-white border-2 rounded-lg">
				<Phone class="text-brand-primary" />
				<a href="tel:+1-8000-808" class="text-xs text-left whitespace-pre-line">
					<span>+1-800-080-8</span>
					Call our support team
				</a>
			</button>

			<button class="flex flex-row items-center gap-4 p-6 bg-white border-2 rounded-lg">
				<MapPin class="text-brand-primary" />
				<a href="mailto:info.learn.com" class="text-xs text-left whitespace-pre-line">
					<span>Miami. Fl</span>
					Contact our support team
				</a>
			</button>
		</div>
	</div>

	<div class="py-20 space-y-12 md:basis-1/2">
		<Heading defaultHeading="Frequently Asked Questions" useDefaultHeading />
		<FAQItems items={data.homeFaq} />
	</div>
</section>
