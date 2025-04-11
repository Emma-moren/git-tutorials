"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    if (pathname !== prevPathname) {
      setIsTransitioning(true);

      // Store current children during transition
      setDisplayChildren(children);

      // After transition completes, update to new children
      const timer = setTimeout(() => {
        setPrevPathname(pathname);
        setDisplayChildren(children);
        setIsTransitioning(false);
      }, 5000); // 5000ms (5 seconds) transition

      return () => clearTimeout(timer);
    }
  }, [pathname, prevPathname, children]);

  return (
    <div
      className={`transition-all duration-[5000ms] ease-in-out ${
        isTransitioning
          ? "opacity-0 transform translate-y-10"
          : "opacity-100 transform translate-y-0"
      }`}
    >
      {displayChildren}
    </div>
  );
}
