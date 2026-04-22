"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ScrollProgress = ReturnType<typeof useTransform<number, number>>;

const ASSEMBLE_END = 0.2;

interface ArtifactProps {
  scrollProgress: ScrollProgress;
  startX: number;
  startY: number;
  startRotate: number;
  startScale?: number;
  children: React.ReactNode;
  className?: string;
}

function Artifact({
  scrollProgress,
  startX,
  startY,
  startRotate,
  startScale = 1,
  children,
  className = "",
}: ArtifactProps) {
  const x = useTransform(scrollProgress, [0, ASSEMBLE_END], [startX, 0]);
  const y = useTransform(scrollProgress, [0, ASSEMBLE_END], [startY, 0]);
  const rotate = useTransform(scrollProgress, [0, ASSEMBLE_END], [startRotate, 0]);
  const scale = useTransform(scrollProgress, [0, ASSEMBLE_END], [startScale, 1]);
  const opacity = useTransform(scrollProgress, [0, ASSEMBLE_END * 0.5], [0.7, 1]);

  return (
    <motion.div style={{ x, y, rotate, scale, opacity }} className={className}>
      {children}
    </motion.div>
  );
}

function WireframeBox({ scrollProgress }: { scrollProgress: ScrollProgress }) {
  return (
    <Artifact scrollProgress={scrollProgress} startX={-280} startY={-120} startRotate={-15} startScale={0.8}>
      <div className="absolute -top-32 -left-64 w-32 h-20 rounded-lg border-2 border-dashed border-accent/50 flex items-center justify-center">
        <div className="w-20 h-2 rounded bg-accent/40" />
      </div>
    </Artifact>
  );
}

function StickyNote({ scrollProgress }: { scrollProgress: ScrollProgress }) {
  return (
    <Artifact scrollProgress={scrollProgress} startX={320} startY={-80} startRotate={12} startScale={0.7}>
      <div className="absolute -top-24 -right-56 w-24 h-24 rounded-md bg-amber-400/25 border border-amber-400/40 p-2 flex flex-col gap-1">
        <div className="w-14 h-1.5 rounded bg-amber-400/50" />
        <div className="w-10 h-1.5 rounded bg-amber-400/40" />
        <div className="w-12 h-1.5 rounded bg-amber-400/45" />
      </div>
    </Artifact>
  );
}

function ColorSwatches({ scrollProgress }: { scrollProgress: ScrollProgress }) {
  return (
    <Artifact scrollProgress={scrollProgress} startX={-220} startY={140} startRotate={20} startScale={0.75}>
      <div className="absolute top-28 -left-52 flex gap-2">
        <div className="w-8 h-8 rounded-lg bg-accent/60" />
        <div className="w-8 h-8 rounded-lg bg-emerald-400/60" />
        <div className="w-8 h-8 rounded-lg bg-rose-400/60" />
      </div>
    </Artifact>
  );
}

function UIButton({ scrollProgress }: { scrollProgress: ScrollProgress }) {
  return (
    <Artifact scrollProgress={scrollProgress} startX={260} startY={160} startRotate={-8} startScale={0.8}>
      <div className="absolute top-36 -right-48 px-6 py-2.5 rounded-full border border-accent/50 text-xs text-accent/70 font-medium">
        Button
      </div>
    </Artifact>
  );
}

function AbstractCircle({ scrollProgress }: { scrollProgress: ScrollProgress }) {
  return (
    <Artifact scrollProgress={scrollProgress} startX={180} startY={-180} startRotate={0} startScale={0.6}>
      <div className="absolute -top-44 -right-24 w-16 h-16 rounded-full border-2 border-accent/40" />
    </Artifact>
  );
}

function AbstractBlob({ scrollProgress }: { scrollProgress: ScrollProgress }) {
  return (
    <Artifact scrollProgress={scrollProgress} startX={-160} startY={-200} startRotate={30} startScale={0.5}>
      <div className="absolute -top-52 -left-20 w-20 h-14 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-accent/25" />
    </Artifact>
  );
}

function ArrowArtifact({ scrollProgress }: { scrollProgress: ScrollProgress }) {
  return (
    <Artifact scrollProgress={scrollProgress} startX={-340} startY={40} startRotate={-25} startScale={0.7}>
      <svg className="absolute top-8 -left-72 w-16 h-8 text-accent/50" viewBox="0 0 64 32" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M0 16 H48 M48 16 L38 6 M48 16 L38 26" />
      </svg>
    </Artifact>
  );
}

function WireframeLines({ scrollProgress }: { scrollProgress: ScrollProgress }) {
  return (
    <Artifact scrollProgress={scrollProgress} startX={300} startY={60} startRotate={18} startScale={0.65}>
      <div className="absolute top-12 -right-72 flex flex-col gap-2">
        <div className="w-24 h-1.5 rounded bg-text-muted/40" />
        <div className="w-16 h-1.5 rounded bg-text-muted/30" />
        <div className="w-20 h-1.5 rounded bg-text-muted/25" />
      </div>
    </Artifact>
  );
}

function CodeSnippet({ scrollProgress }: { scrollProgress: ScrollProgress }) {
  return (
    <Artifact scrollProgress={scrollProgress} startX={340} startY={-140} startRotate={10} startScale={0.65}>
      <div className="absolute -top-36 -right-72 rounded-lg bg-bg-elevated/80 border border-border p-3 font-mono text-[10px] leading-relaxed">
        <div className="flex gap-1.5 mb-2">
          <div className="w-2 h-2 rounded-full bg-rose-400/70" />
          <div className="w-2 h-2 rounded-full bg-amber-400/70" />
          <div className="w-2 h-2 rounded-full bg-emerald-400/70" />
        </div>
        <div className="text-accent/80">{`<Design`}</div>
        <div className="text-text-muted/80 pl-3">{`intent="delight"`}</div>
        <div className="text-text-muted/80 pl-3">{`craft={true}`}</div>
        <div className="text-accent/80">{`/>`}</div>
      </div>
    </Artifact>
  );
}

function TerminalPrompt({ scrollProgress }: { scrollProgress: ScrollProgress }) {
  return (
    <Artifact scrollProgress={scrollProgress} startX={-300} startY={180} startRotate={-12} startScale={0.7}>
      <div className="absolute top-40 -left-64 rounded-lg bg-bg-elevated/80 border border-border p-3 font-mono text-[10px] leading-relaxed">
        <div className="flex items-center gap-2">
          <span className="text-emerald-400/90">$</span>
          <span className="text-text-muted/80">npx create-portfolio</span>
        </div>
        <div className="text-accent/70 mt-1">✓ Building something great...</div>
      </div>
    </Artifact>
  );
}

function CurlyBraces({ scrollProgress }: { scrollProgress: ScrollProgress }) {
  return (
    <Artifact scrollProgress={scrollProgress} startX={-380} startY={-60} startRotate={-20} startScale={0.8}>
      <div className="absolute -top-8 -left-80 font-mono text-3xl text-accent/40 font-light tracking-wider">
        {`{ }`}
      </div>
    </Artifact>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.12], [0.3, 1]);
  const subtitleOpacity = useTransform(scrollYProgress, [0.06, 0.15], [0, 1]);
  const subtitleY = useTransform(scrollYProgress, [0.06, 0.15], [20, 0]);
  const taglineOpacity = useTransform(scrollYProgress, [0.12, ASSEMBLE_END], [0, 1]);
  const taglineY = useTransform(scrollYProgress, [0.12, ASSEMBLE_END], [20, 0]);

  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[220vh]">
      <div className="sticky top-0 flex flex-col items-center justify-center h-screen overflow-hidden">
        <div className="relative">
          {/* Design artifacts */}
          <WireframeBox scrollProgress={scrollYProgress} />
          <StickyNote scrollProgress={scrollYProgress} />
          <ColorSwatches scrollProgress={scrollYProgress} />
          <UIButton scrollProgress={scrollYProgress} />
          <AbstractCircle scrollProgress={scrollYProgress} />
          <AbstractBlob scrollProgress={scrollYProgress} />
          <ArrowArtifact scrollProgress={scrollYProgress} />
          <WireframeLines scrollProgress={scrollYProgress} />

          {/* Code artifacts */}
          <CodeSnippet scrollProgress={scrollYProgress} />
          <TerminalPrompt scrollProgress={scrollYProgress} />
          <CurlyBraces scrollProgress={scrollYProgress} />

          {/* Main text */}
          <div className="relative z-10 text-center">
            <motion.p
              style={{ opacity: subtitleOpacity, y: subtitleY }}
              className="text-sm font-medium tracking-widest uppercase text-accent mb-4"
            >
              UX Designer
            </motion.p>
            <motion.h1
              style={{ opacity: textOpacity }}
              className="text-5xl sm:text-7xl font-bold tracking-tight text-text-primary"
            >
              Steven Burton
            </motion.h1>
            <motion.p
              style={{ opacity: taglineOpacity, y: taglineY }}
              className="mt-6 max-w-lg mx-auto text-lg text-text-secondary leading-relaxed"
            >
              Crafting thoughtful, human-centered experiences — one collaboration at a time.
            </motion.p>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-text-muted tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-text-muted/40 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-text-muted/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
