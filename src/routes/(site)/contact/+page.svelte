<script>
	import { enhance } from "$app/forms";
	import ModularPage from "$dato/sections/ModularPage.svelte";
	import Head from "$lib/components/seo/Head.svelte";
	import { Button } from "$shadcn/button";
	import { Input } from "$shadcn/input";
	import { Textarea } from "$shadcn/textarea";
	import { toast } from "svelte-sonner";
	import LoaderCircle from "~icons/lucide/loader-circle";
	import Mail from "~icons/lucide/mail";
	import MessageSquare from "~icons/lucide/message-square";
	import User from "~icons/lucide/user";

	export let data;
	export let form;

	let running = false;

	$: if (form?.error) {
		toast.error(form.error.title, {
			description: form.error.message,
		});
	}

	$: if (form?.success) {
		toast.success(form.message);
	}
</script>

<Head seo={data.modularPage.seo} title={data.modularPage.title} />

<section class="py-12 text-center">
	<h1>Here to help you.</h1>
	<p class="text-sm py-7">
		Fill out the form below and we will get back to you as soon as possible.
	</p>
	<div class="form p-7">
		<form
			method="post"
			class="flex flex-col gap-5 m-auto md:w-1/2 lg:w-1/3"
			use:enhance={() => {
				running = true;

				return async ({ update }) => {
					running = false;
					return update();
				};
			}}
		>
			<div class="flex flex-row items-center gap-4 p-2 bg-white rounded-md md:p-4">
				<User color="grey" class="w-4 h-4" />
				<Input
					id="name"
					name="name"
					type="text"
					placeholder="Enter your name"
					autocomplete="name"
					class="text-xs"
					required
				/>
			</div>
			<div class="flex flex-row items-center gap-4 p-2 bg-white rounded-md md:p-4">
				<Mail color="grey" class="w-4 h-4" />
				<Input
					id="email"
					name="email"
					placeholder="Enter your Email"
					autocomplete="email"
					class="text-xs"
					required
				/>
			</div>

			<div class="flex flex-row gap-4 p-2 bg-white rounded-md md:p-4">
				<MessageSquare color="grey" class="w-4 h-4" />
				<Textarea
					cols={25}
					rows={4}
					name="message"
					placeholder="Example Text"
					class="text-xs"
					required
				/>
			</div>

			<Button type="submit" class="bg-brand-primary self-end gap-2 submit" disabled={running}>
				<LoaderCircle
					class="w-0 h-0 transition-all duration-500 ease-in-out opacity-0 loader-circle"
				/>
				<span> Send your message </span>
			</Button>
		</form>
	</div>
</section>

{#if data.modularPage}
	<ModularPage modularPage={data.modularPage} />
{/if}
