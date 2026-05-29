"use client";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineX } from "react-icons/hi";
import { navLinks } from "@/app/data/portfolio";

export default function MobileMenu() {
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      document.body.style.overflow = status ? "auto" : "hidden";
      return !status;
    });
  };

  return (
    <>
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="md:hidden dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-md p-2"
      >
        <RxHamburgerMenu className="text-xl" />
      </button>
      <div
        className={`md:hidden fixed left-0 top-0 z-10 h-full w-full transform duration-[600ms] ease-[cubic-bezier(0.7,0,0,1)] dark:bg-zinc-900 bg-white ${
          navShow ? "translate-x-0 rounded-none" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mt-6 px-8">
          <Link href="#home" onClick={onToggleNav} className="font-incognito text-xl font-semibold">
            GC<span className="dark:text-primary-color text-tertiary-color">.</span>
          </Link>
          <button
            aria-label="Toggle Menu"
            onClick={onToggleNav}
            className="md:hidden dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-full p-2"
          >
            <HiOutlineX className="text-xl" />
          </button>
        </div>
        <nav className="flex flex-col mt-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onToggleNav}
              className="flex items-center gap-x-2 font-incognito font-semibold text-lg dark:shadow-line-dark shadow-line-light p-6 group"
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
