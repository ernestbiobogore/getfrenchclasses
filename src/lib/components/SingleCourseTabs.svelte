<script lang="ts">
  import { Tabs } from "bits-ui";

  const triggers = [
    { id: "triggerA", text: "About" },
    { id: "triggerB", text: "What you'll learn" },
    { id: "triggerC", text: "Syllabus" },
  ];
</script>

<Tabs.Root class="space-y-8 root">
  <Tabs.List class="flex gap-4">
    {#each triggers as { id, text }}
      <Tabs.Trigger
        value={id}
        class="py-2 px-3 text-xs font-medium rounded-[0.625rem] data-[state=active]:bg-platinum"
        >{text}</Tabs.Trigger
      >
    {/each}
  </Tabs.List>

  <Tabs.Content value={triggers[0].id}>
    <p>
      The Real Estate Investing Secrets course is designed to unveil the strategies and techniques
      used by successful real estate investors to build wealth through property investments. Whether
      you're a beginner or have some real estate experience, this course will provide you with
      valuable insights and practical knowledge to navigate the real estate market with confidence.
      From identifying lucrative opportunities to financing and managing properties, this course
      equips you with the secrets to achieve success in real estate investing.
    </p>
  </Tabs.Content>

  <Tabs.Content value={triggers[1].id}>
    <ul class="list-disc">
      <li>Understand the importance of retirement planning and the key factors to consider.</li>
      <li>
        Learn how to calculate your retirement savings needs based on your desired lifestyle and
        retirement goals..
      </li>

      <li>
        Explore different retirement savings vehicles, such as 401(k)s, IRAs, and annuities, and
        understand their benefits and limitations..
      </li>

      <li>
        Gain insights into investment strategies tailored for retirement, including asset allocation
        and diversification..
      </li>

      <li>Learn how to maximize Social Security benefits and other retirement income sources..</li>

      <li>Understand healthcare and long-term care considerations in retirement.</li>
    </ul>
  </Tabs.Content>

  <Tabs.Content value={triggers[2].id}>
    <div>
      <p class="font-bold">Module 1: Introduction to Retirement Planning</p>
      <ul class="list-disc">
        <li>Understanding the importance of retirement planning and setting financial goals</li>
        <li>Assessing your current financial situation and retirement readiness</li>
      </ul>
    </div>

    <div>
      <p class="font-bold">Module 2: Introduction to Retirement Planning</p>
      <ul class="list-disc">
        <li>Understanding the importance of retirement planning and setting financial goals</li>
        <li>Assessing your current financial situation and retirement readiness</li>
      </ul>
    </div>

    <div>
      <p class="font-bold">Module 7: Introduction to Retirement Planning</p>
      <ul class="list-disc">
        <li>Understanding the importance of retirement planning and setting financial goals</li>
        <li>Assessing your current financial situation and retirement readiness</li>
      </ul>
    </div>
  </Tabs.Content>
</Tabs.Root>
