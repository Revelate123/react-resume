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
import InstagramIcon from '../components/Icon/InstagramIcon';
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
  name: `I'm Thomas Duffett.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm based in <strong className="text-stone-100">Sydney</strong> and currently studying a  <strong className="text-stone-100">Master's</strong> of <strong className="text-stone-100">Information Technology</strong> at The University of New South Wales, <strong className="text-stone-100">UNSW</strong>.
        
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
  description: `I'm a structural engineer studying computer science. After working in construction, I realized I enjoyed programming more and decided to pursue it full-time. I’m currently earning a master’s in IT, building my skills in software development.`,
  aboutItems: [
    {label: 'Location', text: 'Sydney, NSW, Australia', Icon: MapIcon},
    {label: 'Age', text: '26', Icon: CalendarIcon},
    {label: 'Nationality', text: 'New Zealander', Icon: FlagIcon},
    {label: 'Interests', text: 'Rowing, Surf Rowing, Reading', Icon: SparklesIcon},
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
    content: <p>Specialising in Cyber Security.</p>,
  },
  {
    date: '2017 - 2021',
    location: 'University of Auckland',
    title: 'Bachelor of Engineering (Honours)',
    content: <p>Graduated with a 1st class honours.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2024 - current',
    location: 'Dennis Bunt Consulting Engineers',
    title: 'Structural Engineer',
    content: (
      <p>
        Current place of employement, while I complete my studies.
      </p>
    ),
  },
  {
    date: 'July 2022 - June 2024',
    location: 'Northrop Consulting Engineers',
    title: 'Structural Engineer',
    content: (
      <p>
        My first job in Australia. Located in Coffs Harbour, NSW.
      </p>
    ),
  },
  {
    date: 'November 2021 - July 2022',
    location: 'Dreamcast',
    title: 'Graduate Structural Engineer',
    content: (
      <p>
        My introduction to the world of structural engineering
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
      type: ContactType.Instagram,
      text: '@t.duff123',
      href: 'https://www.instagram.com/t.duff123/',
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
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/t.duff123/'},
];
