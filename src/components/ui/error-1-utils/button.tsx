import * as React from "react";
import { Button as ShadcnButton, type ButtonProps as ShadcnButtonProps } from "@/components/ui/button";

export interface ButtonProps extends ShadcnButtonProps {
  render?: React.ReactElement<{ className?: string }>;
  nativeButton?: boolean;
}

export function Button({ render, children, className, variant, ...props }: ButtonProps) {
  if (render) {
    return React.cloneElement(
      render,
      {
        className: `inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all px-5 py-2.5 ${
          variant === "outline"
            ? "border border-[#232630] bg-[#12141A] text-white hover:bg-[#1A1D24] hover:border-[#EFA31D]/40"
            : "bg-[#EFA31D] hover:bg-[#D88F14] text-black shadow-md shadow-[#EFA31D]/20 font-bold"
        } ${className || ""}`,
        ...props,
      },
      children
    );
  }

  return (
    <ShadcnButton
      variant={variant}
      className={`rounded-xl gap-2 ${
        variant === "outline"
          ? "border-[#232630] bg-[#12141A] text-white hover:bg-[#1A1D24]"
          : "bg-[#EFA31D] hover:bg-[#D88F14] text-black font-bold"
      } ${className || ""}`}
      {...props}
    >
      {children}
    </ShadcnButton>
  );
}
