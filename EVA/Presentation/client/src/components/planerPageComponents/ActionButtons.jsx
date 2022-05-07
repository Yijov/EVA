import React, { useContext } from "react";
import { CurrentProjectContext } from "../../context/CurrentProjectContext";
import Project from "../../clases/ProjectClass";
import Storage from "../../clases/Storage";
import { useHistory } from "react-router-dom";
export default function ActionButtons() {
  const {
    currentProjectName,
    currentProjectIndustry,
    currentProjectProducts,
    currentProjectAssets,
    currentProjectExpenses,
    currentProjectPayroll,
    updateState,
  } = useContext(CurrentProjectContext);

  const hadleSave = () => {
    const SavedProject = Project.createProject(
      currentProjectName,
      currentProjectIndustry,
      currentProjectProducts,
      currentProjectPayroll,
      currentProjectExpenses,
      currentProjectAssets
    );

    Storage.saveProject(SavedProject);
  };

  const hadleClear = () => {
    if (
      window.confirm(
        "¿Are you Sure you want to delete all data from this project?"
      )
    ) {
      Storage.clearProjectForms();
      updateState();
    }
  };
  //// handlePreviewProjec

  const history = useHistory();

  function hasLengthZero(array) {
    return array.length === 0;
  }

  const handlePreviewProjec = () => {
    if (
      [
        currentProjectProducts,
        currentProjectPayroll,
        currentProjectExpenses,
        currentProjectAssets,
      ].some(hasLengthZero)
    ) {
      window.alert("Please, copmplete at least one item of each cathegory");
    } else {
      hadleSave();
      history.push(`/project`);
    }
  };

  return (
    <div className="actionButtons">
      <button style={{ background: "green" }} onClick={handlePreviewProjec}>
        Preview Project
      </button>
      <button onClick={hadleSave}>Save Project</button>
      <button style={{ background: "red" }} onClick={hadleClear}>
        Clear All
      </button>
    </div>
  );
}
