import { useEffect, useState } from "react";
import "../Projects.css";
import { Link } from "react-router-dom";

export default function Item({ title, des, id, link, img }) {
  const [projectTitle, setProjectTitle] = useState("");
  const titulo = document.querySelector(".headerTitle");
  useEffect(() => {
    setProjectTitle(title);
  }, []);
  return (
    <Link
      to={link}
      id={`itemBox${id}`}
      className="itemBox"
      onClick={() => {
        titulo.textContent = projectTitle;
      }}
    >
      <div className="itemImg">
        <img
          src={img}
          alt={title}
          style={{
            height: "100%",
            width: "100%"
          }}
        />
      </div>

      <h1 className="title">{title}</h1>

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
