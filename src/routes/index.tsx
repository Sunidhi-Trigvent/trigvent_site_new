import MainLayout from "../view/layout";
import { createBrowserRouter } from "react-router-dom";
import Home from "../view/pages/home/Home";
import About from "../view/pages/about/About";
import Service from "../view/pages/service/Service";
import Career from "../view/pages/career/Career";
import Hire from "../view/pages/hire/Hire";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutus",
        element: <About />,
      },
      {
        path: "/services",
        element: <Service />,
      },

      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/hire",
        element: <Hire />,
      },
    ],
  },
]);

export default routers;
