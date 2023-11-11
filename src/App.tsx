import { useContext,useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ButtonScroll, Footer, Header, ScrollToTop } from "./components";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollBuuttonVisibility = () => {
      window.scrollY > 100 ? setShowButton(true) : setShowButton(false);
    }

    window.addEventListener("scroll", handleScrollBuuttonVisibility);
    return () => window.removeEventListener("scroll", handleScrollBuuttonVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  }

  return (
    <>
      <ScrollToTop />
      <main
        className={`${
          theme === "light" ? "light_bg" : "dark_bg"
        } transition-colors duration-300 `}
      >
        <Header />
        <Outlet />
        <Footer />
        {showButton && (
           <ButtonScroll handleScrollToTop={handleScrollToTop}/>
        )}
       </main>
    </>
  );
}

export default App;
