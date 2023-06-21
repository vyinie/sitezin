import { useRef, useState } from "react";
import { Box, Button, TextField, Modal } from "@mui/material";

export default function ToDoItem({ id, text, list, listIndex, setList }) {
  const [editedText, setEditedText] = useState(null);
  const [openEditBox, setOpen] = useState(false);
  const handleToggle = () => setOpen(!openEditBox);

  function keepDoneItem(e) {
    const checked = list[listIndex].items.find((i) => i.id == e.target.id.slice(3));
    checked.done = !checked.done;
    console.log(checked);
    localStorage.setItem("listTodo", JSON.stringify(list));
  }

  function delItem(e) {
    const newItems = list[listIndex].items.filter((i) => i.id != e.target.id.slice(6));
    list[listIndex].items = newItems
    localStorage.setItem("listTodo", JSON.stringify(list));
    setList(old => (JSON.parse(localStorage.getItem("listTodo"))));
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
      <label className="textLabel" ref={itemLabel} htmlFor={`box${id}`}>
        {text}
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
          className="editPopupWrapper modalPopUpWrapper"
        >
          <Box id={`editPopup${id}`} className="editPopup modalPopUp">
            <TextField
              fullWidth
              variant="outlined"
              label="Edit To Do"
              className="inpEdit"
              id={`txtIdChecker${id}`}
              defaultValue={text}
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
