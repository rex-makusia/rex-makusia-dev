export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  notes: string;
  visual: "inventory" | "gateway" | "shell";
  stamp: string;
};

export const focusAreas = [
  "Full-stack product development",
  "APIs & service design",
  "Developer tooling",
];

export const toolkit = ["React", "JavaScript", "Firebase", "Go", "HTML / CSS", "Git"];

export const projects: Project[] = [
  {
    id: "inventory",
    title: "Tech Guru Inventory",
    category: "WEB APPLICATION",
    year: "2026",
    description:
      "A live inventory dashboard that brings asset tracking and request approvals into one clear workflow.",
    technologies: ["React 19", "Firebase", "Firestore"],
    notes:
      "Rebuilt from a static prototype. The app reads and updates shared Firestore data, with a Google Forms intake and an approver workflow for asset requests.",
    visual: "inventory",
    stamp: "LIVE / DATA",
  },
  {
    id: "gateway",
    title: "API Gateway",
    category: "BACKEND",
    year: "2026",
    description:
      "A Go foundation for routing requests, proxying services, and applying middleware.",
    technologies: ["Go", "HTTP", "YAML"],
    notes:
      "Structured as a small service with route definitions, configuration, gateway handlers, and authentication middleware.",
    visual: "gateway",
    stamp: "HTTP / GO",
  },
  {
    id: "shell",
    title: "Build Your Own Shell",
    category: "DEVELOPER TOOL",
    year: "2026",
    description:
      "A CodeCrafters challenge exploring command parsing, built-ins, and process execution in Go.",
    technologies: ["Go", "CLI", "Systems"],
    notes:
      "A stage-by-stage learning project. The repository is set up for growing a shell implementation as each challenge is completed.",
    visual: "shell",
    stamp: "INTERACTIVE / 001",
  },
];

export const principles = [
  {
    title: "Start with the user",
    description: "Understand the task before choosing the tool.",
  },
  {
    title: "Build in small steps",
    description: "Make progress visible and easy to verify.",
  },
  {
    title: "Stay curious",
    description: "Keep learning from how the product behaves.",
  },
];
