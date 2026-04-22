import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import CaseStudy from "./case-study";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return <CaseStudy project={project} />;
}
