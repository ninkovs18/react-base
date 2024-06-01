import React from "react";
import "./style.css";
import imageJPG from "./react-logo.jpg";
import imageSVG from "./react-1-logo.svg";

export const App = () => {
  return (
    <div>
      <h1>REACT BASE</h1>
      <img src={imageJPG} alt="React logo" width={300} height={300} />
      <img src={imageSVG} alt="React logo" width={300} height={300} />
    </div>
  );
};
