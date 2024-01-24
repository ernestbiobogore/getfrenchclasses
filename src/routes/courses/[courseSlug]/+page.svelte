<script lang="ts">
  import AvatarsGroup from "$lib/components/AvatarsGroup.svelte";
  import CourseCtaBanner from "./components/CourseCtaBanner.svelte";
  import CourseSyllabus from "./components/CourseSyllabus.svelte";
  import FaqAccordion from "$lib/components/FaqAccordion.svelte";
  import Testimonials from "$lib/components/Testimonials.svelte";
  import { BarChart, Clock, PenSquare } from "lucide-svelte";
  import { getSampleAvatars } from "$lib/utils";

  export let data;
  $: coursesPageFaq = data.course.faq?.faqBlocks;

  const instructors = [...Array(3)];
</script>

<svelte:head>
  <title>{data.course.name}</title>
</svelte:head>

<section class="flex flex-col justify-between gap-24 py-8 md:flex-row container-base">
  <!-- LEFT SIDE -->
  <div class="space-y-5 flex-1">
    <div class="space-y-4">
      <h2>{data.course.name}</h2>

      <div class="flex-s-between gap-4 md-justify-start">
        <div class="flex-s-center gap-2">
          <Clock class="s-4 stroke-gray-400" />
          <p class="text-xs text-gray-500">{data.course.duration} hours</p>
        </div>

        <div class="flex-s-center gap-2">
          <PenSquare class="s-4 stroke-gray-400" />
          <p class="text-xs text-gray-500">{data.course.numberOfSections} sections</p>
        </div>

        <div class="flex-s-center gap-2">
          <BarChart class="s-4 stroke-gray-400" />
          <p class="text-xs text-gray-500">{data.course.level} level</p>
        </div>
      </div>
    </div>

    <p>{data.course.seo?.description}</p>

    <a href="/courses/{data.course.slug}" class="text-xs action-base w-fit">Enroll Now</a>

    <!-- INSTRUCTORS -->
    <div class="py-5">
      <div class="text-(xs gray-500) uppercase mb-2">Hosted By</div>

      <div
        class="grid gap-4 w-full"
        style="grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));"
      >
        {#each instructors as _}
          <a href="/courses/{data.course.slug}#instructor" class="flex-s-start gap-3">
            <div class="s-64px bg-red rd-xl">
              <img src="" alt="" />
            </div>
            <div class="flex-1">
              <p class="fw-semibold">Name</p>
              <p class="text-sm max-w-46ch">
                Lead product designer at Gusto, ex Uber. Teaching 70k designers on Youtube
              </p>
            </div>
          </a>
        {/each}
      </div>
    </div>

    <!-- WHO THE COURSE IS FOR -->
    <div class="py-5">
      <h3>Who is this course for?</h3>

      <br />

      <!-- CARDS -->
      <div class="grid sm-grid-cols-2 gap-4">
        {#each [...Array(4)] as _, i}
          <div class="p-4 rd-lg b b-gray flex|col gap-3">
            <div class="bg-white text-gray-8 s-40px rd-full flex-s-center">
              0{i + 1}
            </div>

            <div class="fw-semibold">Experienced designers</div>

            <p class="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, odio sint neque quasi
              officia optio doloribus voluptatum asperiores aliquid, delectus necessitatibus. Rem ut
              odio possimus error quae id repellendus accusantium.
            </p>
          </div>
        {/each}
      </div>
    </div>

    <!-- WHAT YOU'LL GET -->
    <div class="py-5">
      <h3>What you'll get</h3>

      <br />

      <!-- CARDS -->
      <div class="flex|col gap-4 max-w-2xl">
        {#each [...Array(4)] as _, i}
          <div class="flex-s-start-start">
            <div>
              <div class="bg-green-6 s-20px text-white rd-full flex-s-center">
                <div class="i-lucide-check"></div>
              </div>
            </div>

            <div class="ml-3">
              <div class="fw-semibold">Experienced designers</div>

              <p class="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, odio sint neque quasi
                officia optio doloribus voluptatum asperiores aliquid, delectus necessitatibus. Rem
                ut odio possimus error quae id repellendus accusantium.
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- THIS COURSE INCLUDES -->
    <div class="py-5">
      <h3>This course includes</h3>

      <br />

      <!-- CARDS -->
      <div class="grid md-grid-cols-2 gap-4 max-w-2xl">
        <div class="flex-s-start gap-2">
          <div class="i-ph-video-camera text-xl"></div>
          <p>Live sessions with instructor</p>
        </div>
        <div class="flex-s-start gap-2">
          <div class="i-ph-key-light text-xl"></div>
          <p>Lifetime access to course materials</p>
        </div>
        <div class="flex-s-start gap-2">
          <div class="i-ph-book-open text-xl"></div>
          <p>74 in-depth lesson</p>
        </div>
        <div class="flex-s-start gap-2">
          <div class="i-ph-chalkboard-teacher text-xl"></div>
          <p>Direct access to instructor</p>
        </div>
        <div class="flex-s-start gap-2">
          <div class="i-ph-wrench text-xl"></div>
          <p>7 projects to apply learnings</p>
        </div>
        <div class="flex-s-start gap-2">
          <div class="i-ph-lightbulb-light text-xl"></div>
          <p>Guided feedback & reflection</p>
        </div>
        <div class="flex-s-start gap-2">
          <div class="i-ph-users-three text-xl"></div>
          <p>Private community of peers</p>
        </div>
        <div class="flex-s-start gap-2">
          <div class="i-ph-graduation-cap text-xl"></div>
          <p>Course certificate upon completion</p>
        </div>
      </div>
    </div>
  </div>

  <!-- RIGHT SIDE -->
  <div class="md-flex-[0.7] lg-flex-[0.5] relative">
    <div class="bg-white shadow-lg rd-xl overflow-hidden sticky top-23">
      <!--  -->
      <div class="bg-red aspect-video w-full">
        <!-- TEMPORARY -->
        <div class="s-full flex-s-center">Image / Video</div>
      </div>

      <div class="px-5 py">
        <div class="flex-s-between mb-1">
          <div class="fw-semibold">${data.course.price} USD</div>

          <div class="flex-s-start">
            <AvatarsGroup avatars={getSampleAvatars()} size={20} />
            <p class="text-xs">{data.course.numberOfEnrolledStudents} enrolled.</p>
          </div>
        </div>
        <div class="text-sm">
          <a href="/" class="underline fw-medium">Get reimbursed</a>
          <span>|</span>
          <a href="/" class="underline fw-medium">Bulk purchases</a>
        </div>

        <div class="py-6">
          <a href="/" class="action-base w-full">Enroll</a>
        </div>

        <div>
          <p class="text-(xs gray) uppercase fw-medium">CTA subtext</p>
          <p class="text-(sm gray-8)">Main Text</p>

          <div class="w-full relative mt-3">
            <input
              class="flex-1 py-3 pl-3 pr-14 w-full text-sm b rd-lg"
              type="text"
              placeholder="Your email"
            />
            <div class="abs right-0 top-0 h-full flex-s-center pr-1">
              <button class="bg-night px-3 flex-s-center rd-lg h-80% text-(xl white)">
                <div class="i-lucide-arrow-right"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<CourseSyllabus />

<Testimonials />

<CourseCtaBanner />

<!-- INSTRUCTOR BIO -->
<section class="container-base py-20">
  <h2 class="text-center">Meet your instructor</h2>
  <br /><br />

  <div class="max-md-space-y-4 md-flex-s-start w-full max-w-2xl mx-a gap-4" id="instructor">
    <div class="s-60px bg-red rd-xl md-(h-300px! w-250px!)">
      <img src="" alt="" />
    </div>

    <div class="flex-1">
      <div class="fw-semibold mb-2 text-lg">Femke</div>
      <div>
        <p>
          Hi, I'm Femke! I am a design manager that worked as a product designer for over 5 years at
          the world's leading tech companies such as Uber, Wealthsimple and Gusto.
        </p>
        <br />
        <p>
          I focus on educating the next generation of designers on YouTube where I have 70k+
          subscribers and over 1 million views. I have mentored 150+ designers and helped them land
          their dream job, I also run a community with 200+ designers from companies such as Google,
          Hubspot, and Booking.com.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="max-w-2xl mx-auto my-12 px-4">
  <h2 class="text-3xl font-bold text-center mb-6">Course schedule</h2>
  <div class="flex items-center justify-center mb-4">
    <div class="i-lucide-clock text-gray-500 mr-2" />
    <span class="text-gray-500">3-4 hours per week</span>
  </div>

  <div class="border-l-2 border-gray-400 pl-4 border-dashed">
    <h3 class="text-xl font-semibold mt-4 mb-2">Office hours</h3>
    <p class="text-gray-700 mb-2">
      <strong>Wednesdays or Fridays</strong>
    </p>
    <p class="text-gray-700 mb-4">
      Join Femke and course alumni mentors once a week on Wednesday's or Friday's for live sessions
      to get your burning questions answered while working through worksheets with your peers.
    </p>
    <p class="text-gray-700 mb-4">Sessions will run at Europe & North America friendly times.</p>
    <h3 class="text-xl font-semibold mt-4 mb-2">Self-paced modules</h3>
    <p class="text-gray-700 mb-2">
      <strong>2 hours per week</strong>
    </p>
    <p class="text-gray-700 mb-4">
      Work through 2 modules a week with an accompanying video. This format was created to ensure
      you understand concepts, and provide you with tools to implement what you learned as a next
      step.
    </p>
    <h3 class="text-xl font-semibold mt-4 mb-2">Resources, templates & worksheets</h3>
    <p class="text-gray-700 mb-2">
      <strong>2 hours per week</strong>
    </p>
    <p class="text-gray-700 mb-4">
      Tried and true templates, resources and worksheets you can use at work to advocate for your
      ideas, feel empowered to have strategic influence within your team and get included in product
      strategy conversations.
    </p>
  </div>
</section>

<CourseCtaBanner />

<section class="max-w-2xl mx-a py-10" id="faq">
  <h2 class="mb-8">Frequently Asked Questions</h2>

  {#if coursesPageFaq && coursesPageFaq.length > 0}
    <FaqAccordion
      itemIds={coursesPageFaq.map(faq => faq.id)}
      titles={coursesPageFaq.map(faq => faq.question || "")}
      richTexts={coursesPageFaq.map(faq => faq.answer[0].richText)}
    />
  {/if}
</section>
