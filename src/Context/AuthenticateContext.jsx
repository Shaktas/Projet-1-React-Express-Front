import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { api } from "../api/api";
import { useMutation } from "@tanstack/react-query";

export const AuthenticateContext = createContext({
  isAuthenticate: false,
  setIsAuthenticate: () => {},
  id: null,
  setId: () => {},
});

export function AuthenticateProvider({ children }) {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [id, setId] = useState(null);

  const refresh = useMutation({
    mutationFn: () => api.auth.refreshToken(),
    retry: false,
    onSuccess: (data) => {
      if (data && data.success) {
        setIsAuthenticate(true);
        setId(data.id);
        sessionStorage.setItem("id", data.id);
      } else {
        throw new Error("Authentication failed");
      }
    },
    onError: (error) => {
      console.error("Authentication error:", error);
      setIsAuthenticate(false);
      setId(null);
    },
  });

  useEffect(() => {
    refresh.mutate();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const verifyAuthentication = useMutation({
    mutationFn: () => api.auth.verifyToken(),
    retry: false,
    onSuccess: (data) => {
      if (data && !data.success) {
        setIsAuthenticate(false);
        setId(null);
      }
    },
    onError: (error) => {
      console.error("Authentication error:", error);
      setIsAuthenticate(false);
      setId(null);
    },
  });

  useEffect(() => {
    if (isAuthenticate) {
      verifyAuthentication.mutate();
      const interval = setInterval(() => {
        verifyAuthentication.mutate();
      }, 60000);
      return () => clearInterval(interval);
    }
    return () => {};
  }, [isAuthenticate]); // eslint-disable-line react-hooks/exhaustive-deps

  // useEffect(() => {
  //   const refresh = async () => {
  //     try {
  //       const response = await api.auth.refreshToken();
  //       console.log(response);
  //       if (response.success) {
  //         setIsAuthenticate(true);
  //         setId(response.id);
  //       }
  //     } catch (error) {
  //       console.error("Auth initialization failed:", error);
  //     }
  //   };
  //   refresh();
  // }, []);

  // useEffect(() => {
  //   if (isAuthenticate) {
  //     checkTokenValidity();
  //     const interval = setInterval(checkTokenValidity, 60000);
  //     return () => clearInterval(interval);
  //   }
  //   return () => {};
  // }, [isAuthenticate]);

  // const checkTokenValidity = async () => {
  //   try {
  //     const checkToken = await api.auth.verifyToken();
  //     if (!checkToken.success) {
  //       setIsAuthenticate(false);
  //       setId(null);
  //     }
  //   } catch (error) {
  //     setIsAuthenticate(false);
  //     setId(null);
  //     console.error(error);
  //   }
  // };

  return (
    <AuthenticateContext.Provider
      value={{ isAuthenticate, setIsAuthenticate, id, setId }}
    >
      {children}
    </AuthenticateContext.Provider>
  );
}

AuthenticateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
