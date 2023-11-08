import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

function App() {
  return (
    <main className="bg-[#25262]">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
