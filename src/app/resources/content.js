import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Dominick",
  lastName: "Monaco",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/profile-pictures/avatar.jpg",
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
      <a
        href="https://github.com/Solitude-Software-Solutions/OstrichDB"
        target="_blank"
      >
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
          <>
            Collaborated with a cross-functional team of 10, including
            developers and designers, to improve UX and test coverage.
          </>,
          <>Improved UI to increase user rentention rates on platform.</>,
          <>Expanded Unit Test coverage by 15% in Jest.</>,
          <>Refactored sidebar list items into reusable components.</>,
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
            Video chat built on top of Zoom's Video SDK, and activity feed
            features.
          </>,
          <>
            Refactored Shopify SPA's running on Native Web APIs. Decreased bug
            reports by 30%.
          </>,
        ],
        images: [],
      },
      {
        company: "Disco",
        timeframe: "2023 - 2023",
        role: "Fullstack Web Developer",
        achievements: [
          <>
            Contributed 5 components to a gen-ai product in the newsletter
            space.
          </>,
        ],
        images: [],
      },
      {
        company: "Protect our Winter UK",
        timeframe: "2023 - 2023",
        role: "Fullstack Developer",
        achievements: [
          <>
            Saved the company $500 a month by migrating hosting providers from
            Vercel to AWS.
          </>,
        ],
        images: [],
      },
      {
        company: "100Devs",
        timeframe: "2022 - 2022",
        role: "Software engineer",
        achievements: [<>Built 20+ static web pages for clients.</>],
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
            src: "/images/projects/project-01/climate-update.jpg",
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
            src: "/images/projects/project-01/elfgorithm-completed.mp4",
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

export { person, social, newsletter, home, about, blog, work };
