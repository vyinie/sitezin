import { useEffect, useState } from "react";
import "../Projects.css";
import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";

export default function Item({ title, des, id, link, img }) {
  const [projectTitle, setProjectTitle] = useState("");
  const titulo = document.querySelector(".headerTitle");
  useEffect(() => {
    setProjectTitle(title);
  }, []);
  return (
    <div className="itemBox">
      <Link
        to={link}
        id={`itemBox${id}`}
        onClick={() => {
          titulo.textContent = projectTitle;
        }}
        className="boxLink"
      >
        <div className="itemImg">h</div>
      </Link>

      <div id={`des${id}`} className="description">
        <p>{des}</p>
      </div>
      <span
        onClick={() => {
          const toggleDes = document.getElementById(`des${id}`);
          toggleDes.style.display === "flex"
            ? (toggleDes.style.display = "none")
            : (toggleDes.style.display = "flex");
        }}
        className="descBtn"
      >
        i
      </span>
      <p className="title">{title}</p>
    </div>
  );
}
