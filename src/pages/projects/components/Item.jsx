import { useEffect, useState } from "react";
import "../Projects.css";
import { Link } from "react-router-dom";

export default function Item({ title, des, id, link, img }) {
  const [toggleDescItem, setToggleDescItem] = useState(false);

  useEffect(() => {
    const toggleDes = document.getElementById(`des${id}`);
    toggleDescItem
      ? (toggleDes.style.display = "flex")
      : (toggleDes.style.display = "");

  }, [toggleDescItem]);

  return (
    <div className="itemBox">
      <Link
        to={link}
        id={`itemBox${id}`}
        className="boxLink"
      >
        <img className="itemImg" src={img} alt="coisa" />
      </Link>

      <div id={`des${id}`} className="description">
        <p>{des}</p>
      </div>
      <span
        onMouseOut={() => {
          setTimeout(() => {
            setToggleDescItem(false);
          }, 50);
        }}
        onClick={() => {
          setToggleDescItem(!toggleDescItem);
        }}
        className="descBtn"
      >
        i
      </span>
      <p className="title">{title}</p>
    </div>
  );
}
