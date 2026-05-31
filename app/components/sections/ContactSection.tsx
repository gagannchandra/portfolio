"use client";

import { Slide } from "@/app/animation/Slide";
import { siteConfig } from "@/app/data/portfolio";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Clipoboard from "@/app/components/shared/Clipoboard";
import Link from "next/link";
import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiEnvelope,
  BiLinkExternal,
} from "react-icons/bi";

const links = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: BiEnvelope,
  },
  {
    label: "GitHub",
    value: "gagannchandra",
    href: siteConfig.github,
    icon: BiLogoGithub,
  },
  {
    label: "LinkedIn",
    value: "gagan-chandra",
    href: siteConfig.linkedin,
    icon: BiLogoLinkedinSquare,
  },

];

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 mt-32 mb-16">
      <SectionHeading
        title="Contact"
        subtitle="Open to backend, ML engineering, and full-stack opportunities."
      />

      <Slide delay={0.05}>
        <div className="mx-auto max-w-2xl rounded-lg dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 p-8">
          <ul className="space-y-4">
            {links.map((link) => (
              <li
                key={link.label}
                className="flex items-center justify-between gap-4 rounded-md dark:bg-zinc-900/50 bg-white border dark:border-zinc-800 border-zinc-200 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <link.icon className="h-5 w-5 dark:text-primary-color text-tertiary-color" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500">
                      {link.label}
                    </p>
                    <Link
                      href={link.href}
                      target={link.label === "Email" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="font-medium dark:text-white text-zinc-800 dark:hover:text-primary-color hover:text-zinc-900 duration-300"
                    >
                      {link.value}
                    </Link>
                  </div>
                </div>
                {link.label === "Email" ? (
                  <Clipoboard content={siteConfig.email} />
                ) : null}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center rounded-md bg-secondary-color px-5 py-2.5 text-sm font-semibold text-zinc-900 hover:opacity-90 duration-300"
            >
              Send Email
            </Link>
            <Link
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 px-5 py-2.5 text-sm font-semibold dark:text-white text-zinc-800 duration-300"
            >
              Connect on LinkedIn
            </Link>
          </div>
        </div>
      </Slide>
    </section>
  );
}
