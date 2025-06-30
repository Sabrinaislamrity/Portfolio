import { createBrowserRouter } from "react-router";
import Main from "../layouts/Main";

import About from "../pages/About";
import Projects from "../pages/Projects";

import Contact from "../pages/Contact";
import Error from "../pages/Error";
import Home from "../components/Home";
import Skill from "../pages/Skill";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
                index: true,
                Component: Home,
                
            },
   {
    path: "/about",
    element: <About></About>,
  },
   {
    path: "/projects",
    element: <Projects></Projects>,
  },
   {
    path: "/skill",
    element: <Skill></Skill>,
  },
   {
    path: "/contact",
    element: <Contact></Contact>,
  },

    ],
  },
   




    {
    path: "/*",
    element: <Error></Error>,
  },
]);

export default router;