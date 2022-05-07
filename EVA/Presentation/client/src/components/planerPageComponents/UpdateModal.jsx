import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

export default function UpdateModal(props) {
  const [visible, setVisible] = useState(false);
  const nodeRef = useRef(null);

  const Toggle = () => setVisible(!visible);

  const hadleDelete = () => {
    props.deleteAction(props.item);
  };

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

  const buttonstyle = {
    background: "red",
    color: "white",
    width: "100%",
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "center",
    padding: "0.8rem",
    borderRadius: "8px",
    margin: "0.3rem",
    cursor: "pointer",
    textShadow: "1px 2px 2px rgba(0, 0, 0, 0.6)",
  };

  return (
    <>
      <tr onDoubleClick={Toggle}>
        {!visible && props.row}
        <CSSTransition
          in={visible}
          nodeRef={nodeRef}
          timeout={400}
          classNames="fader"
        >
          <td ref={nodeRef} style={ContainerStyle}>
            <div>
              {React.cloneElement(props.children, { Toggle: Toggle })}
              <div style={{ display: "flex" }}>
                <button
                  style={{ ...buttonstyle, background: "gray" }}
                  onClick={Toggle}
                >
                  {"CANCEL"}
                </button>
                <button style={buttonstyle} onClick={hadleDelete}>
                  {"DELETE"}
                </button>
              </div>
            </div>
          </td>
        </CSSTransition>
      </tr>
    </>
  );
}
