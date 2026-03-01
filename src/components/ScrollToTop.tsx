import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Viedään sivu heti sivun alkuun reitin vaihtuessa – ilman näkyvää scrollausta.
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};
