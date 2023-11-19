import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "../App";
import { About, Contact, Home, Projects, Tech } from "../page";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='tech-stack' element={<Tech />} />
      <Route path='projects' element={<Projects />} />
    </Route>
  )
);

export default routes;
