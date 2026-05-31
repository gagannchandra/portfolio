"use client";

import { Slide } from "@/app/animation/Slide";
import { hero } from "@/app/data/portfolio";
import HeroSvg from "@/app/assets/icons/HeroSvg";
import Social from "@/app/components/shared/Social";
import Link from "next/link";
import { siteConfig } from "@/app/data/portfolio";
import { BiSolidDownload } from "react-icons/bi";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 mb-16 scroll-mt-28"
    >
      <div className="lg:max-w-2xl max-w-2xl">
        <Slide>
          <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
            {hero.greeting}
          </h1>
          <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed mb-4">
            {hero.subheadline}
          </p>
          <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
            {hero.description}
          </p>
        </Slide>
        <Slide delay={0.1}>
          <div className="flex flex-wrap items-center gap-3 my-8">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 px-4 py-2 text-sm font-semibold dark:text-white text-zinc-800 dark:hover:border-primary-color/50 hover:border-zinc-300 duration-300"
            >
              View Projects
            </Link>
            <a
              href={siteConfig.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-md dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 px-4 py-2 text-sm font-semibold dark:text-white text-zinc-800 dark:hover:border-primary-color/50 hover:border-zinc-300 duration-300"
            >
              <BiSolidDownload className="text-lg" />
              Download Resume
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 px-4 py-2 text-sm font-semibold dark:text-white text-zinc-800 dark:hover:border-primary-color/50 hover:border-zinc-300 duration-300"
            >
              Contact Me
            </Link>
          </div>
          <Social type="social" />
        </Slide>
      </div>
      <Slide delay={0.14}>
        <HeroSvg />
      </Slide>
    </section>
  );
}
