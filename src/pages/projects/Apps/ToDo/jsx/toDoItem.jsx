import { useRef, useState } from "react";
import { Box, Button, TextField, Modal } from "@mui/material";

export default function ToDoItem({ id, text, arr, setList }) {
  const [editedText, setEditedText] = useState(null);
  const [openEditBox, setOpen] = useState(false);
  const handleToggle = () => setOpen(!openEditBox);

  function keepDoneItem(e) {
    const newList = JSON.parse(localStorage.getItem("listTodo"));
    const checked = newList.find((i) => i.id == e.target.id.slice(3));
    checked.done = !checked.done;
    localStorage.setItem("listTodo", JSON.stringify(newList));
    setList(JSON.parse(localStorage.getItem("listTodo")));
  }

  function delItem(e) {
    const newArr = arr.filter((i) => i.id != e.target.id.slice(6));
    localStorage.setItem("listTodo", JSON.stringify(newArr));
    setList(JSON.parse(localStorage.getItem("listTodo")));
  }

  // ================ abre o pop-up pra editar ================
  const inpTxtEdit = useRef();
  const itemLabel = useRef();

  function openEditItemPopup() {
    handleToggle();
    setTimeout(() => {
      document.getElementById(`txtIdChecker${id}`).focus();
    }, 50);
  }
  // console.log(inpTxtEdit.current);

  // ================ pop-up pra editar ================

  function editItem(e) {
    const newList = JSON.parse(localStorage.getItem("listTodo"));

    newList.find((i) => i.id == e.target.id.slice(12)).text = editedText;

    localStorage.setItem("listTodo", JSON.stringify(newList));
    setList(JSON.parse(localStorage.getItem("listTodo")));
    itemLabel.current.textContent = editedText;

    setEditedText(null);
    inpTxtEdit.current.value = null;
    handleToggle();
  }
  return (
    <div key={id} id={id} className="item">
      <input
        type="checkbox"
        id={`box${id}`}
        className="toDoCheck"
        onClick={keepDoneItem}
      />
      <label ref={itemLabel} htmlFor={`box${id}`}>
        <p className="textLabel">{text}</p>
      </label>

      {/* ================ deleta unico item ================*/}
      <span onClick={delItem} className="imgConteinner imgDel">
        <img
          id={`delBtn${id}`}
          src="https://cdn-icons-png.flaticon.com/512/126/126468.png"
          alt="trash"
        />
      </span>

      {/* ================ abre o pop-up pra editar ================*/}
      <span onClick={openEditItemPopup} className="imgConteinner imgEdit">
        <img
          id={`editBtn${id}`}
          src="https://cdn-icons-png.flaticon.com/512/1904/1904300.png"
          alt="edit"
        />
      </span>

      {/* ================ pop-up pra editar ================*/}
      <div>
        <Modal
          open={openEditBox}
          onClose={handleToggle}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="editPopupWrapper"
        >
          <Box id={`editPopup${id}`} className="editPopup">
            <TextField
              fullWidth
              variant="outlined"
              label="Edit To Do"
              className="inpEdit"
              id={`txtIdChecker${id}`}
              onChange={(e) => setEditedText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && editItem(e)}
              ref={inpTxtEdit}
            />
            <Button
              variant="outlined"
              color="error"
              className="btnCancelEdit"
              onClick={() => {
                handleToggle();
                inpTxtEdit.current.value = null;
              }}
            >
              Cancelar
            </Button>
            <Button
              variant="outlined"
              className="confirmEdit"
              id={`btnIdChecker${id}`}
              onClick={editItem}
            >
              editar
            </Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
