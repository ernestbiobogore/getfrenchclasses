const deSlugify = (slug: string) => {
	const words = slug.split("-");
	return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
};

const DEFAULT_VERIFIED_DESCRIPTION =
	"One of our best tutors. Quality profile, experience in their field, verified qualifications and a great response time. Anna will be happy to arrange your first French lesson.";

export { DEFAULT_VERIFIED_DESCRIPTION, deSlugify };
