"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, useRef } from "react";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  download?: boolean;
  className?: string;
};

export default function MagneticButton({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const variants = {
    primary:
      "bg-primary text-white border border-primary/50 shadow-glow hover:bg-primary/90",
    secondary:
      "bg-surface-light dark:bg-surface border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:border-primary/50",
    ghost:
      "border border-transparent text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-accent-glow",
  };

  function handleMouse(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  }

  function reset() {
    const el = ref.current;
    if (el) el.style.transform = "translate(0, 0)";
  }

  return (
    <motion.div whileTap={{ scale: 0.98 }}>
      <Link
        ref={ref}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={download || undefined}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${variants[variant]} ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
