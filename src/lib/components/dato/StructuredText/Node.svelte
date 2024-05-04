<script lang="ts">
	import Block from "$dato/StructuredText/Block.svelte";
	import type { RichTextBlockModelRichTextBlocksField } from "$lib/graphql/generated";
	import { cn } from "$lib/utils";
	import {
		isBlock,
		isBlockquote,
		isCode,
		isHeading,
		isLink,
		isList,
		isListItem,
		isParagraph,
		isRoot,
		isSpan,
		type Node,
		type Span,
	} from "datocms-structured-text-utils";
	import { getContext } from "svelte";
	import type { ElementsClasses } from "./types";

	export let node: Node;
	export let blocks: RichTextBlockModelRichTextBlocksField[] | undefined;

	$: block = isBlock(node) && (blocks || []).find(({ id }) => isBlock(node) && id === node.item);

	const elementClasses = getContext<ElementsClasses | undefined>("elementClasses");

	const renderSpan = (node: Span, marks: Span["marks"]): string => {
		if (!marks || marks.length === 0) {
			return node.value;
		}

		const mark = marks[0];
		const remainingMarks = marks.slice(1);

		if (mark === "strong") {
			return `<strong>${renderSpan(node, remainingMarks)}</strong>`;
		} else if (mark === "code") {
			return `<code>${renderSpan(node, remainingMarks)}</code>`;
		} else if (mark === "emphasis") {
			return `<em>${renderSpan(node, remainingMarks)}</em>`;
		} else if (mark === "underline") {
			return `<u>${renderSpan(node, remainingMarks)}</u>`;
		} else if (mark === "strikethrough") {
			return `<s>${renderSpan(node, remainingMarks)}</s>`;
		} else if (mark === "highlight") {
			return `<mark>${renderSpan(node, remainingMarks)}</mark>`;
		} else {
			return renderSpan(node, remainingMarks);
		}
	};
</script>

{#if isRoot(node)}
	{#each node.children as child}
		<svelte:self node={child} {blocks} />
	{/each}
{/if}

{#if isParagraph(node)}
	<p class={cn(elementClasses?.p)}>
		{#each node.children as child}
			<svelte:self node={child} {blocks} />
		{/each}
	</p>
{/if}

{#if isLink(node)}
	<a
		href={node.url}
		target={node.meta?.find(m => m.id === "target")?.value}
		rel={node.meta?.find(m => m.id === "rel")?.value}
	>
		{#each node.children as child}
			<svelte:self node={child} {blocks} />
		{/each}
	</a>
{/if}

{#if isList(node)}
	{#if node.style === "bulleted"}
		<ul>
			{#each node.children as child}
				<li>
					{#each child.children as grandchild}
						<svelte:self node={grandchild} {blocks} />
					{/each}
				</li>
			{/each}
		</ul>
	{/if}

	{#if node.style === "numbered"}
		<ol>
			{#each node.children as child}
				<li>
					{#each child.children as grandchild}
						<svelte:self node={grandchild} {blocks} />
					{/each}
				</li>
			{/each}
		</ol>
	{/if}
{/if}

{#if isListItem(node)}
	<li>
		{#each node.children as child}
			<svelte:self node={child} {blocks} />
		{/each}
	</li>
{/if}

{#if isHeading(node)}
	{#if node.level === 1}
		<h1>
			{#each node.children as child}
				<svelte:self node={child} {blocks} />
			{/each}
		</h1>
	{/if}

	{#if node.level === 2}
		<h2>
			{#each node.children as child}
				<svelte:self node={child} {blocks} />
			{/each}
		</h2>
	{/if}

	{#if node.level === 3}
		<h3>
			{#each node.children as child}
				<svelte:self node={child} {blocks} />
			{/each}
		</h3>
	{/if}

	{#if node.level === 4}
		<h4>
			{#each node.children as child}
				<svelte:self node={child} {blocks} />
			{/each}
		</h4>
	{/if}

	{#if node.level === 5}
		<h5>
			{#each node.children as child}
				<svelte:self node={child} {blocks} />
			{/each}
		</h5>
	{/if}

	{#if node.level === 6}
		<h6>
			{#each node.children as child}
				<svelte:self node={child} {blocks} />
			{/each}
		</h6>
	{/if}
{/if}

{#if isSpan(node)}
	{#if node.marks}
		{@html renderSpan(node, node.marks)}
	{:else}
		{node.value}
	{/if}
{/if}

{#if isCode(node)}
	<pre>
        <code>
            {node.code}
        </code>
    </pre>
{/if}

{#if isBlockquote(node)}
	<blockquote>
		{#each node.children as child}
			<svelte:self node={child} {blocks} />
		{/each}
	</blockquote>
{/if}

{#if isBlock(node) && block}
	<Block {block} />
{/if}
