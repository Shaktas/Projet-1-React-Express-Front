import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu/SideMenu";

function Layout() {
  return (
    <>
      <SideMenu />
      <Outlet />
    </>
  );
}

export default Layout;
