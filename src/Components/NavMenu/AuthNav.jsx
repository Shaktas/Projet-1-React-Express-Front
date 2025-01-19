import { useContext } from "react";
import { AuthenticateContext } from "../../Context/AuthenticateContext";
import UserButton from "../ActionComponents/UserButton";
import LogInButton from "../ActionComponents/LogInButton";
import LogOutButton from "../ActionComponents/LogOutButton";
import { NavLink } from "react-router-dom";
import { api } from "../../api/api";

function AuthNav() {
  const { isAuthenticate, setIsAuthenticate, setUserId } =
    useContext(AuthenticateContext);

  async function setClickHandler() {
    const logout = await api.auth.logout();
    if (logout?.success) {
      setIsAuthenticate(false);
      setUserId(null);
    }
  }
  return (
    <div className="absolute top-[1-vh] right-0">
      <div className="flex gap-2 justify-evenly items-center">
        {isAuthenticate ? (
          <NavLink to="/account">
            <UserButton />
          </NavLink>
        ) : (
          ""
        )}
        {isAuthenticate ? (
          <LogOutButton clickHandler={setClickHandler} />
        ) : (
          <NavLink to="/auth">
            {" "}
            <LogInButton />{" "}
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default AuthNav;
