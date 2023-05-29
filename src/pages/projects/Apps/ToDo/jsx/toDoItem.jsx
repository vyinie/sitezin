import { useState } from "react";
import "../css/Item.css";
import { Box, Button, TextField, Modal } from "@mui/material";

export default function ToDoItem({ id, text, arr, setList }) {
  const [editedText, setEditedText] = useState(null);
  const [openEditBox, setOpen] = useState(false);
  const handleToggle = () => setOpen(!openEditBox);

  return (
    <div key={id} id={id} className="item">
      <input
        type="checkbox"
        id={`box${id}`}
        className="toDoCheck"
        onClick={(e) => {
          const newList = JSON.parse(localStorage.getItem("listTodo"));
          const checked = newList.find((i) => i.id == e.target.id.slice(3));
          checked.done = !checked.done;
          localStorage.setItem("listTodo", JSON.stringify(newList));
          setList(JSON.parse(localStorage.getItem("listTodo")));
        }}
      />
      <label id={`label${id}`} htmlFor={`box${id}`}>
        <p className="textLabel">{text}</p>
      </label>
      <span
        onClick={(e) => {
          const newArr = arr.filter((i) => i.id != e.target.id.slice(6));
          localStorage.setItem("listTodo", JSON.stringify(newArr));
          setList(JSON.parse(localStorage.getItem("listTodo")));
        }}
        className="imgConteinner imgDel"
      >
        <img
          id={`delBtn${id}`}
          src="https://cdn-icons-png.flaticon.com/512/126/126468.png"
          alt="trash"
        />
      </span>
      <span
        onClick={() => {
          handleToggle();
          setTimeout(() => {
            document.getElementById(`inpEdit${id}`).focus();
          }, 100);
        }}
        className="imgConteinner imgEdit"
      >
        <img
          id={`editBtn${id}`}
          src="https://cdn-icons-png.flaticon.com/512/1904/1904300.png"
          alt="edit"
        />
      </span>
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
              sx={{
                "& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root": {
                  color: "#fff",
                },
                "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                  borderColor: "#fff",
                },
                "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                  color: "#fff",
                },
                "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
                  color: "#fff",
                },
              }}
              fullWidth
              variant="outlined"
              label="Edit To Do  "
              className="inpEdit"
              id={`inpEdit${id}`}
              onChange={(e) => {
                setEditedText(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const newList = JSON.parse(localStorage.getItem("listTodo"));

                  newList.find((i) => i.id == e.target.id.slice(7)).text =
                    editedText;

                  localStorage.setItem("listTodo", JSON.stringify(newList));
                  setList(JSON.parse(localStorage.getItem("listTodo")));
                  document.querySelector(`#label${id}`).textContent =
                    editedText;

                  setEditedText(null);
                  document.getElementById(`inpEdit${id}`).value = null;
                  handleToggle();
                }
              }}
            />
            <Button
              variant="outlined"
              color="error"
              className="btnCancelEdit"
              onClick={() => {
                handleToggle();
                document.getElementById(`inpEdit${id}`).value = null;
              }}
            >
              Cancelar
            </Button>
            <Button
              variant="outlined"
              className="confirmEdit"
              id={`confirmEdit${id}`}
              onClick={(e) => {
                const newList = JSON.parse(localStorage.getItem("listTodo"));

                newList.find((i) => i.id == e.target.id.slice(11)).text =
                  editedText;

                localStorage.setItem("listTodo", JSON.stringify(newList));
                setList(JSON.parse(localStorage.getItem("listTodo")));
                document.querySelector(`#label${id}`).textContent = editedText;

                setEditedText(null);
                document.getElementById(`inpEdit${id}`).value = null;
                handleToggle();
              }}
            >
              editar
            </Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
