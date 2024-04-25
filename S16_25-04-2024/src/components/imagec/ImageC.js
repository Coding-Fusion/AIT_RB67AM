import "./ImageC.css";
import { useState } from "react";

function ImageC() {
  let [state, setState] = useState(
    "https://th.bing.com/th/id/OIP.vHHBwcUFUaHWXntSnqKdCAAAAA?rs=1&pid=ImgDetMain"
  );

  let [title, setTitle] = useState("React JS");

  const changeToAngular = () => {
    setState(
      "https://th.bing.com/th/id/OIP.cGDDA2mfYkjiIhGaN8gDoAHaEK?rs=1&pid=ImgDetMain"
    );
    setTitle("Angular");
  };

  const changeToReact = () => {
    setState(
      "https://th.bing.com/th/id/OIP.vHHBwcUFUaHWXntSnqKdCAAAAA?rs=1&pid=ImgDetMain"
    );
    setTitle("React JS");
  };
  return (
    <div className="imagec">
      <h2>{title}</h2>
      <img src={state} width="500" height="300" />
      <br />
      <button onClick={changeToReact}>React</button>
      <button onClick={changeToAngular}>Angular</button>
    </div>
  );
}

export default ImageC;
