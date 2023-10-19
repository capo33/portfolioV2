import { useEffect } from "react";

const useEscapeClick = (callback: () => void) => {
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        callback();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [callback]);
};

export default useEscapeClick;
