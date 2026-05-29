"use client";

import { Slide } from "@/app/animation/Slide";
import { projects } from "@/app/data/portfolio";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Link from "next/link";
import { useState } from "react";
import { BiLogoGithub } from "react-icons/bi";
import { HiOutlineExternalLink, HiPlay } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

type Project = (typeof projects)[number];

export default function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="scroll-mt-28 mt-32">
      <SectionHeading
        title="Featured Projects"
        subtitle="Production deployments across backend, AI, and full-stack systems."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Slide key={project.id} delay={0.06 * i}>
            <article className="flex h-full flex-col rounded-lg dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 p-6">
              <h3 className="font-incognito text-xl font-semibold tracking-tight">
                {project.name}
              </h3>
              <p className="mt-1 text-sm dark:text-zinc-400 text-zinc-600">
                {project.tagline}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border dark:border-zinc-700 border-zinc-200 px-2 py-0.5 text-xs dark:text-zinc-400 text-zinc-600"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <ul className="my-4 flex-1 space-y-2 text-sm dark:text-zinc-400 text-zinc-600">
                {project.highlights.slice(0, 3).map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="dark:text-primary-color text-tertiary-color">
                      ▸
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border dark:border-zinc-700 border-zinc-200 px-3 py-2 text-sm font-medium dark:text-white text-zinc-800 dark:hover:border-primary-color/50 hover:border-zinc-300 duration-300"
                >
                  <BiLogoGithub className="h-4 w-4" />
                  GitHub
                </Link>
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md bg-secondary-color px-3 py-2 text-sm font-medium text-zinc-900 hover:opacity-90 duration-300"
                >
                  <HiOutlineExternalLink className="h-4 w-4" />
                  Live Demo
                </Link>
                {project.demo ? (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border dark:border-zinc-700 border-zinc-200 px-3 py-2 text-sm dark:text-zinc-300 text-zinc-700"
                  >
                    <HiPlay className="h-4 w-4" />
                    Demo
                  </Link>
                ) : null}
                <button
                  type="button"
                  onClick={() => setActive(project)}
                  className="ml-auto text-sm font-medium dark:text-primary-color text-tertiary-color hover:underline"
                >
                  Case study →
                </button>
              </div>
            </article>
          </Slide>
        ))}
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-lg dark:bg-zinc-900 bg-white border dark:border-zinc-800 border-zinc-200 p-6">
                  <h3 className="font-incognito text-2xl font-bold tracking-tight">
                    {active.name}
                  </h3>
                  <p className="mt-2 dark:text-zinc-400 text-zinc-600">
                    {active.tagline}
                  </p>
                  <ul className="mt-6 space-y-3 text-sm dark:text-zinc-400 text-zinc-600">
                    {active.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Link
                      href={active.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md bg-secondary-color px-4 py-2 text-sm font-medium text-zinc-900"
                    >
                      View on GitHub
                    </Link>
                    <Link
                      href={active.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border dark:border-zinc-700 border-zinc-200 px-4 py-2 text-sm dark:text-zinc-300 text-zinc-700"
                    >
                      Open Live App
                    </Link>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActive(null)}
                    className="mt-6 w-full rounded-md border dark:border-zinc-700 border-zinc-200 py-2 text-sm text-zinc-500"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
