import { createBrowserRouter } from "react-router-dom";
import CheckElement from "./Components/Password/CheckElement";
import Layout from "./Components/Layout";
import ErrorPage from "./Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "./Components/Password/CheckElement",
        element: <CheckElement />,
      },
    ],
  },
]);

export default router;
