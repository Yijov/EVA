import React, { useContext } from "react";
import { CurrentProjectContext } from "../../context/CurrentProjectContext";
import { Link } from "react-router-dom";
import Storage from "../../clases/Storage";

export default function ActionButtons() {
  const { currentProjectName } = useContext(CurrentProjectContext);

  const handleDelete = (e) => {
    if (window.confirm("¿Are you sure you want to delete this project?")) {
      Storage.removeProject(currentProjectName);
      window.alert(`The project ${currentProjectName} was deleted`);
    } else {
      e.preventDefault();
    }
  };
  return (
    <section className="actionbuttons2">
      <Link to="/planer">
        <i title="Edit Project" className="fa fa-table "></i>
      </Link>
      <Link to="/project">
        <i title="Back to Project Preview" className="fa fa-bar-chart-o"></i>
      </Link>
      <Link to="/">
        <i
          onClick={handleDelete}
          title="Delete Project"
          className="fa fa-trash-o"
        ></i>
      </Link>
    </section>
  );
}
