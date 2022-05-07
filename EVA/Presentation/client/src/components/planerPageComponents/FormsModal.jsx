import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function FormsModal(props) {
  const [visible, setVisible] = useState(false);

  const Toggle = () => setVisible(!visible);

  const ContainerStyle = visible
    ? {
        display: "block",
        height: "fit-content",
        width: "95%",
        position: "absolute",
        top: "5rem",
        zIndex: "4",
      }
    : { display: "none" };

  const burttonText = visible ? "CANCEL" : "+ADD+ ";

  return (
    <div>
      <button onClick={Toggle}>{burttonText}</button>

      <CSSTransition in={visible} timeout={1000} classNames="fader">
        <div style={ContainerStyle}>
          {" "}
          {React.cloneElement(props.children, {
            Toggle: Toggle,
          })}{" "}
        </div>
      </CSSTransition>
    </div>
  );
}
//the previous element is to render all the forms. It Uses ReactClone to pass down the Toggle Functio to the chilldren so the form closes when submmited
