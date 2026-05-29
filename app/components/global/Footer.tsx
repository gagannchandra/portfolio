import Link from "next/link";
import UnmountStudio from "./Unmount";
import { siteConfig } from "@/app/data/portfolio";

export default function Footer() {
  return (
    <UnmountStudio>
      <footer className="border-t dark:border-zinc-800 border-zinc-100 mt-24 relative">
        <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-8">
          <p className="font-incognito text-sm italic text-zinc-500 text-center lg:text-left">
            {siteConfig.tagline}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500">
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-white text-zinc-600 hover:underline"
            >
              GitHub
            </Link>
            <Link
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-white text-zinc-600 hover:underline"
            >
              LinkedIn
            </Link>
            <Link
              href={`mailto:${siteConfig.email}`}
              className="dark:text-white text-zinc-600 hover:underline"
            >
              Email
            </Link>
          </div>
          <small className="text-zinc-500">
            Copyright &copy; {siteConfig.name} {new Date().getFullYear()}
          </small>
        </div>
      </footer>
    </UnmountStudio>
  );
}
