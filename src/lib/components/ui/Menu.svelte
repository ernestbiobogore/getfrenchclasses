<script lang="ts">
	import { createMenubar, melt } from '@melt-ui/svelte';

	const {
		elements: { menubar },
		builders: { createMenu }
	} = createMenubar();

	const {
		elements: { trigger, menu, item }
	} = createMenu();

	const {
		elements: { trigger: triggerA, menu: menuA, item: itemA }
	} = createMenu();

	const {
		elements: { trigger: triggerB, menu: menuB, item: itemB }
	} = createMenu();
</script>

<section class="container-base md:w-2/4">
	<div use:melt={$menubar} class="flex flex-row gap-7">
		<button use:melt={$trigger} class="hover:bg-gray-400 p-2 rounded-xl">About</button>
		<div use:melt={$menu}>
			<div {...$item} use:item>
				<p>
					The Retirement Planning Made Easy course is designed to help you navigate the complexities
					of retirement planning and ensure a financially secure future. Whether you're just
					starting to think about retirement or approaching your target retirement age, this course
					provides you with the knowledge and tools to create a comprehensive retirement plan.
				</p>
			</div>
		</div>

		<button use:melt={$triggerA} class="hover:bg-gray-400 p-2 rounded-xl">What you'll learn</button>
		<div use:melt={$menuA}>
			<div {...$itemA} use:itemA>
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
						Gain insights into investment strategies tailored for retirement, including asset
						allocation and diversification..
					</li>

					<li>
						Learn how to maximize Social Security benefits and other retirement income sources..
					</li>

					<li>Understand healthcare and long-term care considerations in retirement.</li>
				</ul>
			</div>
		</div>

		<button use:melt={$triggerB} class="hover:bg-gray-400 p-2 rounded-xl">Syllabus</button>
		<div use:melt={$menuB}>
			<div {...$itemB} use:itemB>
				<h2 class="text-2xl font-bold">Module 1: Introduction to Retirement Planning</h2>
				<ul class="list-disc list-inside">
					<li>Understanding the importance of retirement planning and setting financial goals</li>
					<li>Assessing your current financial situation and retirement readiness</li>
				</ul>
			</div>

			<div {...$itemB} use:itemB>
				<h2 class="text-2xl font-bold">Module 2: Introduction to Retirement Planning</h2>
				<ul class="list-disc">
					<li>Understanding the importance of retirement planning and setting financial goals</li>
					<li>Assessing your current financial situation and retirement readiness</li>
				</ul>
			</div>

			<div {...$itemB} use:itemB>
				<h2 class="text-2xl font-bold">Module 3: Introduction to Retirement Planning</h2>
				<ul class="list-disc">
					<li>Understanding the importance of retirement planning and setting financial goals</li>
					<li>Assessing your current financial situation and retirement readiness</li>
				</ul>
			</div>

			<div {...$itemB} use:itemB>
				<h2 class="text-2xl font-bold">Module 4: Introduction to Retirement Planning</h2>
				<ul class="list-disc list-inside">
					<li>Understanding the importance of retirement planning and setting financial goals</li>
					<li>Assessing your current financial situation and retirement readiness</li>
				</ul>
			</div>

			<div {...$itemB} use:itemB>
				<h2 class="text-2xl font-bold">Module 5: Introduction to Retirement Planning</h2>
				<ul class="list-disc list-inside">
					<li>Understanding the importance of retirement planning and setting financial goals</li>
					<li>Assessing your current financial situation and retirement readiness</li>
				</ul>
			</div>

			<div {...$itemB} use:itemB>
				<h2 class="text-2xl font-bold">Module 6: Introduction to Retirement Planning</h2>
				<ul class="list-disc list-inside">
					<li>Understanding the importance of retirement planning and setting financial goals</li>
					<li>Assessing your current financial situation and retirement readiness</li>
				</ul>
			</div>

			<div {...$itemB} use:itemB>
				<h2 class="text-2xl font-bold">Module 7: Introduction to Retirement Planning</h2>
				<ul class="list-disc list-inside">
					<li>Understanding the importance of retirement planning and setting financial goals</li>
					<li>Assessing your current financial situation and retirement readiness</li>
				</ul>
			</div>
		</div>
	</div>
</section>
