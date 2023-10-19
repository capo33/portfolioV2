import { useEffect } from "react";

const useWindowResize = (callback: () => void) => {
  useEffect(() => {
    const resize = () => {
      callback();
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [callback]);
}

export default useWindowResize;
