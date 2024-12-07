import { Outlet } from "react-router-dom";
import SideMenu from "./NavMenu/SideMenu";
import SearchBar from "./Password/SearchBar";
import AuthNav from "./NavMenu/AuthNav";
import { SearchProvider } from "../Context/SearchContext";

function Layout() {
  return (
    <div className="flex h-screen max-h-screen">
      <SideMenu />
      <div className=" flex flex-col w-full lg:w-5/6 h-full max-h-screen content-evenly">
        <SearchProvider>
          <div className="flex items-center justify-start">
            <SearchBar />
            <AuthNav />
          </div>
          <div className="relative flex flex-col justify-start items-center overflow-y-scroll grow">
            <Outlet />
          </div>
        </SearchProvider>
      </div>
    </div>
  );
}

export default Layout;
