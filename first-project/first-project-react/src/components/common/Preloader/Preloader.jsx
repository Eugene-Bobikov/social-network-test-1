import React from "react";
import preloader from "../../../assets/Images/preloader.gif";

const Preloader = (props) => {
  return (
    <div>
      <img src={preloader} alt="preloader" />
    </div>
  );
};

export default Preloader;
