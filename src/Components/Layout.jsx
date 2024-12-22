import { Outlet } from "react-router-dom";
import SideMenu from "./NavMenu/SideMenu";
import SearchBar from "./Password/SearchBar";
import AuthNav from "./NavMenu/AuthNav";
import { SearchProvider } from "../Context/SearchContext";
import { TooltipProvider } from "../Context/TooltipContext";
import { VaultProvider } from "../Context/VaultContext";
import { AuthenticateProvider } from "../Context/AuthenticateContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthenticateProvider>
        <div className="flex h-screen max-h-screen">
          <SideMenu />
          <div className=" flex flex-col w-full lg:w-5/6 h-full max-h-screen content-evenly">
            <SearchProvider>
              <TooltipProvider>
                <div className="flex items-center justify-start">
                  <SearchBar />
                  <AuthNav />
                </div>
                <div className="relative flex flex-col justify-start items-center overflow-y-scroll grow">
                  <VaultProvider>
                    <Outlet />
                  </VaultProvider>
                </div>
              </TooltipProvider>
            </SearchProvider>
          </div>
        </div>
      </AuthenticateProvider>
    </QueryClientProvider>
  );
}

export default Layout;
