import axios from "axios";
import React, { createContext, useContext, useState } from "react";
//Interface of values to be passed
interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}
interface AuthContextInterface {
  user: User | null;
  token: string | null;
  register: (name: string, email: string, password: string,) => Promise<void>;
  login: (email: string, password: string, ) => Promise<void>;
  logout: () => void;
}

//Initialize the context hook
export const AuthContext = createContext<AuthContextInterface | undefined>(undefined);

//Set provider
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const register = async (name: string, email: string, password: string) => {
    const response = await axios.post("http://localhost:5000/auth/register", {
        name,
        email,
        password,
    });
    const data = response.data;
    setToken(data.token);
    localStorage.setItem("token", data.token);
  }

  const login = async (email: string, password: string) => {
    const response = await axios.post("http://localhost:5000/auth/login", {
      email,
      password,
    });
    const data = response.data;
    setUser(data.user);
    setToken(data.token);
    localStorage.setItem("token", data.token);
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider value={{ user, token, register, login, logout,  }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    const authContext = useContext(AuthContext);
    if (!authContext) throw new Error("useAuth must be used within an AuthProvider");
    return authContext;
  };
  