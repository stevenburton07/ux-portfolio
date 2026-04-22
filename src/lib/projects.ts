export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  role: string;
  timeline: string;
  team: string;
  tools: string[];
  outcome: string;
  videoId?: string;
  problem: string;
  approach: string;
  solution: string;
}

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    description: "A brief outcome-driven description of this project.",
    tags: ["Research", "Product Design", "Prototyping"],
    role: "Lead Designer",
    timeline: "3 months",
    team: "2 designers, 4 engineers, 1 PM",
    tools: ["Figma", "Maze", "Jira"],
    outcome: "Key outcome or metric goes here",
    problem:
      "Describe the core problem this project addressed. What was broken, missing, or underperforming?",
    approach:
      "Describe your approach — research methods, design explorations, key decisions and tradeoffs.",
    solution:
      "Describe the final solution, what shipped, and the measurable impact it had.",
  },
  {
    slug: "project-two",
    title: "Project Two",
    description: "A brief outcome-driven description of this project.",
    tags: ["Design Systems", "UI Design"],
    role: "Product Designer",
    timeline: "6 months",
    team: "3 designers, 6 engineers",
    tools: ["Figma", "Storybook"],
    outcome: "Key outcome or metric goes here",
    problem:
      "Describe the core problem this project addressed. What was broken, missing, or underperforming?",
    approach:
      "Describe your approach — research methods, design explorations, key decisions and tradeoffs.",
    solution:
      "Describe the final solution, what shipped, and the measurable impact it had.",
  },
  {
    slug: "project-three",
    title: "Project Three",
    description: "A brief outcome-driven description of this project.",
    tags: ["User Research", "Strategy"],
    role: "UX Researcher & Designer",
    timeline: "2 months",
    team: "1 designer, 1 researcher, 3 engineers",
    tools: ["Figma", "UserTesting", "Miro"],
    outcome: "Key outcome or metric goes here",
    problem:
      "Describe the core problem this project addressed. What was broken, missing, or underperforming?",
    approach:
      "Describe your approach — research methods, design explorations, key decisions and tradeoffs.",
    solution:
      "Describe the final solution, what shipped, and the measurable impact it had.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
