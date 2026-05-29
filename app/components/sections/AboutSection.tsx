import { Slide } from "@/app/animation/Slide";
import { about } from "@/app/data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 mt-32">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Slide delay={0.05}>
          <h2 className="font-incognito text-4xl mb-8 font-bold tracking-tight">
            About
          </h2>
          <p className="max-w-2xl text-base dark:text-zinc-400 text-zinc-600 leading-relaxed mb-6">
            Final-year CS (AI) student focused on backend systems and production ML.
          </p>
          <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
            {about.bio}
          </p>
          <p className="mt-4 text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
            I enjoy understanding how systems work under the hood and turning
            ideas into real-world applications.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {about.focus.map((item) => (
              <li
                key={item}
                className="rounded-md dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 px-3 py-1 text-sm dark:text-zinc-300 text-zinc-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </Slide>

        <Slide delay={0.1}>
          <div className="rounded-lg dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 p-6">
            <h3 className="font-incognito text-lg font-semibold tracking-tight">
              Education
            </h3>
            <p className="mt-2 dark:text-zinc-300 text-zinc-700">
              {about.education.degree}
            </p>
            <p className="dark:text-zinc-400 text-zinc-600">
              {about.education.school}
            </p>
            <p className="mt-1 text-sm dark:text-primary-color text-tertiary-color">
              Graduating {about.education.graduation}
            </p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            {about.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-lg dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 p-6"
              >
                <p className="font-incognito text-2xl font-bold dark:text-primary-color text-tertiary-color">
                  {m.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </Slide>
      </div>
    </section>
  );
}
