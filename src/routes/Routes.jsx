import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> }
    ],
  },
]);

export default router;
