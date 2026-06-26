import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Global on-scroll reveal. Adds subtle fade + slide-up to sections and
 * their major child blocks. Skips on the /contacto route and respects
 * prefers-reduced-motion. No deps, no layout cost — IntersectionObserver only.
 */
export function ScrollReveal() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Exception: no animations on contact page / forms.
    if (pathname.startsWith("/contacto")) return;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const TARGET_CHILDREN = "h1, h2, h3, p, ul, ol, img, picture, video, article, a, button, blockquote, [data-reveal-child]";

    // Collect all sections in the main view. Use rAF so route content has mounted.
    let raf = 0;
    let observer: IntersectionObserver | null = null;
    const tagged = new Set<Element>();

    const tag = (el: Element, delayMs = 0) => {
      if (tagged.has(el)) return;
      tagged.add(el);
      el.classList.add("lov-reveal");
      if (delayMs) (el as HTMLElement).style.setProperty("--lov-reveal-delay", `${delayMs}ms`);
      observer!.observe(el);
    };

    const scan = () => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>("section"));
      sections.forEach((section) => {
        // Skip if inside a form (forms must not animate).
        if (section.closest("form")) return;
        tag(section);
        // Stagger major children inside the section for a layered effect.
        const candidates = Array.from(section.querySelectorAll<HTMLElement>(TARGET_CHILDREN))
          .filter((el) => !el.closest("form") && !el.closest("nav") && el.offsetParent !== null)
          .slice(0, 18);
        candidates.forEach((el, i) => tag(el, Math.min(i * 40, 240)));
      });
    };

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer!.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    raf = window.requestAnimationFrame(() => {
      scan();
      // Re-scan shortly after to catch async content (images, dynamic mounts).
      window.setTimeout(scan, 250);
    });

    return () => {
      window.cancelAnimationFrame(raf);
      observer?.disconnect();
      tagged.forEach((el) => {
        el.classList.remove("lov-reveal", "is-in");
        (el as HTMLElement).style.removeProperty("--lov-reveal-delay");
      });
    };
  }, [pathname]);

  return null;
}