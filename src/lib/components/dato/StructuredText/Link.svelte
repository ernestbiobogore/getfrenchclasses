<script lang="ts">
	import type { RichTextBlockModelRichTextLinksField } from "$lib/graphql/generated";
	import { Badge } from "$shadcn/badge";
	import * as Card from "$shadcn/card";

	export let link: RichTextBlockModelRichTextLinksField;
</script>

{#if link.__typename === "CourseRecord"}
	<a href="/course/{link.slug}" class="!no-underline group">
		<Card.Root>
			<Card.Header class="space-y-2">
				<Badge class="w-fit bg-brand-primary">Course</Badge>

				<div class="space-y-1">
					<Card.Title class="group-hover:underline">{link.name}</Card.Title>

					{#if link.seo[0].seoBlock?.description}
						<Card.Description class="text-sm">
							{link.seo[0].seoBlock?.description}
						</Card.Description>
					{/if}
				</div>
			</Card.Header>
		</Card.Root>
	</a>
{/if}
