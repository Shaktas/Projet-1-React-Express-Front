import { createBrowserRouter } from "react-router-dom";
import CheckPwd from "./Components/password/CheckPwd";
import Layout from "./Components/Layout";
import ErrorPage from "./Components/ErrorPage";
import GenPwd from "./Components/password/GenPwd";
import Cards from "./Components/Cards/Cards";
import Login from "./Components/Authentification/Login";
import User from "./Components/Authentification/User";

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
      {
        path: "/",
        element: <Cards />,
      },
      {
        path: "website",
        element: <Cards />,
      },
      {
        path: "application",
        element: <Cards />,
      },
      {
        path: "other",
        element: <Cards />,
      },
      {
        path: "auth",
        element: <Login />,
      },
      {
        path: "account",
        element: <User />,
      },
    ],
  },
]);

export default router;
