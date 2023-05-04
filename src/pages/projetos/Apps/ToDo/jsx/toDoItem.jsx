import { useState } from "react";
import "../css/Item.css";

export default function ToDoItem({ id, text, arr, setList }) {
  const [editedText, setEditedText] = useState(null);
  const saveId = id;

  return (
    <div key={saveId} id={saveId} className="item">
      <input type="checkbox" id={`box${saveId}`} className="box" />
      <label id={`label${saveId}`} htmlFor={`box${saveId}`}>
        {text}
      </label>
      <span
        onClick={(e) => {
          const newArr = arr.filter((i) => i.id != e.target.id);
          setList(newArr);
        }}
        className="imgConteinner"
      >
        <img
          id={saveId}
          className="imgDel"
          src="https://cdn-icons-png.flaticon.com/512/126/126468.png"
          alt="trash"
        />
      </span>
      <span
        onClick={() => {
          setTimeout(() => {
<<<<<<< HEAD
            document.getElementById(`boxModel${id}`).style.display = "flex";
=======
            document.getElementById(`editPopup${id}`).style.display = "flex";
>>>>>>> 60404eb (site la)
            document.getElementById(`inpEdit${id}`).focus();
          }, 100);
        }}
        className="imgConteinner imgEdit"
        id={saveId}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1904/1904300.png"
          alt="edit"
        />
      </span>
      <div>
<<<<<<< HEAD
        <div>
          <div
            id={`boxModel${id}`}
            className="boxModel"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                document.querySelector(`#label${saveId}`).textContent =
                  editedText;
                document.getElementById(`boxModel${id}`).style.display = "flex";
              }
            }}
          >
=======
        <div className="editPopupWrapper">
          <div id={`editPopup${id}`} className="editPopup">
>>>>>>> 60404eb (site la)
            <input
              type="text"
              className="inpEdit"
              id={`inpEdit${id}`}
              placeholder="Edit Text"
              onChange={(e) => {
                setEditedText(e.target.value);
              }}
<<<<<<< HEAD
=======
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  document.querySelector(`#label${saveId}`).textContent =
                    editedText;
                  document.getElementById(`editPopup${id}`).style.display =
                    "flex";
                }
              }}
>>>>>>> 60404eb (site la)
            />
            <button
              className="btnEdit"
              onClick={() => {
                document.querySelector(`#label${saveId}`).textContent =
                  editedText;
                setEditedText(null);
                document.getElementById(`inpEdit${id}`).value = null;
<<<<<<< HEAD
                document.getElementById(`boxModel${id}`).style.display = "";
=======
                document.getElementById(`editPopup${id}`).style.display = "";
>>>>>>> 60404eb (site la)
              }}
            >
              editar
            </button>
            <button
              className="btnCancelEdit"
              onClick={() => {
<<<<<<< HEAD
                document.getElementById(`boxModel${id}`).style.display = "";
=======
                document.getElementById(`editPopup${id}`).style.display = "";
>>>>>>> 60404eb (site la)
                document.getElementById(`inpEdit${id}`).value = null;
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
