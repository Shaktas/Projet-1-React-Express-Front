import { createBrowserRouter } from "react-router-dom";
import CheckPwd from "./Components/Password/CheckPwd";
import Layout from "./Components/Layout";
import ErrorPage from "./Components/ErrorPage";
import GenPwd from "./Components/Password/GenPwd";
import Cards from "./Components/Cards/Cards";
import Login from "./Components/Authentication/Login";
import Profil from "./Components/Users/Profil";
import PolitiqueProtection from "./Components/RGPD/PolitiqueProtection";
import ResetPassword from "./Components/Authentication/ResetPassword";
import ForgetPassword from "./Components/Authentication/ForgetPassword";

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
        element: <Profil />,
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
      {
        path: "politiqueProtection",
        element: <PolitiqueProtection />,
      },
      {
        path: "reset-password/:reset",
        element: <ResetPassword />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
    ],
  },
]);

export default router;
