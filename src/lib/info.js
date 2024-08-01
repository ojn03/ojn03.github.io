import ll from "public/PreviewLens.webp";
import arnold from "public/DALLE_VAN_GOGH_1.webp";
import impDemo from "public/IMPDEMO.webp";
import sitedemo from "public/sitedemo.webp";

export const projects = [
  {
    infoPath: "",
    title: "Little Lens",
    short:
      "An image sharing application (like Pinterest); Post and save images, comment, and share. Built with React and Sanity.io\n\n",
    description: "Long description",
    image: ll,
    link: "https://littlelensv1.netlify.app/",
    repo: "https://github.com/ojn03/littleLens",
    technologies: ["React", "Tailwind CSS", "Sanity.io"],
  },
  {
    infoPath: "",
    title: "ojn.me",
    short:
      "My personal portfolio (this website). Built with Nextjs and Framer Motion",
    description: "Long description",
    image: sitedemo,
    link: "/",
    repo: "https://github.com/ojn03/portfolio",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
  },
  {
    infoPath: "",
    title: "Polished Pixels",
    short:
      "An image processor; Import and export images in any format, and apply 11 different filters. Built with Java and Swing",
    description: "Long description",
    image: impDemo,
    link: "",
    repo: "",
    technologies: ["Java", "Swing"],
  },
  {
    infoPath: "",
    title: "Arnold the Astronaut",
    short:
      "A twitter bot that likes astronomy. Built using Twitter API, NASA API, and Twitter4J",
    description: "Long description",
    image: arnold,
    link: "",
    repo: "",
    technologies: ["twitter API", "NASA API", "twitter4j"],
  },
  // {    infoPath: '',
  //     title: 'Candid Conversations ',
  //     short: 'a demo chat application',
  //     description: 'Long description',
  //     image: 'https://picsum.photos/200/300',
  //     link: 'https://picsum.photos/200/300',
  //     repo: '',
  //     technologies: ['React', 'Next.js', 'Tailwind CSS']
  // },
  // {    infoPath: '',
  //     title: 'Resume Scraper',
  //     short: 'a resume parser',
  //     description: 'Long description',
  //     image: 'https://picsum.photos/200/300',
  //     link: 'https://picsum.photos/200/300',
  //     repo: '',
  //     technologies: ['Python', 'Regex', 'Numpys', 'Pandas']

  // },
  // {    infoPath: '',
  //     title: 'bug tracker',
  //     short: 'A project management tool',
  //     description: 'Long description',
  //     image: 'https://picsum.photos/200/300',
  //     link: 'https://picsum.photos/200/300',
  // git : '',
  //     technologies: ['NextJs', 'Tailwind CSS', 'MongoDB', 'Express', 'Node.js', 'PostgreSQL',]

  // },
  // {    infoPath: '',
  //     title: 'path finder',
  //     short: 'an interactive path finding visualizer',
  //     description: 'a tool demonstrates different path finding algorithms',
  //     image: 'https://picsum.photos/200/300',
  //     link: 'https://picsum.photos/200/300',
  // git : '',
  //     technologies: ['Next.js', 'Tailwind CSS']

  // },
];

export const experiences = [
  //C4C NEU
  //GENERATE
  //Computer Systems TA

  {
    position: "Software Engineer Intern",
    company: "Okta",
    location: "San Francisco, CA",
    date: "Summer 2024",
    link: "https://www.okta.com/",
    description: "Implemented Opentelemetry to enable observability in Okta Identity Pipeline",
  },
  {
    position: "Technical Lead",
    company: "Code4Community",
    location: "Boston, MA",
    date: "Summer 2024 - Present",
    link: "https://www.okta.com/",
    description: "Leading development of an internal recruiting portal for C4C applicants",
  },
  {
    position: "Software Engineer",
    company: "Generate",
    location: "Boston, MA",
    date: "Fall 2024 - Spring 2024",
    link: "https://generatenu.com/",
    description: "Developed SAC, a university wide club management platform. Also developed Compound, a financial literacy application ",
  },

  {
    position: "Resident Assistant",
    company: "Northeastern University",
    description:
      "Enforced safety and well-being of 60+ residents. Planned and hosted events to build community and foster a sense of belonging. Provided resources and support to residents. ",
    location: "Boston, MA",
    date: "Fall 2023 - Present",
    // link: "https://example.com",
  },

  {
    position: "NEU Summer Bridge Mentor",
    company: "Northeastern University",
    description:
      "Helped lead a group of over 300 incoming freshman towards their transition into college life at NEU. Directly mentored a group of 6 menteess, teaching  about the resources available at Northeastern and how to navigate the campus.",
    location: "Boston, MA",
    date: "Summer 2023",
    link: "https://admissions.northeastern.edu/academics/summer-bridge/",
  },

  {
    position: "Discrete Structures TA",
    company: "Khoury College",
    description:
      "Assisted in teaching Discrete structures concepts such as combinations, graphs, and logical statements. Hosted office hours where I tutored students 1v1 and in groups. Helped grade assignments and exams, as well as review sessions for student exams. ",
    location: "Boston, MA",
    date: "Fall - Winter 2022",
    link: "https://www.khoury.northeastern.edu/",
  },
  {
    position: "Development Research Assistant",
    company: "Northeastern University",
    description:
      "Aided reasearch efforts by categorizing and analyzing existing data. Wrote scripts in python to automate data collection and analysis.",
    location: "Boston, MA",
    date: "Fall 2021 - Spring 2023",
    link: "https://research.northeastern.edu/",
  },
  {
    position: "Robotics Club",
    company: "Jack E Singley Academy",
    description:
      "Helped design, code, and build robots capable of navigating different environments and performing actions such as shooting a ball at a target or stacking blocks. Implemented autonomous systems as well as user controlled. Led a team to compete in VEX Robotics and FIRST Robotics Competitions.",
    location: "Irving, TX",
    date: "2017 - 2021",
    link: "https://www.irvingisd.net/SINGLEY",
  },
  {
    position: "Merit Badge Counselor",
    company: "Circle Ten Council",
    description:
      "Created interactive lessons and actvities and led younger scouts to help them earn merit badges.",
    location: "Grayford, TX",
    date: "Summer 2019 - 2021",
    technologies: ["tech1", "tech2", "tech3"],
    link: "https://circleten.org/posts/29098/camp-constantin",
  },
];
