import { Slide } from "@/app/animation/Slide";
import { siteConfig } from "@/app/data/portfolio";
import GithubCalendarClient from "./GithubCalendarClient";

const username = siteConfig.githubUsername;

export default function GithubSection() {
  return (
    <section id="github" className="scroll-mt-28 mt-32">
      <Slide delay={0.16} className="mb-8">
        <h2 className="font-incognito text-4xl font-bold tracking-tight">
          Contribution Graph
        </h2>
      </Slide>

      <Slide delay={0.18}>
        <GithubCalendarClient />
      </Slide>

      <Slide delay={0.2}>
        <p className="mt-8 text-center text-sm text-zinc-500">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-primary-color text-tertiary-color hover:underline"
          >
            @{username}
          </a>
          {" · "}
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-primary-color text-tertiary-color hover:underline"
          >
            View on GitHub
          </a>
        </p>
      </Slide>
    </section>
  );
}
