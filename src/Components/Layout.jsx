import { Outlet } from "react-router-dom";
import SideMenu from "./NavMenu/Sidemenu";
import SearchBar from "./Password/SearchBar";

function Layout() {
  return (
    <div className="flex min-h-screen">
      <SideMenu />
      <div className=" flex flex-col w-5/6 min-h-screen content-evenly ">
        <div className="flex-row">
          <SearchBar />
        </div>
        <div className="flex flex-col h-1/2 justify-center items-center relative">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
