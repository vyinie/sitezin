import { useEffect, useRef, useState } from "react";
import "../Projects.css";
import { Link } from "react-router-dom";
import {SetDisplayToggle} from "/src/functions/SetDisplayToggle.jsx";

export default function Item({ title, des, id, link, img }) {
  const projectRef = useRef();

  return (
    <div className="itemBox">
      <p className="projectItemTitle">{title}</p>
      <Link to={link} id={`itemBox${id}`} className="boxLink">
        <img className="itemImg" src={img} alt="coisa" />
      </Link>

      <div ref={projectRef} className="description">
        <p>{des}</p>
      </div>
      <span
        onMouseOut={() => {
          setTimeout(() => {
            SetDisplayToggle(projectRef, "true");
          }, 50);
        }}
        onClick={() => {
          SetDisplayToggle(projectRef);
        }}
        className="descBtn"
      >
        i
      </span>
    </div>
  );
}
