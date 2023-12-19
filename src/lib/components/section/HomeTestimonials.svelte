<script lang="ts">
	import type { getHomePageData } from '$lib/graphql/queries/home';
	import { StructuredText } from '@datocms/svelte';
	import { Tabs } from 'bits-ui';

	export let testimonials: NonNullable<
		Awaited<ReturnType<typeof getHomePageData>>
	>['multipleTestimonials'];

	const triggers = testimonials.map((testimonial) => ({
		id: testimonial.id,
		author: testimonial.author,
		image: {
			url: testimonial.image?.url,
			alt: testimonial.image?.alt
		},
		role: testimonial.role
	}));
</script>

<Tabs.Root class="space-y-5 sm:space-y-10 container-sm">
	{#each testimonials as { id, title, content, image, author, role }}
		<Tabs.Content value={id}>
			<div class="flex flex-col items-center gap-5 sm:gap-20 sm:flex-row sm:p-12">
				<div class="basis-6/12">
					<img
						src={image?.url}
						alt={image?.alt}
						width="480"
						height="528"
						class="w-[30rem] h-[27rem] sm:h-[33rem] object-cover rounded-[1.125rem]"
						loading="lazy"
					/>
				</div>

				<div class="space-y-5 basis-6/12">
					<h3>{title}</h3>
					<StructuredText data={content[0].richText?.value} />
					<div>
						<p>{author}</p>
						<p class="text-xs font-semibold text-savoy-blue">{role}</p>
					</div>
				</div>
			</div>
		</Tabs.Content>
	{/each}

	<Tabs.List class="flex flex-col gap-4 sm:items-center sm:flex-row">
		{#each triggers as { id, image, author, role }}
			<Tabs.Trigger
				value={id}
				class="flex items-center gap-4 p-4 data-[state=inactive]:opacity-40 data-[state=active]:pl-8"
			>
				<img
					src={image.url}
					alt={image.alt}
					height="48"
					width="48"
					class="w-12 h-12 rounded-full"
					loading="lazy"
				/>

				<div class="text-left">
					<p class="text-sm">{author}</p>
					<p class="text-xs font-semibold">{role}</p>
				</div>
			</Tabs.Trigger>
		{/each}
	</Tabs.List>
</Tabs.Root>
