"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem={true}
      attribute="class"
      defaultTheme="dark"
      storageKey="gagan-portfolio-theme"
    >
      {children}
    </ThemeProvider>
  );
}
