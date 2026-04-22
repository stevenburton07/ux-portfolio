"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Hero from "@/components/hero";

const projects = [
  {
    slug: "project-one",
    title: "Project One",
    description: "A brief outcome-driven description of this project.",
    tags: ["Research", "Product Design", "Prototyping"],
  },
  {
    slug: "project-two",
    title: "Project Two",
    description: "A brief outcome-driven description of this project.",
    tags: ["Design Systems", "UI Design"],
  },
  {
    slug: "project-three",
    title: "Project Three",
    description: "A brief outcome-driven description of this project.",
    tags: ["User Research", "Strategy"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      {/* Design Philosophy */}
      <section className="px-6 py-24 max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={0}
        >
          <p className="text-2xl sm:text-3xl font-medium leading-relaxed text-text-primary">
            I believe great design starts with listening.{" "}
            <span className="text-text-secondary">
              Understanding the people you&apos;re designing for, the constraints you&apos;re working
              within, and the moments that matter most.
            </span>
          </p>
        </motion.div>
      </section>

      {/* Featured Case Studies */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="text-sm font-medium tracking-widest uppercase text-text-muted mb-12"
          >
            Featured Work
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                    <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
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
      </section>
    </div>
  );
}
