"use client";

import { Slide } from "@/app/animation/Slide";

export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <Slide className="mb-16">
      <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </Slide>
  );
}
