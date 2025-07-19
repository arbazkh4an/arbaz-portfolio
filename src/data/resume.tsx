import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Arbaz Khan",
  initials: "AK",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Im Arbaz Khan , a BS Computer Science student and passionate full‑stack developer specializing in web, mobile and game development.",
  summary:
    "Arbaz Khan is a passionate and driven BSc Computer Science student entering his final year, dedicated to transforming concepts into real‑world solutions. At 22 years old, I already have dove deep into web development, mobile app development, and game development, grounded with strong mastery of programming fundamentals like data structures, algorithms, and applied problem-solving",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "MangoDB",
    "express",
    "Node.js",
    "Unity",
    "Java",
    "C++",
    "C#",
    "AWS Cloud",
    "Cloud Computing",
    "Typescript",
    "Python",
    "mySQL",
    "Blender",
    
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "khanarbaz1326@gmail.com",
    tel: "+92 309 4143793",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/arbazkh4an",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arbaz-khan-3aa5b5321/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/4G9dkff",
        icon: Icons.x,

        navbar: false,
      },
    
      email: {
        name: "Send Email",
        url: "mailto:khanarbaz1326@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    
        {
     company: "Freelance",
      href: "https://www.fiverr.com/",
      badges: [],
      location: "Remote",
      title: "Web Development",
      logoUrl: "/atomic.png",
      start: "2024",
      end: "Present",
      description:
        "Build Websites for clients using the MERN stack framework.",
    },

    {
     company: "Freelance",
      href: "https://www.fiverr.com/",
      badges: [],
      location: "Remote",
      title: "Game Developer",
      logoUrl: "/atomic.png",
      start: "2024",
      end: "Present",
      description:
        "Build simple games using Unity and C#.",
    },

  ],
  education: [
     {
      school: "University of Central Punjab",
      href: "https://ucp.edu.pk/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Pubjab College",
      href:"https://pgc.edu/",
      degree: "FSc Pre-Engineering",
      logoUrl: "/ib.png",
      start: "2020",
      end: "2022",
    },
  
  ],
  projects: [
   {
      title: "Movie Recomendation System",
      href: "",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "With the release of the New and New Movies i decided to make a Website Which can recommend people movies  based on their previous choosings using Machine Learning Algorithms. ",
      technologies: [
        "Next.js",
        "python",
        "PyCharm",
        "Jupyter",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
   
  ],
  hackathons: [
    {
      title: "NASA Space App Hackathon 2024",
      dates: "2024",
      location: "Lahore, Pakistan",
      description:
        "Developed a NASA mobile application which.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
       {
      title: "Digital Pakistan Cyber Security Hackathon Regional Round",
      dates: "2023",
      location: "University of Central Punjab ,Lahore",
      description:
        "Engaged in the high-stakes CTF and Bug Bounty challenges.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6M4Ix6GPP4Yihzt5BKtLv_dIpkFldXnZbw1sNqiHlz4chOWGV-qUbZ5GYCWqbb3fmA_E&usqp=CAU",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
     ],
} as const;
