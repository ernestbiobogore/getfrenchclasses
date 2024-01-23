<script lang="ts">
  import FaqAccordion from "$lib/components/FaqAccordion.svelte";
  import AvatarsGroup from "$lib/components/AvatarsGroup.svelte";
  import CourseCard from "$lib/components/CourseCard.svelte";
  import HomeTestimonials from "./_components/HomeTestimonials.svelte";
  import StructuredText from "$lib/components/dato/StructuredText/index.svelte";

  import Circle1 from "$lib/images/circle1.png";
  import Circle2 from "$lib/images/circle2.png";
  import Triangle from "$lib/images/triangle.png";

  export let data;
  $: ({ homepageData } = data);
</script>

<svelte:head>
  <title>Get French Classes</title>
</svelte:head>

<!-- Hero -->
<section class="p-3 md-py-20 container-base">
  <div class="w-full mx-auto space-y-8 md-w-8/12">
    <h1 class="text-center">{homepageData?.heroTitle}</h1>
    <p class="w-full mx-auto text-center md-w-7/12">
      {@html homepageData?.heroSubtitle}
    </p>
    <div class="flex-s-center">
      <a href={homepageData?.heroCta[0].link} class="action-base w-fit"
        >{homepageData?.heroCta[0].text}</a
      >
    </div>

    <div class="flex-s-center gap-4">
      <AvatarsGroup
        avatars={homepageData?.heroTestimonialPictures.map(picture => ({
          src: picture.url,
          alt: String(picture.alt),
        }))}
      />
      <p class="text-xs">{homepageData?.heroTestimonialTitle}</p>
    </div>
  </div>
</section>

<!-- Popular Courses -->
{#if homepageData && homepageData?.popularCoursesRecords.length > 0}
  <section class="py-24 container-base space-y-11">
    <div class="flex-s-between gap-x-7">
      <h2>{homepageData?.popularCoursesTitle}</h2>

      <a
        href="/courses"
        class="flex-s-end w-4/12 gap-2 px-3 py-2 text-xs rounded-lg sm-w-auto hover-bg-gray-300"
      >
        <span>View All</span>
        <div class="p-0.125rem bg-gray-900 rounded-full">
          <div class="i-lucide-chevron-right text-white" />
        </div>
      </a>
    </div>

    <div class="grid gap-8 grid-cols-1 md-grid-cols-2 lg-grid-cols-3">
      {#each homepageData.popularCoursesRecords as course (course.id)}
        <CourseCard {course} />
      {/each}
    </div>
  </section>
{/if}

<!-- New Courses -->
{#if homepageData && homepageData?.newCoursesRecords.length > 0}
  <section class="py-24 container-base space-y-11">
    <div class="flex-s-between gap-x-7">
      <h2>{homepageData?.newCoursesTitle}</h2>

      <a
        href="/courses"
        class="flex-s-end w-4/12 gap-2 px-3 py-2 text-xs rounded-lg sm-w-auto hover-bg-gray-300"
      >
        <span>View All</span>
        <div class="p-0.125rem bg-gray-900 rounded-full">
          <div class="i-lucide-chevron-right stroke-white" />
        </div>
      </a>
    </div>

    <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {#each homepageData.newCoursesRecords as course (course.id)}
        <CourseCard {course} />
      {/each}
    </div>
  </section>
{/if}

<!-- Features -->
<section class="py-24 space-y-11">
  <div class="space-y-5 container-base">
    <h2 class="text-center">{homepageData?.featuresHeading[0].heading}</h2>

    <p class="mx-auto text-(sm center) md-w-4/12">
      {@html homepageData?.featuresHeading[0].subheading}
    </p>

    <div class="flex-s-center">
      <a href={homepageData?.featuresCta[0].link} class="action-base w-fit"
        >{homepageData?.featuresCta[0].text}</a
      >
    </div>
  </div>

  <div class="grid grid-cols-2 gap-8 sm:gap-16 lg:grid-cols-3 container-sm">
    {#if homepageData && homepageData?.featureCards.length > 0}
      {#each homepageData.featureCards as card}
        <div class="space-y-4">
          <img src={card.media?.url} alt={card.media?.alt} loading="lazy" class="w-5 h-5" />

          <!-- TODO: FIGURE OUT THE CAUSE OF THIS TYPE ERROR -->
          <!-- prettier-ignore -->
          <StructuredText
            richText={card.content[0]
            // @ts-ignore            
            .richText}
          />
        </div>
      {/each}
    {/if}
  </div>
</section>

<!-- Learn About Us  -->
<section class="flex flex-col items-center justify-between gap-24 py-24 sm:flex-row container-base">
  <div class="flex flex-col gap-4 space-y-6">
    <div class="w-full space-y-5">
      <h2 class="md-(tracking-tighter w-1/2)">
        {homepageData?.about[0].title}
      </h2>

      <div>
        <!-- TODO: FIGURE OUT THE CAUSE OF THIS TYPE ERROR -->
        <!-- prettier-ignore -->
        <StructuredText richText={homepageData?.about[0].content[0]
        // @ts-ignore
        .richText} class="md:w-8/12" />
      </div>
    </div>

    <a href={homepageData?.about[0].cta[0].link} class="action-base w-fit">
      {homepageData?.about[0].cta[0].text}
    </a>
  </div>

  <div class="">
    <!-- TODO: UNCOMMENT THIS -->
    <!-- <img
      src={homepageData?.about[0].media?.url}
      alt={homepageData?.about[0].media?.alt}
      loading="lazy"
      class=""
    /> -->
  </div>
</section>

{#if homepageData && homepageData?.multipleTestimonials.length > 0}
  <HomeTestimonials />
{/if}

<section class="flex flex-col items-center py-24 container-base space-y-11 md-flex-row">
  <div class="space-y-3 md-(space-y-6 w-1/2)">
    <h2 class="md-(text-7xl tracking-tighter)">
      {homepageData?.statsHeading?.[0]?.heading}
    </h2>
    <a href={homepageData?.statsAction[0].link} class="action-base w-fit md-text-base">
      {homepageData?.statsAction[0].text}
    </a>
  </div>

  {#if homepageData && homepageData?.statsData.length > 0}
    <div class="space-y-12">
      {#each homepageData.statsData as stat, i}
        <div class={`flex-s-evenly ${i % 2 !== 0 ? "flex-row-reverse" : ""}`}>
          <img
            class="w-5/12"
            src={homepageData.statsImages[i].url}
            alt={homepageData.statsImages[i].alt}
          />
          <p>
            <span class="text-2xl">{stat.heading}</span>
            {@html stat.subheading}
          </p>
        </div>
      {/each}
    </div>
  {/if}
</section>

<!-- FAQ -->
<section class="py-24 text-center space-y-11 container-base" id="faq">
  <div class="space-y-5">
    <h2>{homepageData?.faqHeading[0].heading}</h2>

    <p class="mx-auto text-sm md-w-4/12">
      {@html homepageData?.faqHeading[0].subheading}
    </p>
  </div>

  {#if homepageData && homepageData.faq?.faqBlocks && homepageData.faq.faqBlocks.length > 0}
    <div class="mx-auto md-w-6/12">
      <FaqAccordion
        itemIds={homepageData.faq.faqBlocks.map(faq => faq.id)}
        titles={homepageData.faq.faqBlocks.map(faq => faq.question || "")}
        richTexts={homepageData.faq.faqBlocks.map(faq => faq.answer[0].richText)}
      />
    </div>
  {/if}
</section>

<!-- CTA -->
<section class="container-base relative">
  <div class=" m-auto space-y-5 bg-night rounded-2xl h-96 w-full">
    <div class="p-12 flex flex-col gap-10 md-(p-8 w-34rem)">
      <h2 class="text-(white 2xl) sm-(break-words w-5/12) md-(text-2.75rem/3.3rem w-full)">
        Empower your financial future, today.
      </h2>
      <a href="/" class="action-white w-fit">View our courses</a>
    </div>
    <img
      src={Circle1}
      alt="Circle 1"
      class="absolute s-16 bottom-3 left-20 md-(left-28rem top-20 s-20) lg-left-50rem"
    />
    <img
      src={Circle2}
      alt="Circle 2"
      class="absolute s-20 bottom-28 right-24 md-(top-48 right-36 s-28) lg-(right-48 top-40)"
    />
    <img
      src={Triangle}
      alt="Triangle"
      class="absolute w-24 h-28 bottom-0 right-4 md-(s-40 right-4)"
    />
  </div>
</section>
