import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { toggle } = useContext(ThemeContext);
  return (
    <main className={`${!toggle ? "light_bg" : "dark_bg"}`}>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
