import { getAllCourses } from "$lib/graphql/queries/courses";
import { getHomePageData } from "$lib/graphql/queries/home";

export const load = async () => {
  return {
    homepageData: await getHomePageData(),
    newCourses: (await getAllCourses(3)).filter(course => course.tag === "new"),
    popularCourses: (await getAllCourses(3)).filter(course => course.tag === "popular"),
  };
};
