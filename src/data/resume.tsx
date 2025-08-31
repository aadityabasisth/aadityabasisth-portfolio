import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aaditya Basisth",
  initials: "AB",
  url: "https://aadityabasisth.com",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "breaking prod.",
  summary: [
    "tldr; self-taught, learned by hacking around on the internet.",
    "I'm drawn to technology and science.",
    "I'm also interested in art, football, and history - they shape the way I think."
  ],
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Node.js",
    "Python",
    "C++",
    "Express",
    "Docker",
    "Git",
    "Figma",
    "SQL",
    "MongoDB",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
  url: "https://github.com/aadityabasisth",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
  url: "https://linkedin.com/in/aadityabasisth",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/syscode0",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Rena Soft Tech",
      href: "",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/rena-logo.png",
      start: "May 2025",
      end: "Present",
      description:
  "Built full-stack applications with React and Node.js, ensuring reliability through testing and optimizing performance across devices.<br>A key product was <a href=\"https://aaplishala.com\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"text-decoration:underline;font-weight:bold;\">Aaplishala</a>, an EdTech platform designed to enhance collaboration and communication in education.",
    },
    {
      company: "Virtunexa",
      badges: [],
      href: "https://virtunexa.com",
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/virtunexa.png",
      start: "January 2025",
      end: "February 2025",
      description:
        "Independently developed the full front-end and back-end of the application, managing the entire project lifecycle. Designed responsive interfaces, integrated APIs for dynamic functionality, and optimized performance to deliver a seamless user experience.",
    },
    {
      company: "ISBM College of Engineering, Pune",
      href: "https://isbmcoe.org",
      badges: [],
      location: "Pune, India",
      title: "Senior member (Student Progression and Corporate Relation Cell)",
      logoUrl: "/PEG.png",
      start: "July 2024",
      end: "Present",
      description: "",
    },
  ],
  education: [
    {
      school: "Savitri Phule Pune University",
      href: "https://linkedin.com/in/aadityabasisth",
      degree: "",
      logoUrl: "/sppu.jpg",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
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
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aadityabasisth/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
// All hackathon/competition objects removed. File ends cleanly here.
} as const;
