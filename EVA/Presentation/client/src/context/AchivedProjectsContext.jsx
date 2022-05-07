import React, { createContext, useState, useEffect } from "react";
import Storage from "../clases/Storage";

export const AchivedProjectsContext = createContext();

export function AchivedProjectsContextProvider(props) {
  const [archivedProjects, setArchivedProjects] = useState([]);

  function updateArchived() {
    setArchivedProjects(Storage.getProjecs());
  }
  function LoadProject(projectName) {
    Storage.loadProject(projectName);
  }

  useEffect(() => {
    updateArchived();
  }, []);

  return (
    <div>
      <AchivedProjectsContext.Provider
        value={{
          archivedProjects,
          setArchivedProjects,
          updateArchived,
          LoadProject,
        }}
      >
        {props.children}
      </AchivedProjectsContext.Provider>
    </div>
  );
}
