import "../css/index.css";
import BackIcon from "../../../components/BackIcon";
import { useEffect, useState } from "react";
import { Box, Button, Modal, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";

import KbItem from "./conponents/KbItem";

function Kanban() {
  // =============pro mobile=============
  // mostra onde voce ta
  useEffect(() => {
    kbAreas.map((i) => i.isIn && document.getElementById(i.id).click());
  }, []);

  const [kbAreas, setKbAreas] = useState([
    { cont: "À Fazer", id: "kbToDo", isIn: true },
    { cont: "Fazendo", id: "kbDoing", isIn: false },
    { cont: "Feito", id: "kbDone", isIn: false },
  ]);

  const setKbArea = (e) => {
    e.target.className != "kbNav" &&
      ((e.target.style.borderBottom = "solid #d1a509 5px"),
      // desmarca as areas n selecionadas
      kbAreas
        .filter((i) => i.id != e.target.id)
        .map((i) => {
          document.getElementById(i.id).style.borderBottom = "";
        }),
      // muda o status de sected da sessão
      kbAreas.map((i) => {
        i.id == e.target.id ? (i.isIn = true) : (i.isIn = false);
        setIndexAeraSelected(kbAreas.indexOf(kbAreas.filter((i) => i.isIn)[0]));
      }));
  };

  // popup pra add itens
  const [addKbItemModal, setAddKbItemModal] = useState(false);
  const handleAddToggle = () => {
    setAddKbItemModal(!addKbItemModal);
    setTimeout(() => {
      !addKbItemModal && document.getElementById("inpAddKb").focus();
    }, 100);
  };

  // add item às listas;
  const [AllLists, setAllLists] = useState(
    JSON.parse(localStorage.getItem("kbItens"))
  );

  const [indexAeraSelected, setIndexAeraSelected] = useState(
    kbAreas.indexOf(kbAreas.filter((i) => i.isIn)[0])
  );

  const [kbItemText, setkbItemText] = useState(null);
  const [kbItemId, setkbItemId] = useState(
    parseInt(localStorage.getItem("kbItensId"))
  );

  const addKb = () => {
    kbItemText &&
      (AllLists[indexAeraSelected].push({ cont: kbItemText, id: kbItemId }),
      setkbItemText(null),
      setkbItemId(Number(kbItemId) + 1),
      localStorage.setItem("kbItens", JSON.stringify(AllLists)),
      localStorage.setItem("kbItensId", kbItemId),
      handleAddToggle());
  };

  // esconde o display dos btns
  const [toggleBtn, setToggleBtn] = useState(true);
  useEffect(() => {
    toggleBtn
      ? (document.querySelector(".kbBtnArea").style.display = "")
      : (document.querySelector(".kbBtnArea").style.display = "none");
  }, [toggleBtn]);

  // ================move area================
  const [ItemSelectedId, SetItemSelectedId] = useState(null);

  const [MoveModalOpen, MoveSetModalOpen] = useState(false);
  function hendlerModal() {
    MoveSetModalOpen(!MoveModalOpen);
  }
  function moveItem(p) {
    const objToMove = AllLists[indexAeraSelected].filter(
      (i) => i.id === ItemSelectedId
    )[0];
    del(ItemSelectedId);
    AllLists[kbAreas.indexOf(p)].push(objToMove);
    localStorage.setItem("kbItens", JSON.stringify(AllLists));
    setAllLists(JSON.parse(localStorage.getItem("kbItens")));
  }

  // ================more options area================
  function del(p) {
    const newList = AllLists[indexAeraSelected].filter((i) => i.id != p);
    AllLists[indexAeraSelected] = newList;
    localStorage.setItem("kbItens", JSON.stringify(AllLists));
    setAllLists(JSON.parse(localStorage.getItem("kbItens")));
  }

  const [EditToggle, setOpenEditToggle] = useState(false);
  const [textEdited, setTextEdited] = useState(null);
  function changeEditToggle() {
    setOpenEditToggle(!EditToggle);
  }

  function Edit(p) {
    AllLists[indexAeraSelected].some((i) => i.id == p && (i.cont = textEdited));
    localStorage.setItem("kbItens", JSON.stringify(AllLists));
    changeEditToggle();
  }

  return (
    <div className="Kanban">
      <BackIcon />
      {/* header */}
      <div className="kbNav" onClick={setKbArea}>
        <span className="kbNavBtn" id="kbToDo">
          À Fazer
        </span>
        <span className="kbNavBtn" id="kbDoing">
          Fazendo
        </span>
        <span className="kbNavBtn" id="kbDone">
          Feito
        </span>
      </div>
      {/* main */}
      <div className="KbContainer">
        {AllLists[indexAeraSelected].map((i) => (
          <KbItem
            id={i.id}
            texto={i.cont}
            key={i.id}
            hendlerModal={hendlerModal}
            SetItemSelectedId={SetItemSelectedId}
            del={del}
            changeEditToggle={changeEditToggle}
          />
        ))}
      </div>

      {/* add item area */}
      <div className="kbBtnArea">
        {/* btn q muda pra sessao à esquerda */}
        <span className="kbBtnContainer" id="kbLeftBtnContainer">
          <Button
            onClick={() => {
              indexAeraSelected === 0
                ? document.getElementById(kbAreas[2].id).click()
                : document
                    .getElementById(kbAreas[indexAeraSelected - 1].id)
                    .click();
            }}
          >
            <ArrowBackIcon className="kbBtn" id="KbRightBtn" />
          </Button>
        </span>

        {/* btn q abre o pop-up pra add item */}
        <span className="kbBtnContainer" id="kbAddBtnContainer">
          <Button onClick={handleAddToggle}>
            <AddIcon className="kbBtn" id="kbAddBtn" />
          </Button>
        </span>

        {/* btn q muda pra sessao à direita */}
        <span className="kbBtnContainer" id="kbRightBtnContainer">
          <Button
            onClick={() => {
              indexAeraSelected === 2
                ? document.getElementById(kbAreas[0].id).click()
                : document
                    .getElementById(kbAreas[indexAeraSelected + 1].id)
                    .click();
            }}
          >
            <ArrowForwardIcon className="kbBtn" id="kbLeftBtn" />
          </Button>
        </span>
      </div>

      {/* pop-up que add itens */}
      <Modal
        open={addKbItemModal}
        onClose={handleAddToggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box id="kbAddItemBox" className="kbBox">
          <TextField
            id="inpAddKb"
            fullWidth
            variant="outlined"
            label="add kb"
            onChange={(e) => {
              setkbItemText(e.target.value);
            }}
            onKeyDown={(e) => {
              e.key === "Enter" && addKb();
            }}
          />
          <Button
            onClick={handleAddToggle}
            className="cancelAddKb"
            color="error"
            variant="contained"
          >
            Cancel
          </Button>
          <Button onClick={addKb} className="confirmAddKb" variant="contained">
            Add
          </Button>
        </Box>
      </Modal>

      {/* move area */}
      <Modal
        open={MoveModalOpen}
        onClose={hendlerModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="kbBox"
          id="kbMoveBox"
          onClick={(e) => {
            e.target.id != "kbMoveBox" && hendlerModal();
          }}
        >
          {kbAreas
            .filter((i) => i.id != kbAreas[indexAeraSelected].id)
            .map((i) => (
              <Button
                key={`${i.id}Btn`}
                variant="contained"
                className="moveBtn"
                id={`${i.id}Btn`}
                onClick={() => moveItem(i)}
              >
                {i.cont}
              </Button>
            ))}
        </Box>
      </Modal>

      {/* edit modal */}
      <Modal
        open={EditToggle}
        onClose={changeEditToggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box id="kbAddItemBox" className="kbBox">
          <TextField
            id="inpAddKb"
            fullWidth
            variant="outlined"
            label="Edit Item"
            onChange={(e) => {
              setTextEdited(e.target.value);
            }}
            onKeyDown={(e) => {
              e.key === "Enter" && Edit(ItemSelectedId);
            }}
          />
          <Button
            onClick={changeEditToggle}
            className="cancelAddKb"
            color="error"
            variant="contained"
          >
            Cancel
          </Button>
          <Button
            onClick={() => Edit(ItemSelectedId)}
            className="confirmAddKb"
            variant="contained"
          >
            Edit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Kanban;
