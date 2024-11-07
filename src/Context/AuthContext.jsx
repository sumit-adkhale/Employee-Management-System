import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContexts = createContext();

function AuthContext({ children }) {
  // localStorage.clear()
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    setLocalStorage();
    const { employees } = getLocalStorage();
    setUserData(employees);
  }, []);
  return (
    <div>
      <AuthContexts.Provider value={[userData, setUserData]}>
        {children}
      </AuthContexts.Provider>
    </div>
  );
}

export default AuthContext;
