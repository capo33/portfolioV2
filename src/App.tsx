import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

function App() {
  return (
    <main className="">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
