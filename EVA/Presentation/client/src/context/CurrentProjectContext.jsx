import React, { createContext, useState, useEffect } from "react";
import Storage from "../clases/Storage";

export const CurrentProjectContext = createContext();

export function CurrentProjectContextProvider(props) {
  const [currentProjectProducts, setCurrentProjectProducts] = useState([]);
  const [currentProjectAssets, setCurrentProjectAssets] = useState([]);
  const [currentProjectExpenses, setCurrentProjectExpenses] = useState([]);
  const [currentProjectPayroll, setCurrentProjectPayroll] = useState([]);
  const [currentProjectIndustry, setCurrentProjectIndustry] = useState("");
  const [currentProjectName, setCurrentProjectName] = useState("");
  const [currentProjecBody, setCurrentProjecBody] = useState([]);

  function updateState() {
    setCurrentProjecBody(
      Storage.getProjecs().filter(
        (proj) =>
          proj.projectName === localStorage.getItem("CurrentProjectName")
      )[0]
    );
    setCurrentProjectProducts(
      JSON.parse(localStorage.getItem("currentProjectProducts"))
    );
    setCurrentProjectExpenses(
      JSON.parse(localStorage.getItem("currentProjectExpenses"))
    );

    setCurrentProjectPayroll(
      JSON.parse(localStorage.getItem("currentProjectPayroll"))
    );
    setCurrentProjectAssets(
      JSON.parse(localStorage.getItem("currentProjectAssets"))
    );

    setCurrentProjectName(localStorage.getItem("CurrentProjectName"));
    setCurrentProjectIndustry(localStorage.getItem("CurrentProjectIndustry"));
  }
  function resetLocalStorage() {
    Storage.newProject();
  }

  useEffect(() => {
    updateState();
  }, []);

  return (
    <div>
      <CurrentProjectContext.Provider
        value={{
          currentProjectProducts,
          setCurrentProjectProducts,
          currentProjectAssets,
          setCurrentProjectAssets,
          currentProjectExpenses,
          setCurrentProjectExpenses,
          currentProjectPayroll,
          setCurrentProjectPayroll,
          currentProjectIndustry,
          setCurrentProjectIndustry,
          currentProjectName,
          setCurrentProjectName,
          updateState,
          resetLocalStorage,
          currentProjecBody,
        }}
      >
        {props.children}
      </CurrentProjectContext.Provider>
    </div>
  );
}
