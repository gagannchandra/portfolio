import Link from "next/link";
import Image from "next/image";
import Theme from "./Theme";
import UnmountStudio from "./Unmount";
import MobileMenu from "./MobileMenu";
import { navLinks } from "@/app/data/portfolio";

export default function Navbar() {
  return (
    <UnmountStudio>
      <header className="text-sm py-6 md:px-16 px-6 border-b dark:border-zinc-800 border-zinc-200 z-30 md:mb-28 mb-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="#home"
            className="flex items-center"
          >
            <Image
              src="/fox-logo-circle.png"
              alt="Gagan Chandra logo"
              width={40}
              height={40}
              className="rounded-full dark:invert-0"
              priority
            />
          </Link>

          <nav className="md:block hidden">
            <ul className="flex items-center gap-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-incognito dark:text-white text-zinc-600 dark:hover:text-primary-color hover:text-zinc-900 duration-300 text-base"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-x-4">
            <Theme />
            <MobileMenu />
          </div>
        </div>
      </header>
    </UnmountStudio>
  );
}
