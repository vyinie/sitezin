import "../Projects.css";
import { Link } from "react-router-dom";

<<<<<<< HEAD
export default function Item({ title, des, id, link }){
  return (
    <Link to={link} id={`itemBox${id}`} className="itemBox">
=======
export default function Item({ title, des, id, link }) {
  return (
    <Link
      to={link}
      id={`itemBox${id}`}
      className="itemBox"
    >
>>>>>>> 60404eb (site la)
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
<<<<<<< HEAD
};
=======
}
>>>>>>> 60404eb (site la)
