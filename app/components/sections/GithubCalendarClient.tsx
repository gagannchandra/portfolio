"use client";

import dynamic from "next/dynamic";

const ContributionGraph = dynamic(
  () => import("@/app/components/sections/ContributionGraph"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full flex justify-center">
        <div className="w-fit p-6 rounded-lg dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200">
          <div className="h-[120px] w-[700px] max-w-[80vw] animate-pulse bg-zinc-200 dark:bg-zinc-800 rounded-md" />
        </div>
      </div>
    ),
  }
);

export default function GithubCalendarClient() {
  return <ContributionGraph />;
}
