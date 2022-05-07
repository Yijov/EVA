import React, { useState, useContext } from "react";
import { CurrentProjectContext } from "../../context/CurrentProjectContext";

export default function PopUp({ setProjectNameIsDefined }) {
  const { setCurrentProjectName, setCurrentProjectIndustry } = useContext(
    CurrentProjectContext
  );
  const [projectName, setprojectName] = useState("");
  const [industryName, setIndustryName] = useState("");

  const handleProjectName = (e) => {
    setprojectName(e.target.value);
  };

  const handleIndustryName = (e) => {
    setIndustryName(e.target.value);
  };

  const displayPlaner = (e) => {
    e.preventDefault();
    localStorage.setItem("CurrentProjectName", projectName);
    localStorage.setItem("CurrentProjectIndustry", industryName);
    setCurrentProjectName(projectName);
    setCurrentProjectIndustry(industryName);
    setProjectNameIsDefined(true);
  };

  return (
    <div id={"planerPopUp"}>
      <h2>SELECT PROJECT NAME</h2>

      <form className={"fade"} onSubmit={displayPlaner}>
        <label htmlFor="project-name">Project Name</label>
        <input type="text" onChange={handleProjectName} required></input>
        <label htmlFor="project-industry">Industry</label>
        <input type="text" onChange={handleIndustryName} required></input>
        <button>Done</button>
      </form>
    </div>
  );
}
