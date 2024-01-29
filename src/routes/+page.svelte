<script lang="ts">
  import "./+page.css"; // simpler than using <style> tags with global selectors

  import AvatarsGroup from "$lib/components/AvatarsGroup.svelte";
  import FaqAccordion from "$lib/components/FaqAccordion.svelte";
  import HomeTestimonials from "./_components/HomeTestimonials.svelte";
  import StructuredText from "$lib/components/dato/StructuredText/index.svelte";
  import TestimonialCardList from "$lib/components/TestimonialCardList.svelte";
  import TestimonialCta from "./_components/TestimonialCta.svelte";
  import { cn, getSampleAvatars } from "$lib/utils";

  import PhSmiley from "~icons/ph/smiley";

  export let data;
  $: ({ homepageData } = data);

  type TargetAudienceData = {
    icon: any;
    title: string;
    description: string;
  };

  const dummyVideo =
    "https://cdn.discordapp.com/attachments/1181304981576486962/1196953201669324901/Screen_Recording_2024-01-16_at_11.01.18_pm.mov?ex=65b98089&is=65a70b89&hm=2fbbd8a97dadc3e2b8fae343e65da65aa9bef9c0f863d77c370f92725af06402&";
  const dummyDesc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas distinctio dicta accusamus, explicabo similique recusandae?";

  let targetAudienceData: TargetAudienceData[] = [
    { icon: PhSmiley, title: "Students", description: dummyDesc },
    { icon: PhSmiley, title: "Professionals", description: dummyDesc },
    { icon: PhSmiley, title: "Travelers", description: dummyDesc },
    { icon: PhSmiley, title: "Students", description: dummyDesc },
    { icon: PhSmiley, title: "Professionals", description: dummyDesc },
    { icon: PhSmiley, title: "Travelers", description: dummyDesc },
  ];

  const howWeHelpYou: any[] = Array.from({ length: 3 }).fill({
    img: "",
    title: "Get high quality articles in minutes, not weeks",
  });

  const dummyTestimonialCta = {
    author: {
      name: "Filipa Canelas",
      avatar: getSampleAvatars()[0].src,
      title: "Founder",
      companies: ["Able-Academy"],
    },
    quote: `I've tried Jasper, CopyAI, ChatGPT and Rytr.
    Penfriend is 10x better. The output from Penfriend
    gives me a really solid foundation of content depth
    that I can improve upon, in 80% less time.
    The title suggestions are incredible, the outline is
    really solid and the content length and depth is
    IMPRESSIVE!`,

    video: dummyVideo,
  };
</script>

<svelte:head>
  <title>Get French Classes</title>
</svelte:head>

<!-- HERO -->
<section class="p-3 md:py-20 container-base">
  <div class="w-full mx-auto space-y-6 md:max-w-3xl">
    <h1 class="text-">{homepageData?.heroTitle}</h1>
    <p class="hero-subtitle">
      {@html homepageData?.heroSubtitle}
    </p>

    <!-- CTA BUTTON -->
    <a href={homepageData?.heroCta[0].link} class="action-base w-full text-lg"
      >{homepageData?.heroCta[0].text}</a
    >

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

<!-- TESTIMONIAL VIDEO -->
<!-- TODO: ADD ARROW WITH TEXT DESCRIPTION POINTING TO VIDEO -->
<section class="container-sm max-w-3xl relative">
  <div class="p-2 bg-white shadow-2xl rounded-xl">
    <video class="w-full h-full rounded-lg" src={dummyVideo} controls>
      <track kind="captions" />
    </video>
  </div>
</section>

<!-- TARGET AUDIENCE -->
<section class="container-base flex flex-col gap-6 py-20">
  <h2 class="text-center">Who is GetFrenchClasses for?</h2>
  <p class="text-center mx-auto max-w-[46ch] md:max-w-[64ch]">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias numquam cupiditate soluta?
    Placeat accusamus iste eum deserunt explicabo. Quos!
  </p>

  <!-- CARDS LIST -->
  <div class="grid gap-6 max-md:max-w-sm max-md:mx-auto md:mt-8 md:grid-cols-2 lg:grid-cols-3">
    {#each targetAudienceData as info}
      <!-- CARD -->
      <div class="bg-white p-4 rounded-xl md:p-5">
        <!-- ICON -->
        <div class="relative mb-2">
          <!-- <div class="absolute top-0 left-0 -translate-y-8 md:-translate-y-9"> -->
          <svelte:component this={info.icon} class="text-3xl text-[#3EAED0]" />
          <!-- </div> -->
        </div>

        <div class="font-semibold mb-2 text-lg">{info.title}</div>
        <p class="text-gray-600">{info.description}</p>
      </div>
    {/each}
  </div>
</section>
<TestimonialCta {...dummyTestimonialCta} />

<section class="container-base">
  <TestimonialCardList />
</section>

<section class="container-base py-20 flex flex-col gap-6">
  <h2 class="text-center">How GetFrenchClasses helps you</h2>
  <p class="text-center mb-10 max-w-[46ch] md:max-w-[64ch] mx-auto">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore rerum sapiente nulla quasi
    assumenda.
  </p>

  <div class="max-md:max-w-sm max-md:mx-auto">
    {#each howWeHelpYou as item, i}
      <div
        class={cn(
          "flex flex-col max-md:gap-5 md:flex-row md:items-stretch",
          i % 2 !== 0 && "md:flex-row-reverse"
        )}
      >
        <div class="flex-1 flex-s-center">
          <div class="bg-red-400 lg:size-[400px]">
            <img
              class="object-cover object-center size-full"
              src="https://picsum.photos/200/300"
              alt=""
            />
          </div>
        </div>

        <div class="flex-1 flex items-center">
          <div>
            <h3>{item.title}</h3>
            <br />
            <p>
              Excellent freelance writers are rare, expensive, busy, and not dedicated to your
              company.
            </p>

            <p>
              Excellent freelance writers are rare, expensive, busy, and not dedicated to your
              company.
            </p>

            <p>
              Excellent freelance writers are rare, expensive, busy, and not dedicated to your
              company.
            </p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<TestimonialCta {...dummyTestimonialCta} />

<section class="container-base py-20 flex flex-col gap-6">
  <h2 class="text-center">Why choose GetFrenchClasses</h2>
  <p class="text-center mx-auto max-w-[46ch] md:max-w-[64ch]">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias numquam cupiditate soluta?
    Placeat accusamus iste eum deserunt explicabo. Quos!
  </p>
</section>

<!-- Features -->
<section class="py-24 space-y-11">
  <div class="space-y-5 container-base">
    <h2 class="text-center">{homepageData?.featuresHeading[0].heading}</h2>

    <p class="mx-auto text-sm text-center md:w-4/12">
      {@html homepageData?.featuresHeading[0].subheading}
    </p>

    <div class="flex-s-center">
      <a href={homepageData?.featuresCta[0].link} class="action-base w-fit"
        >{homepageData?.featuresCta[0].text}</a
      >
    </div>
  </div>

  <div class="container-sm grid grid-cols-2 gap-8 sm:gap-16 lg:grid-cols-3">
    {#if homepageData && homepageData?.featureCards.length > 0}
      {#each homepageData.featureCards as card}
        <div class="space-y-4">
          <img src={card.media?.url} alt={card.media?.alt} loading="lazy" class="size-5" />

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
<section class="container-base flex flex-col items-center justify-between gap-24 py-24 sm:flex-row">
  <div class="flex flex-col gap-4 space-y-6">
    <div class="w-full space-y-5">
      <h2 class="md:tracking-tighter md:w-1/2">
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

<section class="flex flex-col items-center py-24 container-base space-y-11 md:flex-row">
  <div class="space-y-3 md:space-y-6 md:w-1/2">
    <h2 class="md:text-7xl md:tracking-tighter">
      {homepageData?.statsHeading?.[0]?.heading}
    </h2>
    <a href={homepageData?.statsAction[0].link} class="action-base w-fit md:text-base">
      {homepageData?.statsAction[0].text}
    </a>
  </div>

  {#if homepageData && homepageData?.statsData.length > 0}
    <div class="space-y-12">
      {#each homepageData.statsData as stat, i}
        <div class="flex-s-evenly {i % 2 !== 0 ? 'flex-row-reverse' : ''}">
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

    <p class="mx-auto text-sm md:w-4/12">
      {@html homepageData?.faqHeading[0].subheading}
    </p>
  </div>

  {#if homepageData && homepageData.faq?.faqBlocks && homepageData.faq.faqBlocks.length > 0}
    <div class="mx-auto md:w-6/12">
      <FaqAccordion
        itemIds={homepageData.faq.faqBlocks.map(faq => faq.id)}
        titles={homepageData.faq.faqBlocks.map(faq => faq.question || "")}
        richTexts={homepageData.faq.faqBlocks.map(faq => faq.answer[0].richText)}
      />
    </div>
  {/if}
</section>

<TestimonialCta {...dummyTestimonialCta} />
