"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/lib/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function CaseStudy({ project }: { project: Project }) {
  return (
    <div className="px-6 py-24 max-w-4xl mx-auto">
      {/* Back link */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        <Link
          href="/work"
          className="text-sm text-text-secondary hover:text-accent transition-colors mb-12 inline-flex items-center gap-2"
        >
          <span>&larr;</span> All Work
        </Link>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary mt-8 mb-4"
      >
        {project.title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-lg text-text-secondary mb-12"
      >
        {project.description}
      </motion.p>

      {/* Video Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="aspect-video rounded-2xl bg-bg-card border border-border mb-12 flex items-center justify-center"
      >
        {project.videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${project.videoId}`}
            title={`${project.title} case study video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-2xl"
          />
        ) : (
          <div className="text-center">
            <p className="text-text-muted text-sm">60-second case study video</p>
            <p className="text-text-muted text-xs mt-1">YouTube embed will appear here</p>
          </div>
        )}
      </motion.div>

      {/* Key Stats Bar */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16"
      >
        {[
          { label: "Role", value: project.role },
          { label: "Timeline", value: project.timeline },
          { label: "Team", value: project.team },
          { label: "Outcome", value: project.outcome },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl bg-bg-card border border-border p-4">
            <p className="text-xs font-medium uppercase tracking-widest text-text-muted mb-1">
              {stat.label}
            </p>
            <p className="text-sm text-text-primary font-medium">{stat.value}</p>
          </div>
        ))}
      </motion.div>

      {/* Written Summary */}
      <div className="space-y-12">
        {[
          { title: "The Problem", content: project.problem },
          { title: "Approach", content: project.approach },
          { title: "Solution & Impact", content: project.solution },
        ].map((section, i) => (
          <motion.div
            key={section.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
              },
            }}
          >
            <h2 className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
              {section.title}
            </h2>
            <p className="text-text-secondary leading-relaxed text-lg">{section.content}</p>
          </motion.div>
        ))}
      </div>

      {/* Image Gallery Placeholder */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-16"
      >
        <h2 className="text-sm font-medium uppercase tracking-widest text-accent mb-6">
          Project Artifacts
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="aspect-video rounded-xl bg-bg-card border border-border flex items-center justify-center"
            >
              <span className="text-text-muted text-sm">Image {n}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Tools */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-16 flex flex-wrap gap-2"
      >
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="text-xs px-3 py-1.5 rounded-full bg-accent-subtle text-accent font-medium"
          >
            {tool}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
