"use client";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useId } from "react";

export default function ThemeToggle({ className }: { className?: string }) {
  const id = useId();
  const { theme, setTheme } = useTheme();

  return (
    <div className={(cn("flex flex-col justify-center"), className)}>
      <input
        type="checkbox"
        name="theme-toggle"
        id={id}
        className="peer sr-only"
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle dark mode"
      />
      <label
        className="text-muted-foreground outline-ring/30 dark:outline-ring/40 relative inline-flex size-9 cursor-pointer items-center justify-center rounded-full transition-colors peer-focus-visible:outline-2"
        htmlFor={id}
        aria-hidden="true"
      >
        <Sun className="dark:hidden" size={20} aria-hidden="true" />
        <Moon className="hidden dark:block" size={20} aria-hidden="true" />
        <span className="sr-only">Switch to light / dark version</span>
      </label>
    </div>
  );
}
