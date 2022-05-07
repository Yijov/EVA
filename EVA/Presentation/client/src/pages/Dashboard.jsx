import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { CurrentProjectContext } from "../context/CurrentProjectContext";
import { AchivedProjectsContext } from "../context/AchivedProjectsContext";
import banner from "../images/banner2.jpg";

export default function Dashboard() {
  const { updateState, resetLocalStorage } = useContext(CurrentProjectContext);
  const { archivedProjects, updateArchived } = useContext(
    AchivedProjectsContext
  );

  const bannerBackgound = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
  };

  useEffect(() => {
    resetLocalStorage();
    updateState();
    updateArchived();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page">
      <h2 className="sectionName">DASHBOARD</h2>
      <div className="dashboard" style={bannerBackgound}>
        {archivedProjects.length && (
          <div className="projectList">
            <h2>My Projects</h2>
            <br />
            {archivedProjects.map((project) => (
              <ProjectListItem
                key={project.projectName}
                nameOfTheProject={project.projectName}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectListItem({ nameOfTheProject }) {
  const { LoadProject } = useContext(AchivedProjectsContext);
  const { updateState } = useContext(CurrentProjectContext);
  const history = useHistory();

  const handleOpen = async () => {
    await LoadProject(nameOfTheProject);
    await updateState();
    history.push(`/project`);
  };
  return (
    <div onClick={handleOpen} className="ProjectListItem">
      {nameOfTheProject}
    </div>
  );
}
