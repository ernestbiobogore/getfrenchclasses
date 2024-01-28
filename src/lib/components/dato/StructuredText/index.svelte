<script lang="ts">
  import { cn } from "$lib/utils";
  import Node from "./Node.svelte";

  export let richText: any;
  export { className as class };

  $: node = richText?.value.document;
  $: blocks = richText?.blocks;

  let className: string | undefined = "";
</script>

{#if className}
  <div class={cn(className)}>
    <Node {node} {blocks} />
  </div>
{:else}
  <div>
    <Node {node} {blocks} />
  </div>
{/if}
