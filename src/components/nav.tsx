"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-bg/80 border-b border-border">
      <Link href="/" className="text-lg font-semibold tracking-tight text-text-primary hover:text-accent transition-colors">
        SB
      </Link>
      <div className="flex gap-1">
        {links.map(({ href, label }) => {
          const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-text-primary"
              style={{ color: isActive ? "var(--color-text-primary)" : "var(--color-text-secondary)" }}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-lg bg-accent-subtle"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
