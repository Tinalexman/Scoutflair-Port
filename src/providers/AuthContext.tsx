import { createContext, useState, useContext } from 'react';

interface IAuthContext {
  login: (token: any) => any,
  logout: () => any,
  isLoggedIn: () => boolean,
  startRecover: (userame: any) => any,
  endRecover: () => any,
  getUserame: () => any,
}
// Create AuthContext
const AuthContext = createContext<IAuthContext>({login: ({}) => null, logout: () => null, isLoggedIn: () => false, startRecover: () => null, endRecover: () => null, getUserame: () => null });

// Custom hook to use the AuthContext
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default function AuthProvider ({ children }: any) {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || null);
  const [userame, setuserame] = useState(localStorage.getItem('userame') || null);

  const startRecover = (userame: any) => {
    localStorage.setItem('userame', userame);
    setuserame(userame)
  }

  const endRecover = () => {
    localStorage.removeItem("userame");
    setuserame(null)
  }

  const getUserame = () => {
    return userame
  }

  const login = (token: any) => {
    localStorage.setItem('authToken', token);
    setAuthToken(token);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setAuthToken(null);
  };

  const isLoggedIn = () => !!authToken;

  return (
    <AuthContext.Provider value={{ login, logout, isLoggedIn, startRecover, endRecover, getUserame }}>
      {children}
    </AuthContext.Provider>
  );
};
