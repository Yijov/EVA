import React from "react";

export default function About() {
  return (
    <div className="page">
      <h2 className="sectionName">ABOUT THE CODE</h2>
      <div className="information">
        <p>
          This is a full stack app Using react for the frontend and express for
          the backend. Its main functionality is to calculate the viability
          indicators of business ideas.
        </p>
        <p>
          The front end is built with some clases that format the data imputed
          by the user in the way the API expexts to receive it. The backend
          contains a rest API With a single endpoint that calculates all of the
          indicators and returns them in JSON format. For that, it transforms
          the data posted into an object that calculates everyting{" "}
        </p>
        <p>
          This App uses the local storage of the browser to save the settings
          and projects of the user
        </p>
        <br />
        <p>Yirbett Joseph 2020</p>
      </div>
    </div>
  );
}
