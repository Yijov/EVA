import React, { useState, useEffect, useContext } from "react";
import PopUp from "../components/planerPageComponents/PopUp";
import ListsContainer from "../components/planerPageComponents/ListsContainer";
import { CurrentProjectContext } from "../context/CurrentProjectContext";

export default function Planer() {
  const { currentProjectName } = useContext(CurrentProjectContext);
  const [projectNameIsDefined, setProjectNameIsDefined] = useState(true);

  useEffect(() => {
    if (currentProjectName === "New Project") {
      setProjectNameIsDefined(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page">
      <h2 className="sectionName">
        NOW PLANING: {currentProjectName.toUpperCase()}
      </h2>

      {!projectNameIsDefined && (
        <PopUp setProjectNameIsDefined={setProjectNameIsDefined} />
      )}
      {projectNameIsDefined && <ListsContainer />}
    </div>
  );
}
