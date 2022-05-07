//Modules
import React, { useRef } from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

//constext
import { CurrentProjectContextProvider } from "./context/CurrentProjectContext";
import { AchivedProjectsContextProvider } from "./context/AchivedProjectsContext";
import { AuthenticationContextProvider } from "./context/AuthenticationContext";

import "./css/App.css";

//Pages and Components
import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./pages/Project";
import Dashboard from "./pages/Dashboard";
import Planer from "./pages/Planer";
import BudgetPage from "./pages/BudgetPage";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Instructions from "./pages/Instructions";
import NotFound from "./pages/NotFound";
import LogIn from "./pages/LogIn";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  const nodeRef = useRef(null);

  return (
    <div className="App">
      <AuthenticationContextProvider>
        <CurrentProjectContextProvider>
          <AchivedProjectsContextProvider>
            <Header />
            <Nav />

            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={1300}
                    ref={nodeRef}
                  >
                    <Switch>
                      <ProtectedRoute path={"/"} exact component={Dashboard} />
                      <Route path={"/login"} exact component={LogIn} />
                      <ProtectedRoute
                        path={"/dashboard"}
                        exact
                        component={Dashboard}
                      />
                      <ProtectedRoute
                        path={"/project"}
                        exact
                        component={Project}
                      />
                      <ProtectedRoute
                        path={"/planer"}
                        exact
                        component={Planer}
                      />
                      <ProtectedRoute
                        path={"/budget"}
                        exact
                        component={BudgetPage}
                      />
                      <ProtectedRoute
                        path={"/settings"}
                        exact
                        component={Settings}
                      />
                      <ProtectedRoute
                        path={"/instructions"}
                        exact
                        component={Instructions}
                      />
                      <ProtectedRoute path={"/about"} exact component={About} />
                      <ProtectedRoute path={"*"} component={NotFound} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </AchivedProjectsContextProvider>
        </CurrentProjectContextProvider>
      </AuthenticationContextProvider>
    </div>
  );
}

export default App;
