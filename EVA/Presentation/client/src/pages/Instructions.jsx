import React from "react";

export default function Instructions() {
  return (
    <div className="page">
      <h2 className="sectionName">HOW TO USE</h2>

      <div className="snipets">
        <div className="snipet">
          <img
            src={require("../images/Dashboard.png")}
            alt="Select project name PopUp"
          />
          <p>
            1- This is the part of the app where you can see your
            projectslisted. Naturaly at first this section is empty.
          </p>
          <p>
            2- This is your nav. It gives you direct acces to the dasdboard from
            any part of the app. You can also go to the new projects page to
            build projects an back and forth.
          </p>
          <p> 3- The setting part is under developement</p>
        </div>

        <div className="snipet">
          <img
            src={require("../images/SelectProjectName.png")}
            alt="Select project name PopUp"
          />
          <p>
            Before starting with your project, give it a name. Please try to not
            repeat names so that the app doesnt get confused and think you are
            trying to edit an old project. your industry{" "}
          </p>
          <img
            src={require("../images/PlanerPage.png")}
            alt="Select project name PopUp"
          />
        </div>
        <div className="snipet">
          <p>
            To start creating your project simply input the list of parameters
            by adding (1 and 2) your products, assets, etc. and press some of
            the action buttons to save and then prevew (5) the project
            indicators
          </p>
          <p>
            If you what to modify a parameter, simply doubleckick (3) on the
            item and the update form (4) will display
          </p>
          <p> hit preview to see the results</p>
        </div>
        <div className="snipet">
          <img
            src={require("../images/Preview.PNG")}
            alt="Select project name PopUp"
          />
          <p>
            This are the results of a projec being calculated for the app. What
            you see is the projection of how the business will behave if the
            conditions stablished at the beggining are stable.{" "}
          </p>
          <p>
            The top rigt corner has the action buttons that allow you to go to
            the budget pannel and to go back to edit your project parameters
          </p>

          <img
            src={require("../images/Budget.PNG")}
            alt="Select project name PopUp"
          />
        </div>
      </div>
    </div>
  );
}
