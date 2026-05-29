import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found | Gagan Chandra",
};

export default function NotFound() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20 min-h-[50vh]">
      <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl mb-4">
        404
      </h1>
      <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
        This page does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-md bg-secondary-color px-5 py-2.5 text-sm font-semibold text-zinc-900"
      >
        Back to home
      </Link>
    </main>
  );
}
