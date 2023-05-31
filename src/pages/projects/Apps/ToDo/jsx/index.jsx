import "../css/Layout.css";
import { Button, TextField } from "@mui/material";
import ToDoItem from "./toDoItem";
import { useEffect, useState } from "react";
import BackIcon from "../../../components/BackIcon";

export default function LayoutToDo() {
  const [text, setText] = useState(null);

  // pega e salva os itens no localStorage
  const [id, setId] = useState(localStorage.getItem("idItemTodo"));

  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("listTodo"))
  );

  const addItem = () => {
    localStorage.setItem(
      "listTodo",
      JSON.stringify([...list, { text: text, id: id, done: false }])
    );
    setList(JSON.parse(localStorage.getItem("listTodo")));

    localStorage.setItem("idItemTodo", Number(id) + 1);
    setId(localStorage.getItem("idItemTodo"));

    setText(null);
    document.getElementById("addTodo").focus();
    document.getElementById("addTodo").value = null;
  };
  useEffect(() => {
    list.map(
      (i) =>
        i.done === true &&
        (document.getElementById(`box${i.id}`).checked = true)
    );
  }, [list]);
  return (
    <div className="toDoContainer">
      <BackIcon />
      <div className="form">
        <TextField
          fullWidth
          id="addTodo"
          sx={{
            fontSize:"49pt" ,
            "& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root": {
              transform: "translate(10px, -8px) scale(0.8)",
            },
          }}
          onKeyDown={(e) => {
            if ((e.key === "Enter") & (text !== null)) {
              addItem();
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
              addItem();
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
          localStorage.setItem("listTodo", "[]");
          setList(JSON.parse(localStorage.getItem("listTodo")));
          localStorage.setItem("idItemTodo", 0);
          setId(localStorage.getItem("idItemTodo"));
        }}
      >
        Apagar tudo
      </Button>
    </div>
  );
}
