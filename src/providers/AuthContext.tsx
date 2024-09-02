"use client"; // Only if using App Router
import { createContext, useState, useEffect, useContext } from "react";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

interface IAuthContext {
  login: (token: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
  startRecover: (username: string) => void;
  endRecover: () => void;
  getUsername: () => string | null;
}

const AuthContext = createContext<IAuthContext>({
  login: () => null,
  logout: () => null,
  isLoggedIn: () => false,
  startRecover: () => null,
  endRecover: () => null,
  getUsername: () => null,
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setAuthToken(localStorage.getItem("authToken"));
      setUsername(localStorage.getItem("username"));
    }

    TimeAgo.addLocale(en);
  }, []);

  const startRecover = (username: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("username", username);
      setUsername(username);
    }
  };

  const endRecover = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("username");
      setUsername(null);
    }
  };

  const getUsername = () => username;

  const login = (token: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("authToken", token);
      setAuthToken(token);
    }
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("authToken");
      setAuthToken(null);
    }
  };

  const isLoggedIn = () => !!authToken;

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isLoggedIn,
        startRecover,
        endRecover,
        getUsername,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
