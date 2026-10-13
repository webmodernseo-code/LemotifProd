import React from "react";
import { Compass, ArrowLeft, Home, ArrowRight } from "lucide-react";

export interface IconPlaceholderProps extends React.SVGProps<SVGSVGElement> {
  lucide?: "Compass" | "ArrowLeft" | "Home" | "ArrowRight" | string;
  tabler?: string;
  hugeicons?: string;
  phosphor?: string;
  remixicon?: string;
}

export function IconPlaceholder({ lucide, className, ...props }: IconPlaceholderProps) {
  if (lucide === "Compass") {
    return <Compass className={`w-4 h-4 shrink-0 ${className || ""}`} {...props} />;
  }
  if (lucide === "ArrowLeft") {
    return <ArrowLeft className={`w-4 h-4 shrink-0 ${className || ""}`} {...props} />;
  }
  if (lucide === "Home") {
    return <Home className={`w-4 h-4 shrink-0 ${className || ""}`} {...props} />;
  }
  return <ArrowRight className={`w-4 h-4 shrink-0 ${className || ""}`} {...props} />;
}
