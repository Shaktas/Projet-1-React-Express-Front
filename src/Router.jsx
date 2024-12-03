import { createBrowserRouter } from "react-router-dom";
import CheckPwd from "./Components/password/CheckPwd";
import Layout from "./Components/Layout";
import ErrorPage from "./Components/ErrorPage";
import GenPwd from "./Components/password/GenPwd";
import Cards from "./Components/Cards/Cards";
import Login from "./Components/Authentification/Login";
import Profil from "./Components/Users/Profil";

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
        element: <Cards filter="Website" />,
      },
      {
        path: "application",
        element: <Cards filter="Application" />,
      },
      {
        path: "other",
        element: <Cards filter="Other" />,
      },
      {
        path: "auth",
        element: <Login />,
      },
      {
        path: "account",
        element: <Profil />,
      },
      {
        path: "myVault",
        element: <Cards />,
      },
    ],
  },
]);

export default router;
