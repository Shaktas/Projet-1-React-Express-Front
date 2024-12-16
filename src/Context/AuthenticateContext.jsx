import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AuthenticateContext = createContext({
  isAuthenticate: false,
  setIsAuthenticate: () => {},
});

export const AuthenticateProvider = ({ children }) => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  return (
    <AuthenticateContext.Provider value={{ isAuthenticate, setIsAuthenticate }}>
      {children}
    </AuthenticateContext.Provider>
  );
};

AuthenticateProvider.propTypes = {
  children: PropTypes.node,
};
