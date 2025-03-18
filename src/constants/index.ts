import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/ashishkumarmaurya/3d-portfolio",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AWS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

  
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Frontend Developer",
    company_name: "Wikisoft Technology",
    icon: meta, 
    iconBg: "#E6DEDD",
    date: "October 2023 - Present",
    points: [
      "Developing modern user interfaces using React.js and ensuring responsive design across all devices",
      "Refactoring and optimizing existing codebase to improve maintainability and performance",
      "Debugging and resolving frontend performance issues to enhance user experience",
      "Working with REST APIs and implementing state management solutions",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Self-Employed",
    icon: shopify, 
    iconBg: "#383E56",
    date: "May 2023 - September 2023",
    points: [
      "Built and deployed the SSG Computers website with modern UI/UX principles",
      "Developed Fares Journey website incorporating responsive design patterns",
      "Created an admin panel for a flight booking website with data visualization",
      "Implemented real-time chat application using WebSocket technology",
    ],
  },
  {
    title: "Frontend Development Intern",
    company_name: "Training Period",
    icon: tesla, 
    iconBg: "#E6DEDD",
    date: "January 2023 - April 2023",
    points: [
      "Learned and implemented modern frontend technologies including React.js",
      "Built practice projects focusing on responsive design and user experience",
      "Gained hands-on experience with version control using Git and GitHub",
      "Studied and implemented best practices in web development and coding standards",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Ashish developed an outstanding admin panel for our flight booking system. His attention to detail and focus on user experience greatly improved our operational efficiency.",
    name: "Rajesh Kumar",
    designation: "Project Manager",
    company: "Wikisoft Technology",
    image: user1,
  },
  {
    testimonial:
      "The real-time chat application Ashish built for us was exactly what we needed. His expertise in React.js and WebSocket implementation delivered a seamless communication platform.",
    name: "Priya Sharma",
    designation: "Product Owner",
    company: "SSG Computers",
    image: user2,
  },
  {
    testimonial:
      "Working with Ashish on our e-commerce website was a great experience. His responsive design work and attention to UI/UX details helped increase our customer engagement significantly.",
    name: "Amit Patel",
    designation: "Business Owner",
    company: "Fares Journey",
    image: user3,
  },
] as const;
export const PROJECTS = [
  {
    name: "Fares Journey",
    description:
      "A flight booking website that allows users to search, compare, and book flights with an intuitive and responsive UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
        
      },
      {
        name: "express",
        color: "red-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    // image: faresJourneyImage,
    source_code_link: "https://github.com/yourusername/fares-journey",
    live_site_link: "https://www.faresjourney.com/",
  },
  {
    name: "Chat Application",
    description:
      "A real-time chat application that allows users to send messages instantly with a smooth and engaging UI.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
          
        },
        {
          name: "express",
          color: "red-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
    // image: chatAppImage,
    source_code_link: "https://github.com/yourusername/chat-app",
    live_site_link: "https://ashishchat.netlify.app/",
  },
  {
    name: "Admin Panel (Flight Booking)",
    description:
      "A feature-rich admin dashboard for managing flight bookings, users, and data analytics.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
          
        },
        {
          name: "express",
          color: "red-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
    // image: adminPanelImage,
    source_code_link: "https://github.com/yourusername/admin-panel",
    live_site_link: "https://comfy-licorice-948dd0.netlify.app/",
  },
  {
    name: "SSG Computers",
    description:
      "A website for a refurbished laptop and accessories business, allowing customers to browse and purchase products.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
          
        },
        {
          name: "express",
          color: "red-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
    // image: ssgComputersImage,
    source_code_link: "https://github.com/yourusername/ssg-computers",
    live_site_link: "https://ssgcomputers.in/",
  },
  {
    name: "YouTube Clone",
    description:
      "A fully functional YouTube clone with video streaming, user authentication, and comment features.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
          
        },
        {
          name: "express",
          color: "red-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
    // image: youtubeCloneImage,
    source_code_link: "https://github.com/yourusername/youtube-clone",
    live_site_link: "https://your-youtube-clone-link.com/",
  },
  {
    name: "Full Stack Job Portal",
    description:
      "A full-stack job portal application where users can create profiles, post jobs, apply for jobs, and manage applications.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "DynamoDB",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",

      },
      {
        name: "Lambda",
        color: "pink-text-gradient",
      },
    ],
    // image: jobPortalImage,
    source_code_link: "https://github.com/yourusername/job-portal",
    live_site_link: "https://your-job-portal-link.com/",
  },
  {
    name: "Custom React Notification Library (NPM Package)",
    description:
      "A lightweight React notification library published on NPM, allowing developers to easily integrate customizable notifications into their projects.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "npm",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    // image: npmPackageImage,
    source_code_link: "https://github.com/yourusername/react-notification-lib",
    live_site_link: "https://www.npmjs.com/package/react-notification-lib",
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/ashish-maurya-4248b9260/",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://x.com/AshishM50339781",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/ashish4824",
  },
] as const;
