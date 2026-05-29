import { Slide } from "@/app/animation/Slide";
import { experience } from "@/app/data/portfolio";
import SectionHeading from "@/app/components/ui/SectionHeading";

import { HiBriefcase } from "react-icons/hi";

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28 mt-32">
      <SectionHeading
        title="Work Experience"
        subtitle="Building and shipping software since 2023."
      />

      <div className="relative max-w-3xl">
        {experience.map((job, i) => (
          <Slide key={job.company} delay={0.08 * i}>
            <div className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200">
              <div className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md">
                {job.company === "Independent Software Developer" ? (
                  <HiBriefcase className="text-3xl dark:text-primary-color text-tertiary-color" />
                ) : (
                  <span className="font-incognito text-2xl font-bold dark:text-primary-color text-tertiary-color">
                    {job.company.charAt(0)}
                  </span>
                )}
              </div>
              <div className="flex flex-col items-start pb-12">
                <h3 className="text-xl font-semibold">{job.company}</h3>
                <p>{job.role}</p>
                <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                  {job.start} –{" "}
                  <span className="dark:text-primary-color text-tertiary-color">
                    {job.end}
                  </span>
                </time>
                <ul className="tracking-tight dark:text-zinc-400 text-zinc-600 my-4 space-y-2 text-sm">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </section>
  );
}
