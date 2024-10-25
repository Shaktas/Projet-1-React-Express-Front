import { Outlet } from "react-router-dom";
import SideMenu from "./sideMenu/SideMenu";
import SearchBar from "./password/SearchBar";

function Layout() {
  return (
    <div className="flex">
      <SideMenu />
      <div className=" flex flex-col w-5/6 content-evenly ">
        <div className="flex-row">
          <SearchBar />
        </div>
        <div className="flex flex-col h-1/2 justify-center items-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
