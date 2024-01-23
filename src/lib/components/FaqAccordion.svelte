<script lang="ts">
  import StructuredText from "$lib/components/dato/StructuredText/index.svelte";
  import { Accordion } from "bits-ui";
  import { slide } from "svelte/transition";

  export let itemIds: string[];
  export let titles: string[];
  export let richTexts: any[];
</script>

<Accordion.Root class="space-y-4" value={itemIds[0]}>
  {#each Array(itemIds.length) as _, i}
    <Accordion.Item value={itemIds[i]} class="px-6 py-4 space-y-4 bg-white rounded-xl">
      <h3>
        <Accordion.Trigger
          class="flex-s-between w-full fw-medium [&[data-state=open]>.plus]:hidden [&[data-state=closed]>.minus]:hidden"
        >
          <span class="text-(base left) basis-11/12">{titles[i]}</span>

          <div class="i-lucide-minus minus text-2xl"></div>
          <div class="i-lucide-plus plus text-2xl"></div>
        </Accordion.Trigger>
      </h3>

      <Accordion.Content transition={slide} class="text-left">
        <StructuredText richText={richTexts[i]} />
      </Accordion.Content>
    </Accordion.Item>
  {/each}
</Accordion.Root>
