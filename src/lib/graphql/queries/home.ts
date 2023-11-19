import { client } from '$lib/graphql/client';

const getHomePageData = async () => {
	const home = await client.chain.query.homepage().get({
		id: true,
		_firstPublishedAt: true,
		title: true,

		// Hero
		heroTitle: true,
		heroSubtitle: true,
		heroCta: {
			text: true,
			link: true
		},
		heroTestimonialTitle: true,
		heroTestimonialPictures: {
			url: true,
			alt: true
		},

		// Popular courses
		popularCoursesTitle: true,
		popularCoursesRecords: {
			id: true,
			name: true,
			slug: true,
			duration: true,
			numberOfSections: true,
			level: true,
			price: true,
			seo: {
				seoBlock: {
					title: true,
					description: true,
					image: {
						url: true,
						alt: true
					}
				}
			}
		},

		// New courses
		newCoursesTitle: true,
		newCoursesRecords: {
			id: true,
			name: true,
			slug: true,
			duration: true,
			numberOfSections: true,
			level: true,
			price: true,
			seo: {
				seoBlock: {
					title: true,
					description: true,
					image: {
						url: true,
						alt: true
					}
				}
			}
		},

		// Features
		featuresHeading: {
			heading: true,
			subheading: true
		},
		featuresCta: {
			text: true,
			link: true
		},
		featureCards: {
			title: true,
			image: {
				url: true,
				alt: true
			},
			content: {
				richText: {
					value: true
				}
			},
			cta: {
				text: true,
				link: true
			}
		},

		// Single testimonial
		singleTestimonial: {
			title: true,
			image: {
				url: true,
				alt: true
			},
			content: {
				richText: {
					value: true
				}
			},
			cta: {
				text: true,
				link: true
			}
		},

		// Multiple testimonials
		multipleTestimonials: {
			title: true,
			image: {
				url: true,
				alt: true
			},
			content: {
				richText: {
					value: true
				}
			},
			cta: {
				text: true,
				link: true
			}
		},

		// Stats
		statsHeading: {
			heading: true,
			subheading: true
		},
		statsAction: {
			text: true,
			link: true
		},
		statsImages: {
			url: true,
			alt: true
		},
		statsData: {
			heading: true,
			subheading: true
		},

		// FAQ
		faqHeading: {
			heading: true,
			subheading: true
		},
		faq: {
			title: true,
			answer: {
				question: true,
				answer: {
					richText: {
						value: true
					}
				}
			}
		},

		// CTA
		ctaHeading: {
			heading: true,
			subheading: true
		},
		ctaAction: {
			text: true,
			link: true
		},

		// SEO
		seo: {
			seoBlock: {
				title: true,
				description: true,
				image: {
					url: true,
					alt: true
				}
			}
		}
	});

	return home;
};

export { getHomePageData };
