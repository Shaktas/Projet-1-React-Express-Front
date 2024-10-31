import { Outlet } from "react-router-dom";
import SideMenu from "./NavMenu/Sidemenu";
import SearchBar from "./Password/SearchBar";

function Layout() {
  const width = window.innerWidth;

  console.log(width);

  if (width >= 1024) {
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
  } else {
    console.log("hello");
  }
}

export default Layout;
