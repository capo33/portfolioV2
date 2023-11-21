import { useContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { ThemeContext } from "./context/ThemeContext";
import { ButtonScroll, Footer, Header, ScrollToTop } from "./components";

function App() {
  const { theme } = useContext(ThemeContext);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollBuuttonVisibility = () => {
      window.scrollY > 100 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollBuuttonVisibility);
    return () =>
      window.removeEventListener("scroll", handleScrollBuuttonVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <main
      className={`${
        theme === "light" ? "light_bg" : "dark_bg"
      } transition-colors duration-300 `}
    >
      <ScrollToTop />
      <Header />
      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
      <Footer />
      {showButton && <ButtonScroll handleScrollToTop={handleScrollToTop} />}
    </main>
  );
}

export default App;
