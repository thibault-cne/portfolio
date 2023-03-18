import {
  javascript,
  typescript,
  html,
  css,
  vue,
  kubernetes,
  tailwind,
  git,
  rust,
  go,
  python,
  java,
  c,
  docker,
  casino,
  ftc,
  flutter,
} from "../assets";

export const navLinks = [
  {
    name: "Techs",
    id: "techs",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Contact",
    id: "contact",
  },
];

export const techs = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Rust",
    icon: rust,
  },
  {
    name: "Go",
    icon: go,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
];

export const projects = [
  {
    name: "Find the cat",
    description: "An implementation of the find function in C",
    tags: [{ value: "C", color: "border-blue-400" }],
    github: {
      invert: true,
      link: "https://github.com/thibault-cne/find-the-cat",
    },
    image: ftc,
  },
  {
    name: "Casino website",
    description:
      "A casino website made with Vue.js and Golang. You can currently play roulette.",
    tags: [
      { value: "Vue.js", color: "border-green-600" },
      { value: "TypeScript", color: "border-blue-600" },
      { value: "Tailwind CSS", color: "border-blue-600" },
      { value: "docker", color: "border-blue-600" },
      { value: "kubernetes", color: "border-blue-600" },
      { value: "daisyUI", color: "border-blue-600" },
      { value: "Go", color: "border-blue-600" },
    ],
    github: {
      invert: true,
      link: "https://github.com/thibault-cne/casinoWebsite",
    },
    image: casino,
  },
];

type Tags = {
  value: string;
  color: string;
};

export type Project = {
  name: string;
  description: string;
  tags: Tags[];
  github: {
    invert: boolean;
    link: string;
  };
  image: string;
};
