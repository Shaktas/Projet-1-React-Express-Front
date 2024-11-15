import { Outlet } from 'react-router-dom';
import SearchBar from './Password/SearchBar';
import SideMenu from './NavMenu/SideMenu';

function Layout() {
  return (
    <div className="flex h-screen max-h-screen">
      <SideMenu />
      <div className=" flex flex-col w-5/6 h-full max-h-screen content-evenly">
        <SearchBar />
        <div className="flex flex-col overflow-y-scroll grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
