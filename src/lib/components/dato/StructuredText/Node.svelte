<script lang="ts">
	import Block from "$lib/components/dato/StructuredText/Block.svelte";
	import type { RichTextBlockModelRichTextBlocksField } from "$lib/graphql/generated";
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
	} from "datocms-structured-text-utils";

	export let node: Node;
	export let blocks: RichTextBlockModelRichTextBlocksField[] | undefined;

	$: block = isBlock(node) && (blocks || []).find(({ id }) => isBlock(node) && id === node.item);
</script>

{#if isRoot(node)}
	{#each node.children as child}
		<svelte:self node={child} {blocks} />
	{/each}
{/if}

{#if isParagraph(node)}
	<p>
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
		{#each node.marks as mark, index}
			{#if mark === "strong"}
				<strong>
					{node.value}
				</strong>
			{/if}
			{#if mark === "code"}
				<code>
					{node.value}
				</code>
			{/if}
			{#if mark === "emphasis"}
				<em>
					{node.value}
				</em>
			{/if}
			{#if mark === "underline"}
				<u>
					{node.value}
				</u>
			{/if}
			{#if mark === "strikethrough"}
				<s>
					{node.value}
				</s>
			{/if}
			{#if mark === "highlight"}
				<mark>
					{node.value}
				</mark>
			{/if}
		{/each}
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
