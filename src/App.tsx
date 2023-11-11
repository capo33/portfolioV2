import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, ScrollToTop } from "./components";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

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
    </main>
      </>
  );
}

export default App;
