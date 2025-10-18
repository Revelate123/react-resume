import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import {FaAws,FaGitAlt,FaPython} from "react-icons/fa";
import {FaDocker} from "react-icons/fa6";
import {FcLinux} from "react-icons/fc";
import {IoLogoJavascript} from "react-icons/io5";
import {RiReactjsLine,RiTailwindCssFill} from "react-icons/ri";
import {SiMongodb,SiPostgresql} from "react-icons/si";

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
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
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        🥝 based in <strong className="text-stone-100">Sydney</strong> studying a  <strong className="text-stone-100">Master's of IT</strong> @ <strong className="text-stone-100">UNSW</strong>.
        
      </p>
      
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
      text: 'View resume',
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
    {label: 'Nationality', text: 'New Zealander', Icon: FlagIcon},
    {label: 'Interests', text: 'Rowing, Reading', Icon: SparklesIcon},
    {label: 'Study', text: 'University of New South Wales', Icon: AcademicCapIcon}
    ,
  ],
};

/**
 * Skills section
 */
export const skill: Skill = {
  skillData: [
  {
    name: "React",
    icon: RiReactjsLine,
    colour: "text-cyan-400 "
  },
  {
    name: "Python",
    svg: "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png",
    icon: FaPython
  },

  {
    name: "Javascript",
    svg:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png?20141107110902",
    icon: IoLogoJavascript,
    colour: "text-[#F0DB4F] bg-black"
  },
  {
    name: "AWS",
    svg:"//upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png",
    icon: FaAws
  },
  {
    name: "SQL",
    svg:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/810px-Postgresql_elephant.svg.png",
    icon: SiPostgresql
  },
  {
    name: "Linux",
    icon: FcLinux
   
  },
  {
    name: "Docker",
    icon: FaDocker,
    colour:"text-[#1D63ED]"
  },
  {
    name: "MongoDB",
    svg:"https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
    icon: SiMongodb,
    colour: "text-green-500"
  },
  {
    name: "Git",
    svg:"https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    icon: FaGitAlt
  },
  {
    name: "TailwindCSS",
    svg:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042",
    icon: RiTailwindCssFill
  },
],
};

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Restaurant Recommender',
    description: 'Give a short description of your project here.',
    url: '/restaurant',
    image: porfolioImage1,
  },
  {
    title: 'Seek 2',
    description: 'Give a short description of your project here.',
    url: 'http://localhost:2080',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2024 - current',
    location: 'University of New South Wales',
    title: 'Master of Information Technology',
    content: <p>WAM: 89.000</p>,
  },
  {
    date: '2017 - 2021',
    location: 'University of Auckland',
    title: 'Bachelor of Engineering (Honours)',
    content: (
        <ul className="list-disc list-inside">
        <li>Graduated with 1st class honours.</li>
        <li>Specialized in structural engineering.</li>
      </ul>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2024 - current',
    location: 'Dennis Bunt Consulting Engineers',
    title: 'Structural Engineer',
    content: (
      <p >
        <p>Design alterations and remediations for heritage structures in/around Sydney.</p>
        <p>Design advertising sign structures (think billboards)</p>
      </p>
    ),
  },
  {
    date: 'July 2022 - June 2024',
    location: 'Northrop Consulting Engineers',
    title: 'Structural Engineer',
    content: (
      <p>
        Worked as part of a tight-knit team of structural engineers and draftspeople.
        Designed and managed construction of residential housing, commercial buildings, farmsheds,
        and public infrastructure works.
      </p>
    ),
  },
  {
    date: 'November 2021 - July 2022',
    location: 'Dreamcast',
    title: 'Graduate Structural Engineer',
    content: (
      <p>
        Designed affordable residential housing in New Zealand.
      </p>
    ),
  },
  {
    date: 'December 2020 - August 2021',
    location: 'University of Auckland',
    title: 'Research Assistant',
    content: (
      <p>
        Designed affordable residential housing in New Zealand.
      </p>
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
      text: "Hi Thomas,\nI am afraid I don't have the authority to disclose any ranking information. Thanks for your understanding. However, personally speaking, if I were to recommend three students from COMP24 24T3 to be tutors, you would definitely be one of them.",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
  ],
};

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
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/thomasduffett/'}
];
