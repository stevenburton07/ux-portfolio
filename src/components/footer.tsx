import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12 mt-auto">
      <div className="mx-auto max-w-5xl flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-6">
          <Link href="/work" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
            Work
          </Link>
          <Link href="/about" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
            About
          </Link>
        </div>
        <p className="text-sm text-text-muted">
          Designed &amp; built with Claude
        </p>
      </div>
    </footer>
  );
}
