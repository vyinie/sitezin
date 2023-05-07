import { useEffect, useState } from "react";
import "../Projects.css";
import { Link } from "react-router-dom";

export default function Item({ title, des, id, link }) {
  const [projectTitle, setProjectTitle] = useState("");
  useEffect(() => {
    setProjectTitle(title);
  }, []);
  return (
    <Link
      to={link}
      id={`itemBox${id}`}
      className="itemBox"
      onClick={() => {
        document.querySelector(".headerTitle").textContent = projectTitle;
      }}
    >
      <div className="itemImg"></div>
      <p className="title">{title}</p>
      <div id={`des${id}`} className="description">
        <p>{des}</p>
      </div>
      <span
        onMouseEnter={() => {
          document.getElementById(`des${id}`).style.display = "block";
        }}
        onMouseOut={() => {
          document.getElementById(`des${id}`).style.display = "";
        }}
        className="descBtn"
      >
        <p>•••</p>
      </span>
    </Link>
  );
}
