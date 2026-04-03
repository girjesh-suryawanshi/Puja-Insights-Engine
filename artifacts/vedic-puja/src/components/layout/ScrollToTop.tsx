import { useEffect } from "react";
import { useLocation } from "wouter";

export function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Smooth scroll to top on every route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // "instant" is usually better for route changes to avoid jarring motion
    });
  }, [location]);

  return null;
}
