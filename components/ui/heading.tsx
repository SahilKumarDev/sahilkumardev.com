import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  weight?: "normal" | "medium" | "semibold" | "bold" | "extrabold";
  tracking?: "tight" | "normal" | "wide";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span";
}

export const Heading = React.memo(
  ({
    as,
    weight,
    children,
    className,
    variant = "h4",
    tracking = "normal",
  }: HeadingProps) => {
    const Tag = as || variant;

    const variantClasses = {
      h1: "text-2xl/tight sm:text-3xl/tight md:text-4xl/tight lg:text-5xl/tight xl:text-6xl/tight",
      h2: "text-xl/tight sm:text-2xl/tight md:text-3xl/tight lg:text-4xl/tight xl:text-5xl/tight",
      h3: "text-lg/tight sm:text-xl/tight md:text-2xl/tight lg:text-3xl/tight",
      h4: "text-base/tight sm:text-lg/tight md:text-xl/tight lg:text-2xl/tight",
      h5: "text-sm/tight sm:text-base/tight md:text-lg/tight",
      h6: "text-xs/tight sm:text-sm/tight md:text-base/tight",
    };

    const weightClasses = {
      medium: "font-medium",
      normal: "font-normal",
      semibold: "font-semibold",
      extrabold: "font-extrabold",
      bold: "font-bold",
    };

    const trackingClasses = {
      tight: "tracking-tight",
      normal: "tracking-normal",
      wide: "tracking-wide",
    };

    const defaultWeights = {
      h1: "bold",
      h2: "bold",
      h3: "semibold",
      h4: "semibold",
      h5: "medium",
      h6: "medium",
    } as const;

    const finalWeight = weight || defaultWeights[variant];

    return (
      <Tag
        className={cn(
          variantClasses[variant],
          weightClasses[finalWeight],
          trackingClasses[tracking],
          "text-foreground",
          className
        )}
      >
        {children}
      </Tag>
    );
  }
);

Heading.displayName = "Heading";
