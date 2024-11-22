import { Outlet } from "react-router-dom";
import SideMenu from "./NavMenu/Sidemenu";
import SearchBar from "./Password/SearchBar";
import AuthNav from "./NavMenu/AuthNav";

function Layout() {
  return (
    <div className="flex h-screen max-h-screen">
      <SideMenu />
      <div className=" flex flex-col w-5/6 h-full max-h-screen content-evenly">
        <div className="flex items-center justify-start">
          <SearchBar />
          <AuthNav />
        </div>
        <div className="relative flex flex-col justify-start items-center overflow-y-scroll grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
