"use client"; // Only if using App Router
import { createContext, useState, useEffect, useContext } from "react";

import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { usePathname, useRouter } from "next/navigation";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  const determineIndex = () => {
    const current = pathName.split("/")[2];
    switch (current) {
      case "scout":
        return 0;
      case "player":
        return 1;
      case "coach":
        return 2;
    }

    return -1;
  };

  const page = determineIndex();
  const router = useRouter();

  const { getToken } = useToken();

  useEffect(() => {
    const token = getToken();
    if (page !== -1 && token === undefined) {
      router.back();
    }
  }, []);

  return <>{children}</>;
}

export function useToken() {
  const getToken = () => Cookies.get("scoutflair-token");
  const setToken = (token: string) => {
    const decoded = jwtDecode(token);
    let expiryDate: Date | undefined;
    if (decoded.exp) {
      expiryDate = new Date(decoded?.exp * 1000);
    }

    Cookies.set("scoutflair-token", token, {
      expires: expiryDate,
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
  };
  const removeToken = () => {
    Cookies.remove("scoutflair-token");
  };

  return { getToken, setToken, removeToken };
}
