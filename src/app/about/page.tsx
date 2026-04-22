"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const skills = [
  "User Research",
  "Interaction Design",
  "Prototyping",
  "Design Systems",
  "Usability Testing",
  "Wireframing",
  "Visual Design",
  "Information Architecture",
];

const tools = ["Figma", "Framer", "Maze", "Miro", "Jira", "GitHub"];

export default function AboutPage() {
  return (
    <div className="px-6 py-24 max-w-3xl mx-auto">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary mb-6"
      >
        About
      </motion.h1>

      {/* Photo placeholder + Bio */}
      <div className="flex flex-col sm:flex-row gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-40 h-40 rounded-2xl bg-bg-card border border-border flex-shrink-0 flex items-center justify-center"
        >
          <span className="text-text-muted text-sm">Photo</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="text-lg text-text-secondary leading-relaxed mb-4">
            I&apos;m Steven Burton, a UX product designer currently at FamilySearch. I design
            end-to-end experiences — from research through shipping — with a focus on making
            complex things feel simple and human.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            I believe the best design comes from genuine collaboration: with users, with engineers,
            with stakeholders, and with the messy reality of real-world constraints.
          </p>
        </motion.div>
      </div>

      {/* Skills */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-16"
      >
        <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted mb-6">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-sm px-4 py-2 rounded-full border border-border text-text-secondary hover:border-accent hover:text-accent transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Tools */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-16"
      >
        <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted mb-6">
          Tools
        </h2>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="text-sm px-4 py-2 rounded-full border border-border text-text-secondary hover:border-accent hover:text-accent transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>

      {/* What I'm looking for */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-16"
      >
        <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted mb-6">
          What I&apos;m Looking For
        </h2>
        <p className="text-lg text-text-secondary leading-relaxed">
          I&apos;m drawn to teams that care deeply about craft, move thoughtfully, and value
          designers who can think beyond the screen. If that sounds like your team, I&apos;d love
          to connect.
        </p>
      </motion.div>

      {/* Connect */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted mb-6">
          Connect
        </h2>
        <div className="flex gap-6">
          <a
            href="mailto:hello@stevenburton.design"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/stevenburton"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </div>
  );
}
