import { client } from "$lib/graphql/client";

const getCoursesSlugs = async () => {
  const { allCourses } = await client.query({
    allCourses: {
      slug: true,
      _updatedAt: true,
    },
  });

  return allCourses;
};

const getAllCourses = async (first?: number) => {
  const { allCourses } = await client.query({
    allCourses: {
      __args: {
        first,
      },
      id: true,
      name: true,
      slug: true,

      // Info
      price: true,
      duration: true,
      numberOfSections: true,
      level: true,
      numberOfEnrolledStudents: true,
      tag: true,

      // SEO
      seo: {
        seoBlock: {
          title: true,
          description: true,
          image: {
            url: true,
            alt: true,
          },
        },
      },
    },
  });

  return allCourses;
};

const getCourseBySlug = async (slug: string) => {
  const { course } = await client.query({
    course: {
      __args: {
        filter: {
          slug: {
            eq: slug,
          },
        },
      },
      id: true,
      name: true,
      slug: true,

      // Info
      price: true,
      duration: true,
      numberOfSections: true,
      level: true,
      numberOfEnrolledStudents: true,
      tag: true,

      // FAQ
      faq: {
        title: true,
        faqBlocks: {
          id: true,
          question: true,
          answer: {
            richText: {
              value: true,
            },
          },
        },
      },

      // Features
      featuresCards: {
        media: {
          url: true,
          alt: true,
        },
        content: {
          richText: {
            value: true,
          },
        },
      },

      // Single testimonial
      singleTestimonial: {
        title: true,
        image: {
          url: true,
          alt: true,
        },
        content: {
          richText: {
            value: true,
          },
        },
        author: true,
        company: true,
      },

      // SEO
      seo: {
        seoBlock: {
          title: true,
          description: true,
          image: {
            url: true,
            alt: true,
          },
        },
      },
    },
  });

  return course;
};

export { getAllCourses, getCourseBySlug, getCoursesSlugs };
