"use client";

import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { forwardRef, type AnchorHTMLAttributes } from "react";

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { to: string };

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link({ to, ...props }, ref) {
  return <NextLink ref={ref} href={to} {...props} />;
});

export function useLocation() {
  const pathname = usePathname();
  const hash = typeof window === "undefined" ? "" : window.location.hash;
  return { pathname, hash };
}

export function useNavigate() {
  const router = useRouter();
  return (to: string) => router.push(to);
}
