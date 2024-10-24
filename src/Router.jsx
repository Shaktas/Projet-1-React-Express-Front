import { createBrowserRouter } from "react-router-dom";
import CheckElement from "./Components/password/CheckElement";
import Layout from "./Components/Layout";
import ErrorPage from "./Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "CheckElement",
        element: <CheckElement />,
      },
    ],
  },
]);

export default router;
