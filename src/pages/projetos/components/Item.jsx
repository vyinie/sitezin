import { useEffect, useState } from "react";
import "../Projects.css";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
import InfoIcon from "@mui/icons-material/Info";
>>>>>>> c3e4959 (sitizin ficnado bonito)

export default function Item({ title, des, id, link, img }) {
  const [projectTitle, setProjectTitle] = useState("");
  const titulo = document.querySelector(".headerTitle");
  useEffect(() => {
    setProjectTitle(title);
  }, []);
  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> c3e4959 (sitizin ficnado bonito)

      <div id={`des${id}`} className="description">
        <p>{des}</p>
      </div>
      <span
<<<<<<< HEAD
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
=======
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
>>>>>>> c3e4959 (sitizin ficnado bonito)
  );
}
