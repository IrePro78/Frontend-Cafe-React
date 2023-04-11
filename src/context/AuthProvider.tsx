import React, { createContext, useState } from "react";
import { Auth } from "types";

interface ContextAuth {
  auth: Auth;
  setAuth: (auth: Auth) => void;
}

const AuthContext = createContext<ContextAuth>({
  auth: {
    email: "",
    password: "",
    role: "",
    access_token: "",
  },
  setAuth: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
    role: "",
    access_token: "",
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
