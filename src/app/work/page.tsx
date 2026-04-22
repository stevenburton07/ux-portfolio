"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function WorkPage() {
  return (
    <div className="px-6 py-24 max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary mb-4"
      >
        Work
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-lg text-text-secondary mb-16 max-w-xl"
      >
        Selected projects exploring how thoughtful design shapes better experiences.
      </motion.p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={i}
          >
            <Link href={`/work/${project.slug}`}>
              <motion.article
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group rounded-2xl border border-border bg-bg-card p-6 h-full flex flex-col transition-colors hover:border-border-hover"
              >
                <div className="aspect-video rounded-lg bg-bg-elevated mb-6 flex items-center justify-center">
                  <span className="text-text-muted text-sm">Project Thumbnail</span>
                </div>
                <h2 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-accent-subtle text-accent font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
