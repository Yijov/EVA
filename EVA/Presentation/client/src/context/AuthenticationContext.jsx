import React, { createContext, useState } from "react";
export const AuthenticationContext = createContext();
export function AuthenticationContextProvider(props) {
  const acceptedUser = "yirbett";
  const acceptedPassword = "calculator404";
  const [auth, setAuth] = useState(true);
  const [usser, setUser] = useState("");
  const [pasword, setPasword] = useState("");
  const handleAuth = () => {
    if (usser === acceptedUser && pasword === acceptedPassword) {
      setAuth(true);
      return true;
    } else {
      setAuth(false);
      return false;
    }
  };
  return (
    <div>
      <AuthenticationContext.Provider
        value={{
          setUser,
          usser,
          setPasword,
          pasword,
          handleAuth,
          auth,
          setAuth,
        }}
      >
        {props.children}
      </AuthenticationContext.Provider>
    </div>
  );
}
