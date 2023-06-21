import "../css/Layout.css";
import { Button, Modal, TextField } from "@mui/material";
import ToDoItem from "./components/toDoItem";
import SideBar from "./components/sideBar";
import { useEffect, useState } from "react";
import ProjectHeader from "../../../components/ProjectHeader";

export default function LayoutToDo() {
  const [text, setText] = useState(null);

  // pega e salva os itens no localStorage
  const [id, setId] = useState(localStorage.getItem("idItemTodo"));

  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("listTodo"))
  );
  const [listIndex, setListIndex] = useState(list[0].id);
  // ======================== adiciona um item ========================
  const addItem = (e) => {
    const newItem = { text: text, id: id, done: false };

    if (text !== null) {
      list[listIndex].items.push(newItem);
      localStorage.setItem("listTodo", JSON.stringify(list));
      // setList((old) => JSON.parse(localStorage.getItem("listTodo")));

      localStorage.setItem("idItemTodo", Number(id) + 1);
      setId((id) => Number(id) + 1);

      setText(null);

      document.getElementById("addTodo").value = null;
      document.getElementById("addTodo").focus();
    }
  };

  // ========================== zera a lista ==========================
  function delEverything() {
    list[listIndex].items = [];
    localStorage.setItem("listTodo", JSON.stringify(list));
    setList((old) => JSON.parse(localStorage.getItem("listTodo")));

    localStorage.setItem("idItemTodo", 0);
    setId(0);
  }

  // =================== modal pra salvar a lsita ===================
  const [modalSave, setModalSave] = useState(false);
  const handleModalSave = () => {
    setModalSave((old) => !old);
    !modalSave &&
      setTimeout(() => {
        document.getElementById("saveNewList").focus();
      }, 50);
  };

  const [listName, setlistName] = useState("");
  const saveInNew = () => {
    const listEx = list;
    const newList = {
      name: listName,
      id: list.length,
      recurrence: 0,
      items: listEx[listIndex].items,
    };
    listEx.push(newList);
    setList((old) => listEx);
    localStorage.setItem("listTodo", JSON.stringify(listEx));
    handleModalSave();
  };
  useEffect(() => {
    list[listIndex].items.map(
      (i) =>
        i.done === true &&
        (document.getElementById(`box${i.id}`).checked = true)
    );
  }, [listIndex]);

  // =====================================================================
  return (
    <div className="toDoList">
      {/*================= titulo ================= */}
      <ProjectHeader title="To Do List" />

      {/*================= listas recorrentes ================= */}
      <SideBar
        setListIndex={setListIndex}
        list={list}
        setList={setList}
      />

      {/*================= listas ================= */}
      <div className="toDoContainerWrapper">
        <div className="toDoContainer">
          {/*================= add item ================= */}
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
            <Button
              className="addBtn"
              onClick={addItem}
              variant="contained"
            >
              Add
            </Button>
          </div>
          <div className="listItem">
            {list[listIndex].items.map((i) => (
              <div key={i.id}>
                <ToDoItem
                  id={i.id}
                  text={i.text}
                  list={list}
                  setList={setList}
                  listIndex={listIndex}
                />
              </div>
            ))}
          </div>
          <div className="listBtns">
            {/* ================ salva a lista ================ */}
            <Button
              variant="contained"
              color="success"
              className="saveListBtn"
              onClick={handleModalSave}
            >
              salvar
            </Button>
            {/* ================ apaga tudo ================ */}
            <Button
              variant="contained"
              color="error"
              className="delBtn"
              onClick={delEverything}
            >
              Apagar tudo
            </Button>

            <Modal
              open={modalSave}
              onClose={handleModalSave}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className="modalPopUpWrapper"
            >
              <div id="savePopup" className="modalPopUp">
                <TextField
                  fullWidth
                  id="saveNewList"
                  onKeyDown={(e) => e.key === "Enter" && saveInNew()}
                  onChange={(e) => {
                    setlistName(e.target.value);
                  }}
                  label="Nome da Lista"
                  variant="outlined"
                />

                <Button
                  color="error"
                  className="popupSaveBtn"
                  variant="contained"
                  onClick={handleModalSave}
                >
                  cancelar
                </Button>

                <Button
                  className="popupSaveBtn"
                  variant="contained"
                  onClick={saveInNew}
                >
                  salvar
                </Button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
