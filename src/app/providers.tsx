"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { LiquidGlassDefs } from "@/components/ui/LiquidGlassDefs";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <LiquidGlassDefs />
      <ScrollToTop />
      {children}
    </ThemeProvider>
  );
}
