import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { api } from "../api/api";
import { useMutation } from "@tanstack/react-query";

export const AuthenticateContext = createContext({
  isAuthenticate: false,
  setIsAuthenticate: () => {},
  userId: null,
  setId: () => {},
});

export function AuthenticateProvider({ children }) {
  const [isAuthenticate, setIsAuthenticate] = useState(() => {
    return sessionStorage.getItem("id") ? true : false;
  });
  const [userId, setUserId] = useState(() => {
    return sessionStorage.getItem("id");
  });

  const refresh = useMutation({
    mutationFn: () => api.auth.refreshToken(),
    retry: false,
    onSuccess: (data) => {
      if (data && data.success) {
        sessionStorage.setItem("userId", data.userId);
        setIsAuthenticate(true);
        setUserId(data.userId);
      } else {
        throw new Error("Authentication failed");
      }
    },
    onError: (error) => {
      console.error("Authentication error:", error);
      setIsAuthenticate(false);
      setUserId(null);
      sessionStorage.removeItem("userId");
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
        sessionStorage.removeItem("userId");
        setIsAuthenticate(false);
        setUserId(null);
      }
    },
    onError: (error) => {
      console.error("Authentication error:", error);
      sessionStorage.removeItem("userId");
      setIsAuthenticate(false);
      setUserId(null);
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
      value={{ isAuthenticate, setIsAuthenticate, userId, setUserId }}
    >
      {children}
    </AuthenticateContext.Provider>
  );
}

AuthenticateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
