import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  portfolio,
} from "../assets";

export const navLinks = [
  {
    name: "Contact",
    id: "contact",
  },
  {
    name: "Projects",
    id: "projects",
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

export const projects = [
  {
    name: "Portfolio",
    description: "This portfolio website",
    tags: [
      { value: "Vue.js", color: "green-600" },
      { value: "TypeScript", color: "blue-600" },
      { value: "Tailwind CSS", color: "blue-600" },
      { value: "docker", color: "blue-600" },
      { value: "kubernetes", color: "blue-600" },
      { value: "daisyUI", color: "blue-600" },
    ],
    link: "",
    image: portfolio,
  },
  {
    name: "Portfolio",
    description: "This portfolio website",
    tags: [
      { value: "Vue.js", color: "green-600" },
      { value: "TypeScript", color: "blue-600" },
      { value: "Tailwind CSS", color: "blue-600" },
      { value: "docker", color: "blue-600" },
      { value: "kubernetes", color: "blue-600" },
      { value: "daisyUI", color: "blue-600" },
    ],
    link: "",
    image: portfolio,
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
  link: string;
  image: string;
};
