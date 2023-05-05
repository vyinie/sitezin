import { useState } from "react";
import "../css/Item.css";
import { Box, Button, TextField, Modal } from "@mui/material";

export default function ToDoItem({ id, text, arr, setList }) {
  const [editedText, setEditedText] = useState(null);
  const saveId = id;
  const [openEditBox, setOpen] = useState(false);
  const handleToggle = () => setOpen(!openEditBox);

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
          handleToggle();
          setTimeout(() => {
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
              "& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root": {color: "#fff"},
              "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {borderColor: "#fff", },
              "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":{color:"#fff"},
              "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root":{color:"#fff"}
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
                  document.querySelector(`#label${saveId}`).textContent =
                    editedText;
                  handleToggle()
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
              className="btnEdit"
              onClick={() => {
                document.querySelector(`#label${saveId}`).textContent =
                  editedText;
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
