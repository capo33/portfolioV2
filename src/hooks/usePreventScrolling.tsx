import { useEffect } from "react";

// to prevent scrolling when navbar is open
const usePreventScrolling = (index: boolean) => {
  useEffect(() => {
    index
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "unset");
  }, [index]);
};

export default usePreventScrolling;
