import { createBrowserRouter } from "react-router-dom";
import CheckPwd from "./Components/password/CheckPwd";
import Layout from "./Components/Layout";
import ErrorPage from "./Components/ErrorPage";
import GenPwd from "./Components/password/GenPwd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "checkPwd",
        element: <CheckPwd />,
      },
      {
        path: "genPwd",
        element: <GenPwd />,
      },
    ],
  },
]);

export default router;
