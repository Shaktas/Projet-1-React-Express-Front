import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { api } from "../api/api";

export const AuthenticateContext = createContext({
  isAuthenticate: false,
  setIsAuthenticate: () => {},
  id: null,
  setId: () => {},
});

export const AuthenticateProvider = ({ children }) => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    const refresh = async () => {
      try {
        const response = await api.auth.refreshToken();
        if (response.success) {
          setIsAuthenticate(true);
          setId(response.id);
        }
      } catch (error) {
        console.error("Auth initialization failed:", error);
      }
    };
    refresh();
  }, []);

  useEffect(() => {
    if (isAuthenticate) {
      checkTokenValidity();
      const interval = setInterval(checkTokenValidity, 60000);
      return () => clearInterval(interval);
    }
    return () => {};
  }, [isAuthenticate]);

  const checkTokenValidity = async () => {
    try {
      const checkToken = await api.auth.verifyToken();
      if (!checkToken.success) {
        setIsAuthenticate(false);
        setId(null);
      }
    } catch (error) {
      setIsAuthenticate(false);
      setId(null);
      console.error(error);
    }
  };

  return (
    <AuthenticateContext.Provider
      value={{ isAuthenticate, setIsAuthenticate, id, setId }}
    >
      {children}
    </AuthenticateContext.Provider>
  );
};

AuthenticateProvider.propTypes = {
  children: PropTypes.node,
};
