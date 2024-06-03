import React from "react";
import "./style.css";
import ClickCounter from "./ClickCounter";
// import imageJPG from "./react-logo.jpg";
// import imageSVG from "./react-1-logo.svg";

export const App = () => {
  return (
    <div>
      <h1>REACT BASE APP</h1>
      <h2>
        ENVIROMENT - {process.env.NODE_ENV} - {process.env.name}
      </h2>
      <ClickCounter />
      {/* <img src={imageJPG} alt="React logo" width={300} height={300} />
      <img src={imageSVG} alt="React logo" width={300} height={300} /> */}
    </div>
  );
};
