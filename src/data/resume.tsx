import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Java } from "@/components/ui/svgs/java";
// Note: Ensure you have corresponding SVGs for these in components/ui/svgs/
import { AWS } from "@/components/ui/svgs/aws";
import { Tailwind } from "@/components/ui/svgs/tailwind";

export const DATA = {
  name: "Kunj Bhavsar",
  initials: "KB",
  url: "https://kunjbhavsar.com",
  location: "Brampton, ON",
  locationLink: "https://www.google.com/maps/place/Brampton,+ON",
  description:
    "Web Developer & Systems Analyst. Proficient in Python, Java and React with a strong foundation in AI.",
  summary:
    "Web Developer with over 5 years of experience in programming web-based applications, technical support, and systems analysis. I hold a Bachelor of Science in Computer Science from Algoma University (GPA 3.7) and a Diploma in Internet Applications and Web Development. I am a collaborative team player passionate about lifelong learning and delivering client-centric IT solutions.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "Python", icon: Python },
    { name: "Java", icon: Java },
    { name: "TypeScript", icon: Typescript },
    { name: "React", icon: ReactLight },
    { name: "Node.js", icon: Nodejs },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "AWS", icon: AWS },
    { name: "Tailwind CSS", icon: Tailwind },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "kunj.bhavsar99@gmail.com",
    tel: "+1(437)755-7511",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kunjbhavsar",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kunjbhavsar1",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/kunjbhavsar",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "www.youtube.com/@kunjbhavsar",
        icon: Icons.youtube,
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
      company: "Algoma University",
      href: "https://www.algomau.ca/",
      badges: [],
      location: "Toronto, ON",
      title: "Student Research Assistant",
      logoUrl: "/algoma.png",
      start: "May 2025",
      end: "March 2026",
      description:
        "Conducting applied technical research involving hypothesis testing and iterative problem-solving. Supporting research initiatives in AI, cybersecurity, and system analysis while collaborating with faculty on solution development.",
    },
    {
      company: "CAA Club Group",
      badges: [],
      href: "https://www.caasco.com/",
      location: "Thornhill, ON",
      title: "Telecom System Analyst",
      logoUrl: "/caa.jpeg",
      start: "Jan 2023",
      end: "May 2024",
      description:
        "Supported the design, configuration, and deployment of enterprise telephony and contact center solutions. Acted as a liaison between engineering and operations teams to ensure smooth transitions to BAU operations.",
    },
    {
      company: "Splunk",
      href: "https://www.splunk.com/",
      badges: [],
      location: "Halifax, NS",
      title: "Cloud Support Engineer",
      logoUrl: "/splunk.svg",
      start: "Dec 2021",
      end: "May 2022",
      description:
        "Supported enterprise customers with cloud-based software deployments and integrations. Collaborated with DevOps teams to troubleshoot complex platform issues and diagnose escalated technical problems.",
    },
    {
      company: "SMART Technologies",
      href: "https://www.smarttech.com/",
      badges: [],
      location: "Halifax, NS",
      title: "Technical Support Specialist",
      logoUrl: "/smart.webp",
      start: "Nov 2020",
      end: "Dec 2021",
      description:
        "Provided end-user support for meeting-room hardware and software. Logged and tracked incidents using Salesforce, resolving firmware and software issues for SMART Boards.",
    },
    {
      company: "Cogeco",
      href: "https://www.cogeco.ca/",
      badges: [],
      location: "Hamilton, ON",
      title: "Technical Support Representative",
      logoUrl: "/cogeco.png",
      start: "July 2019",
      end: "Sept 2020",
      description:
        "Delivered front-line technical support for internet and telephony services, performing root-cause analysis to maintain service quality SLAs.",
    },
  ],
  education: [
    {
      school: "Algoma University",
      href: "https://www.algomau.ca/",
      degree: "Bachelor of Science in Computer Science (Major GPA 3.7)",
      logoUrl: "/algoma.png",
      start: "2024",
      end: "2026",
    },
    {
      school: "Fanshawe College",
      href: "https://www.fanshawec.ca/",
      degree: "Diploma in Internet Applications and Web Development",
      logoUrl: "/fanshawe.jpg",
      start: "2017",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Placeholder",
      href: "#",
      dates: "",
      active: false,
      description: "",
      technologies: [],
      links: [],
      image: "",
      video: "",
    },
  ],

} as const;
