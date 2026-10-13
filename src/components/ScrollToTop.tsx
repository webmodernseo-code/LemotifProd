import { useEffect } from "react";
import { useLocation } from "@/lib/router";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
