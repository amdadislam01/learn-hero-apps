import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import ErrorPage from "../pages/ErrorPage";
import Apps from "../pages/Apps";
import AppsDetails from "../pages/AppsDetails";
import Installed from "../pages/Installed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/app/:id",
        element: <AppsDetails />
      },
      {
        path: "/install",
        element: <Installed />
      }
    ],
  },
]);

export default router;
