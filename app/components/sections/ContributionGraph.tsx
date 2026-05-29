"use client";

import GitHubCalendar from "react-github-calendar";

export default function ContributionGraph() {
  const colorTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-fit p-6 rounded-lg dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200">
        <div className="overflow-x-auto min-w-[280px]">
          <GitHubCalendar
            username="gagannchandra"
            colorScheme="dark"
            blockSize={14}
            blockMargin={4}
            fontSize={14}
            year={2026}
          />
        </div>
      </div>
    </div>
  );
}
