import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Dominick",
  lastName: "Monaco",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/profile-pictures/ProfilePicWhite.png",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/HoldUpFjord",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/dominick-j-monaco/",
  },
  {
    name: "BlueSky",
    icon: "butterfly",
    link: "https://bsky.app/profile/dominick-j-monaco.bsky.social",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/DominickJMonaco",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:dominick.monaco2@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer and builder.</>,
  subline: (
    <>
      I'm Dominick, a community oriented fullstack engineer at{" "}
      <InlineCode>GridIron Survivor</InlineCode>, where I'm building the next
      generation of NFL survivor pools.
      <br /> After hours, I'm working on{" "}
      <a href="https://github.com/Solitude-Software-Solutions/OstrichDB">
        {" "}
        OstrichDB
      </a>
      .
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/dominickjmonaco",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Dominick is a US-based engineer with a passion for solving business
        problems; software is simply the tool.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "GridIron Survivor",
        timeframe: "2024 - Present",
        role: "Web Engineer",
        achievements: [
          <>Expanded test coverage by 10%.</>,
          <>
            Won an internal hackathon with a AI-powered Secret Santa product.
          </>,
          <>
            Implemented new features and expanded clean code across the
            codebase.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/gis-homepage.png",
            alt: "GridIron Survivor",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Freelance",
        timeframe: "2023 - 2024",
        role: "Fullstack Developer",
        achievements: [
          <>
            Built a fullstack proof of concept MVP including Stripe Integration,
            Video chatm=, and activity feed features.
          </>,
          <>
            Refactored Shopify SPA's running on Native Web APIs. Decreased bug
            reports by 30%.
          </>,
        ],
        images: [],
      },
    ],
  },

  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Typescript/Javascript/Node.JS",
        description: (
          <>
            Passionate about static-debugging tools and Type Safety on both
            sides of the stack; frontend and backend.{" "}
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/uwell-dash.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Working on a variety of next gen apps in modern NextJS.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about tech and community...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work };
// gallery
