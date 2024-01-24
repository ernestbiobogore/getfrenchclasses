<script lang="ts" context="module">
  export type Module = {
    id: string;
    name: string;
    description: string;
    lessons: Lesson[];
  };

  export type Lesson = {
    id: string;
    name: string;
    icon?: string;
  };
</script>

<script lang="ts">
  import { Accordion } from "bits-ui";
  import { tick } from "svelte";

  const mockModule: Module = {
    id: crypto.randomUUID(),
    name: "File Structure",
    description: `~1.5hr to complete | Learn about different file structures and determine the best strategy for the design system you will be building over the next 5 weeks.

		All lessons and projects marked with a ★ are essential! Everything else is bonus content. If time allows, pick and choose bonus content that will be the most helpful to you. Remember, you get lifetime access to this material so you can always revisit lessons after the course ends.`,
    lessons: [
      {
        id: crypto.randomUUID(),
        name: "How to map your design system file structure",
        // icon: "i-lucide-arrow-right",
      },
      {
        id: crypto.randomUUID(),
        name: "File structure map & file templates",
        // icon: "i-lucide-arrow-right",
      },
    ],
  };

  export let week = 1;
  export let start = "Feb 5";
  export let end = "Feb 11";
  export let modules: Module[] = [mockModule, { ...mockModule, id: crypto.randomUUID() }];

  // let el: HTMLDivElement;

  let state: {
    id: string;
    value: null | string;
  } = {
    id: "",
    value: "",
  };
</script>

<div>
  <div class="flex items-center mb-4">
    <!-- BADGE -->
    <div class="text-(xs white) fw-semibold uppercase bg-night rd-full px-2.5 py-0.5">
      WEEK {week}
    </div>

    <div class="flex-1 mx-4 border-gray border-t border-dashed" />
    <span class="text-xs text-gray-500 uppercase">{start} — {end}</span>
  </div>

  <div>
    <div class="mb-2 font-bold text-lg">MODULES</div>

    <Accordion.Root class="space-y-4 b b-gray-3 rd-lg">
      {#each modules as module}
        {@const isOpen = state.id === module.id && state.value === "open"}

        <Accordion.Item value={module.id} class="flex|col gap-6 p-2 sm-p-4 not-last-b-b b-gray-3">
          <Accordion.Trigger
            on:click={async e => {
              // @ts-ignore
              const el = e.detail.currentTarget;
              await tick();
              const dataState = el.getAttribute("data-state");

              if (dataState === "open") {
                state.id = module.id;
                state.value = dataState;
              } else {
                state.id = "";
                state.value = "";
              }
            }}
            value={module.id}
            class="flex-s-start-start gap-2 sm-gap-4"
          >
            <!-- PROGRESS -->
            <div class="s-40px rd-full flex-s-center b-2 b-gray text-(sm gray-6) fw-medium">0%</div>

            <div class="flex-1">
              <div class="flex-s-between mb-2">
                <div class="font-semibold">{module.name}</div>
                <button class="flex-s-start gap-1 text-gray-6 px-2.5 py-1 b b-gray-3 rd-full">
                  <span class="text-10px">5 LESSONS · 1 PROJECT</span>
                  <div class="i-ph-caret-right transition-150" class:rotate-90={isOpen}></div>
                </button>
              </div>

              <div class="text-(start gray-500 sm) sm-text-base" class:line-clamp-1={!isOpen}>
                {module.description}
              </div>
            </div>
          </Accordion.Trigger>

          <Accordion.Content>
            <div class="b b-gray-3 rd-lg">
              {#each module.lessons as lesson}
                <div class="p-3 b-gray-3 not-last-b-b">
                  <div class="uppercase text-(xs gray-6) hidden sm-block">Lesson</div>
                  <div class="fw-semibold text-gray-7 text-sm sm-text-base">{lesson.name}</div>
                </div>
              {/each}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      {/each}
    </Accordion.Root>
  </div>
</div>
