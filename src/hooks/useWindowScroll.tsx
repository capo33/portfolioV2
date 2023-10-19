import { useEffect } from "react";

const useWindowScroll = (callback: () => void) => {
  useEffect(() => {
    const scroll = () => {
      callback();
    };
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, [callback]);
};

export default useWindowScroll;