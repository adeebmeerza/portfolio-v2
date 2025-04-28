"use client";

import { RefObject, useCallback, useRef } from "react";

export type RouteNameType =
  | "works"
  | "about"
  | "techStacks"
  | "experiences"
  | "hero"
  | "contacts";

export type RouteProps = {
  label: RouteNameType;
};

export const routes: RouteProps[] = [
  { label: "works" },
  { label: "about" },
  { label: "techStacks" },
  { label: "experiences" },
  { label: "contacts" },
];

export type SectionRefs = {
  [K in
    | "hero"
    | "works"
    | "about"
    | "techStacks"
    | "experiences"
    | "contacts"]: RefObject<HTMLDivElement | null>;
};

const useScrollTo = () => {
  const sectionRefs: SectionRefs = {
    hero: useRef(null),
    works: useRef(null),
    about: useRef(null),
    techStacks: useRef(null),
    experiences: useRef(null),
    contacts: useRef(null),
  };

  const scrollToRefWithOffset = useCallback(
    (ref: RefObject<HTMLDivElement | null>, offset = 120) => {
      try {
        if (!ref.current) {
          console.warn("Reference element not found");
          return;
        }

        const heading = ref.current.querySelector("h2");
        const elementPosition =
          ref.current.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        // Highlight the heading
        const handleScrollEnd = () => {
          if (heading) {
            // Get computed styles instead of inline styles
            const computedStyle = window.getComputedStyle(heading);
            const originalColor = computedStyle.color;
            const originalTransform = computedStyle.transform;

            // Set initial transform origin before any animation
            heading.style.display = "inline-block"; // Add this to make transform work
            heading.style.transformOrigin = "center";

            // Apply transitions after a small delay to ensure initial styles are set
            // requestAnimationFrame(() => {
            heading.style.transition =
              "transform 0.05s ease-in-out, color 0.05s ease-in-out, text-shadow 0.05s ease-in-out";
            heading.style.color = "var(--primary)";
            heading.style.transform = "scale(1.05)";
            heading.style.textShadow = "var(--primary) 1px 0 3px";

            setTimeout(() => {
              heading.style.transition = "";
              heading.style.color = originalColor;
              heading.style.transform =
                originalTransform === "none" ? "" : originalTransform;
              heading.style.textShadow = "";
            }, 300);
          }

          window.removeEventListener("scrollend", handleScrollEnd);
        };

        window.addEventListener("scrollend", handleScrollEnd, { once: true });

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } catch (error) {
        console.error("Error scrolling to element:", error);
      }
    },
    []
  );

  return {
    sectionRefs,
    scrollToRefWithOffset,
  };
};

export default useScrollTo;
