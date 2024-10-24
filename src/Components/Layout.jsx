import { Outlet } from "react-router-dom";
import SideMenu from "./sideMenu/SideMenu";

function Layout() {
  return (
    <div className="flex">
      <SideMenu />
      <div className="flex-col w-4/5">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
