import { useContext } from "react";
import { AuthenticateContext } from "../../Context/AuthenticateContext";
import UserButton from "../ActionComponents/UserButton";
import LogInButton from "../ActionComponents/LogInButton";
import LogOutButton from "../ActionComponents/LogOutButton";
import { NavLink } from "react-router-dom";

function AuthNav() {
  const { isAuth } = useContext(AuthenticateContext);

  return (
    <div className="absolute top-[1-vh] right-0">
      <div className="flex gap-2 justify-evenly items-center">
        {isAuth ? (
          <NavLink to="/account">
            <UserButton />
          </NavLink>
        ) : (
          ""
        )}
        {isAuth ? (
          <LogOutButton />
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
