import React, { useContext, useState } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";

export default function LogIn(props) {
  const [errorMessage, setErrorMessage] = useState("");
  const { setUser, setPasword, handleAuth } = useContext(AuthenticationContext);
  const handleUserChange = (e) => {
    setUser(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPasword(e.target.value);
  };
  const handleeLogIn = (e) => {
    e.preventDefault();
    if (!handleAuth()) {
      setErrorMessage("User or password is incorrect");
    } else {
      props.history.push("/dashboard");
    }
  };
  return (
    <div className="page">
      <div id={"planerPopUp"}>
        <h2>PLEASE SIGN IN</h2>

        <form className={"fade"} onSubmit={handleeLogIn}>
          <label htmlFor="project-name">User</label>
          <input type="text" onChange={handleUserChange} required></input>
          <label htmlFor="project-industry">Pasword</label>
          <input
            type="password"
            onChange={handlePasswordChange}
            required
          ></input>
          <div id="errorMessage">{errorMessage}</div>
          <button>Log in</button>
        </form>
      </div>
    </div>
  );
}
