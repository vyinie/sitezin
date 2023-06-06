import "../css/Layout.css";
import { Button, TextField } from "@mui/material";
import ToDoItem from "./toDoItem";
import { useEffect, useState } from "react";
import BackIcon from "../../../components/BackIcon";
import ProjectHeader from "../../../components/ProjectHeader";

export default function LayoutToDo() {
  const [text, setText] = useState(null);

  // pega e salva os itens no localStorage
  const [id, setId] = useState(localStorage.getItem("idItemTodo"));

  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("listTodo"))
  );

  const addItem = (e) => {
    if (text !== null) {
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
    }
  };

  function delEverything() {
    localStorage.setItem("listTodo", "[]");
            setList(JSON.parse(localStorage.getItem("listTodo")));
            localStorage.setItem("idItemTodo", 0);
            setId(localStorage.getItem("idItemTodo"));
  }
  useEffect(() => {
    list.map(
      (i) =>
        i.done === true &&
        (document.getElementById(`box${i.id}`).checked = true)
    );
  }, [list]);
  return (
    <div className="toDoWrapper">
      <ProjectHeader title="To Do List"/>  
          
      <div className="toDoContainer">
        <div className="form">
          <TextField
            fullWidth
            id="addTodo"
            onKeyDown={(e) => e.key === "Enter" && addItem()}
            onChange={(e) => {
              setText(e.target.value);
            }}
            label="Add To Do"
            variant="filled"
          />
          <Button className="addBtn" onClick={addItem} variant="contained">
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
        
        {/* ================ apaga tudo ================ */}
        <Button
          variant="contained"
          color="error"
          className="delBtn"
          onClick={delEverything}
        >
          Apagar tudo
        </Button>
      </div>
    </div>
  );
}
