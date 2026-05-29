"use client";

import { Slide } from "@/app/animation/Slide";
import { skillCategories } from "@/app/data/portfolio";
import SectionHeading from "@/app/components/ui/SectionHeading";

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-28 mt-32">
      <SectionHeading
        title="Skills"
        subtitle="Technologies I use to build reliable backend systems and AI applications."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <Slide key={cat.title} delay={0.05 * i}>
            <article className="h-full rounded-lg dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 p-6">
              <h3 className="font-incognito text-lg font-semibold tracking-tight">
                {cat.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md dark:bg-zinc-900/80 bg-white px-2.5 py-1 text-sm dark:text-zinc-300 text-zinc-700 border dark:border-zinc-800 border-zinc-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          </Slide>
        ))}
      </div>
    </section>
  );
}
