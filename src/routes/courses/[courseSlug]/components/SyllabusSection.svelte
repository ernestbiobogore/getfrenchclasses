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

  import ChevronRight from "~icons/lucide/chevron-right";

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
    <div class="text-xs text-white font-semibold uppercase bg-night rounded-full px-2.5 py-0.5">
      WEEK {week}
    </div>

    <div class="flex-1 mx-4 border-gray-400 border-t border-dashed" />
    <span class="text-xs text-gray-500 uppercase">{start} — {end}</span>
  </div>

  <div>
    <div class="mb-2 font-bold text-lg">MODULES</div>

    <Accordion.Root class="border border-gray-300 rounded-lg">
      {#each modules as module}
        {@const isOpen = state.id === module.id && state.value === "open"}

        <Accordion.Item
          value={module.id}
          class="flex flex-col gap-6 p-2 sm:p-4 not-last:border-b border-gray-300"
        >
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
            class="flex-s-start-start gap-2 sm:gap-4"
          >
            <!-- PROGRESS -->
            <div
              class="size-[40px] rounded-full flex-s-center border-2 border-gray-400 text-sm text-gray-6 font-medium"
            >
              0%
            </div>

            <div class="flex-1">
              <div class="flex-s-between mb-2">
                <div class="font-semibold">{module.name}</div>
                <button
                  class="flex-s-start gap-1 text-gray-600 px-2.5 py-1 border border-gray-3 rounded-full"
                >
                  <span class="text-[10px]">5 LESSONS · 1 PROJECT</span>
                  <div class="transition duration-150" class:rotate-90={isOpen}>
                    <ChevronRight />
                  </div>
                </button>
              </div>

              <div
                class="text-start text-gray-500 text-sm sm:text-base"
                class:line-clamp-1={!isOpen}
              >
                {module.description}
              </div>
            </div>
          </Accordion.Trigger>

          <Accordion.Content>
            <div class="border border-gray-300 rounded-lg">
              {#each module.lessons as lesson}
                <div class="p-3 border-gray-300 not-last:border-b">
                  <div class="uppercase text-xs text-gray-6 hidden sm:block">Lesson</div>
                  <div class="font-semibold text-gray-7 text-sm sm:text-base">{lesson.name}</div>
                </div>
              {/each}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      {/each}
    </Accordion.Root>
  </div>
</div>
