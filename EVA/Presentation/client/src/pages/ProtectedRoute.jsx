import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthenticationContext } from "../context/AuthenticationContext";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const { auth } = useContext(AuthenticationContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
}
