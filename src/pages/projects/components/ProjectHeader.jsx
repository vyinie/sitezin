import React from "react";
import BackIcon from "./BackIcon";

const ProjectHeader = ({title}) => {
  return (
    <div className="projectHeader">
      <BackIcon />
      <h1 className="projectHeaderTitle">{title}</h1>
    </div>
  );
};

export default ProjectHeader;
