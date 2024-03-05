<script lang="ts">
	import TutorLocation, {
		getTutorsLocation,
	} from "$routes/(site)/tutors/[...location]/TutorLocation.svelte";
	import type { Section as InternalLinkSection } from "$lib/components/InternalLinks.svelte";

	export let data;

	const howWeHelpYou: any[] = Array.from({ length: 3 }).fill({
		img: "",
		title: "Get high quality articles in minutes, not weeks",
	});

	const logoList: any[] = Array.from({ length: 6 }).fill({
		logo: {
			url: "https://picsum.photos/200/300",
			alt: "Company logo",
		},
	});

	const internalLinkSections: InternalLinkSection[] = [
		{
			title: "By City",
			links: [
				{ label: "New York", path: "/new-york" },
				{ label: "Washington", path: "/new-york/washington" },
				{ label: "Ohio", path: "/florida/ohio" },
			],
		},
		{
			title: "Section 2",
			links: [
				{ label: "Link 4", path: "/link4" },
				{ label: "Link 5", path: "/link5" },
				{ label: "Link 6", path: "/link6" },
			],
		},
		{
			title: "Section 3",
			links: [
				{ label: "Link 7", path: "/link7" },
				{ label: "Link 8", path: "/link8" },
				{ label: "Link 9", path: "/link9" },
			],
		},
	];
</script>

<svelte:head>
	<title>Tutors in {getTutorsLocation(data.locations)} / Get French Classes</title>
</svelte:head>

<TutorLocation {data} {howWeHelpYou} {logoList} {internalLinkSections} />
