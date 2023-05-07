import "../css/Layout.css";
import { Button, TextField } from "@mui/material";
import ToDoItem from "./toDoItem";
import { useState } from "react";
import BackIcon from "../../../components/BackIcon";

export default function LayoutToDo() {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);
  const [list, setList] = useState([]);
  const add = () => {
    setList([...list, { text: text, id: id }]);
    setId(id + 1);
    setText(null);
    document.getElementById("addTodo").focus();
    document.getElementById("addTodo").value = null;
  };
  return (
    <div className="container">
      <BackIcon />
      <div className="form">
        <TextField
          fullWidth
          id="addTodo"
          sx={{
            "& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root": {
              transform: "translate(20px, -8px) scale(0.7)",
            }, //styles the label
          }}
          onKeyDown={(e) => {
            if ((e.key === "Enter") & (text !== null)) {
              add();
            }
          }}
          onChange={(e) => {
            setText(e.target.value);
          }}
          label="Add To Do"
          variant="outlined"
        />
        <Button
          className="addBtn"
          onClick={() => {
            if (text !== null) {
              add();
            }
          }}
          variant="outlined"
        >
          Add
        </Button>
      </div>
      <div className="listItem">
        {list.map((i) => (
          <div key={i.id}>
            <ToDoItem id={i.id} text={i.text} arr={list} setList={setList} />
          </div>
        ))}
      </div>
      <Button
        variant="contained"
        color="error"
        className="delBtn"
        onClick={() => {
          setList([]);
          setId(0);
        }}
      >
        Apagar tudo
      </Button>
    </div>
  );
}
