import { Button, TextField } from "@mui/material";
import "../css/Layout.css";
import ToDoItem from "./toDoItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LayoutToDo() {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);
  const [list, setList] = useState([]);
  const add = () => {
    setList([...list, { text: text, id: id }]);
    setId(id + 1);
    setText(null);
    document.getElementById("inp").focus();
    document.getElementById("inp").value = null;
  };
  const navigate = useNavigate();
  return (
    <div className="container">
      <button
        className="backBtn"
        onClick={() => {
          navigate(-1);
        }}
      >
        &#8592;
      </button>
      <h1 className="headerTitle">To Do List</h1>
      <div className="form">
        <TextField
          fullWidth
          id="inp"
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
