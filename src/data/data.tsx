import {AcademicCapIcon, ArrowDownTrayIcon, FlagIcon, MapIcon, SparklesIcon} from '@heroicons/react/24/outline';
import {FaAws, FaGitAlt, FaPython} from 'react-icons/fa';
import {FaDocker} from 'react-icons/fa6';
import {FcLinux} from 'react-icons/fc';
import {IoLogoJavascript} from 'react-icons/io5';
import {RiReactjsLine, RiTailwindCssFill} from 'react-icons/ri';
import {SiMongodb, SiPostgresql} from 'react-icons/si';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
//import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage3 from '../images/portfolio/Toms-Structures-dark-mode.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  LeadershipItem,
  PortfolioItem,
  Skill,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Thomas Duffett',
  description: "A showcase of Thomas Duffett's skills and experience",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Thomas Duffett`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">Master's of IT student @ UNSW.</p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
  resumeDownload: [
    {
      cv: '/static/Thomas Duffett CV Software Engineer.pdf',
      text: 'View CV',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ``,
  aboutItems: [
    {label: 'Location', text: 'Sydney, NSW, Australia', Icon: MapIcon},
    {label: 'Nationality', text: 'New Zealand / Ireland', Icon: FlagIcon},
    {label: 'Interests', text: 'Rowing, Reading', Icon: SparklesIcon},
    {label: 'Study', text: 'University of New South Wales', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skill: Skill = {
  skillData: [
    {
      name: 'Python',
      svg: 'https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png',
      icon: FaPython,
      href: 'https://www.python.org/',
    },
    {
      name: 'C++',
      svg: '//upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/250px-ISO_C%2B%2B_Logo.svg.png',
      icon: SiMongodb,
      colour: 'text-green-500',
      href: 'https://en.wikipedia.org/wiki/C%2B%2B',
    },
    {
      name: 'Javascript',
      svg: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      icon: IoLogoJavascript,
      colour: 'text-[#F0DB4F] bg-black',
      href: 'https://nodejs.org/en',
    },
    {
      name: 'AWS',
      svg: '//upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png',
      icon: FaAws,
      href: 'https://aws.amazon.com/',
    },
    {
      name: 'SQL',
      svg: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Logo_PostgreSQL.png',
      icon: SiPostgresql,
      href: 'https://sqlite.org/index.html',
    },
    {
      name: 'Linux',
      icon: FcLinux,
      href: 'https://ubuntu.com/download',
    },
    {
      name: 'Docker',
      icon: FaDocker,
      colour: 'text-[#1D63ED]',
      href: 'https://www.docker.com/',
    },
    {
      name: 'React',
      icon: RiReactjsLine,
      colour: 'text-cyan-400 ',
      href: 'https://react.dev',
    },
    {
      name: 'Git',
      svg: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
      icon: FaGitAlt,
      href: 'https://git-scm.com/',
    },
    {
      name: 'TailwindCSS',
      svg: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
      icon: RiTailwindCssFill,
      href: 'https://tailwindcss.com/',
    },
  ],
};

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Toms-structures - 2025',
    description: 'A Python library for Australian structural engineers designing masonry structures',
    url: 'https://github.com/Revelate123/structures',
    image: porfolioImage3,
  },
  {
    title: 'Flet - 2024 [archived]',
    description:
      'My first ever web app, a secure login web app hosted on AWS allowing users to query Google’s VertexAI and integrated with Google Maps to provide location based recommendations',
    url: 'https://github.com/Revelate123/Flet',
    image: porfolioImage1,
  },
  {
    title: 'Seek 2 - 2024 [archived]',
    description:
      'Used web scraping to gather information from seek.com. Stored results into a database and presented to the user in a modified clone of seek.com for querying and automated frequency analysis',
    url: 'https://github.com/Revelate123/Seek2',
    image: porfolioImage2,
  },
  /*{
    title: 'PicoOS - 2025',
    description: 'A miniature operating system on the raspberry pi pico',
    url: 'https://github.com/Revelate123/PicoOS',
    image: porfolioImage4,
  },*/
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Aug. 2024 - present',
    location: "Master's of Information Technology | WAM 89.875",
    title: 'University of New South Wales',
    content: (
      <div>
        <ul className="list-disc list-inside">
          <li>Maintaining a High Distinction WAM</li>
          <li>
            Notable Courses: Data structures & Algorithms (98%), Advanced C++ (96%), Microprocessors & Interfacing (96%)
          </li>
        </ul>
      </div>
    ),
  },
  {
    date: 'Mar. 2017 - Nov. 2021',
    location: 'Bachelor of Engineering (Honours) | 1st Class Honours',
    title: 'University of Auckland',
    content: (
      <ul className="list-disc list-inside">
        <li>Awards: Summer Research Scholarship.</li>
      </ul>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Nov. 2021 - Present',
    location: 'DBCE, Northrop, Dreamcast',
    title: 'Structural Engineer',
    content: (
      <ul className="list-disc list-inside">
        <li>Directed a large scale design project, coordinating architects, drafters, and construction workers</li>
        <li>Acquired in depth project management and conflict resolution experience</li>
      </ul>
    ),
  },

  {
    date: 'Dec. 2020 - Sep. 2021',
    location: 'University of Auckland',
    title: 'Research Assistant',
    content: (
      <ul className="list-disc list-inside">
        <li>
          Assisted research in determining the drift capacity of reinforced concrete shear walls in an earthquake.
        </li>
        <li>Used MATLAB to analyse test data.</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Data Structures & Algorithms Professor',
      text: 'If I were to recommend three students from COMP9024 24T3 to be tutors, you would definitely be one of them.',
    },
    {
      name: 'COMP9032 Groupmate',
      text: "That was the most efficient group meeting I've ever had",
    },
    {
      name: 'Also COMP9032 Groupmate',
      text: "I swear you've got a debugger in your head",
    },
  ],
};

export const Leadership: LeadershipItem[] = [
  {
    date: 'Jul. 2024 - Dec. 2024',
    location: 'President',
    title: 'Coffs Harbour Toastmasters',
    content: (
      <ul className="list-disc list-inside">
        <li>Led and managed the club, held regular committee meetings, delegated tasks amongst committee members.</li>
        <li>Mentored members to improve their public speaking and leadership skills.</li>
      </ul>
    ),
  },
  {
    date: 'Jul. 2021 - Jun. 2022',
    location: "Men's Captain",
    title: 'Auckland University Boat Club',
    content: (
      <ul className="list-disc list-inside">
        <li>
          Led a team of 30 men, directed training sessions, coordinated team activities, and motivated the squad to
          achieve competitive success culminating in multiple national varsity titles.
        </li>
      </ul>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Send me an email or leave a message!',
  items: [
    {
      type: ContactType.Email,
      text: 'thomasduffett4@gmail.com',
      href: 'mailto:thomasduffett4@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Sydney NSW, Australia',
      href: 'https://www.google.com/maps/place/Sydney',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Thomas Duffett',
      href: 'https://www.linkedin.com/in/thomasduffett/',
    },
    {
      type: ContactType.Github,
      text: 'Revelate123',
      href: 'https://github.com/Revelate123',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Revelate123'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/thomasduffett/'},
];
