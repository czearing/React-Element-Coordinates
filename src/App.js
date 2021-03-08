import React from "react";
import "./styles.css";

export default function App() {
  const elementRef = React.useRef();
  const [objectCoordinates, setObjectCoordinates] = React.useState({
    left: 0,
    top: 0
  });

  const getElementCoordinates = (el) => {
    const rect = el.getBoundingClientRect();
    setObjectCoordinates({
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    });
  };

  React.useEffect(() => {
    getElementCoordinates(elementRef.current);
    // Add deps relevant to implementation.
  }, []);

  return (
    <div className="App">
      <div
        ref={elementRef}
        style={{ backgroundColor: "red", width: "100px", height: "100px" }}
      ></div>
      left: {objectCoordinates.left} top: {objectCoordinates.left}{" "}
    </div>
  );
}
