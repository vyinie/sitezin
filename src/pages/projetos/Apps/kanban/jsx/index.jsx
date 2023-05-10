import "../css/index.css";
import BackIcon from "../../../components/BackIcon";
import { useEffect, useRef, useState } from "react";
import { Box, Button, Modal, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import KbItem from "./conponents/KbItem";

function Kanban() {
  // =============pro mobile=============
  // mostra onde voce ta
  useEffect(() => {
    kbAreas.map(
      (i) => i.isIn === true && document.getElementById(i.id).click()
    );
  }, []);

  const kbAreas = [
    { id: "kbToDo", isIn: true },
    { id: "kbDoing", isIn: false },
    { id: "kbDone", isIn: false },
  ];

  const setKbArea = (e) => {
    e.target.className != "kbNav" &&
      ((e.target.style.borderBottom = "solid #970 5px"),
      // desmarca as areas n selecionadas
      kbAreas
        .filter((i) => i.id != e.target.id)
        .map((i) => {
          document.getElementById(i.id).style.borderBottom = "";
        }),
      // muda o status de sected da sessão
      kbAreas.map((i) => {
        i.id == e.target.id
          ? ((i.isIn = true), setAreaSelected(kbAreas.indexOf(i)))
          : (i.isIn = false);
      }));
  };

  // popup pra add itens
  const [addKbItemModal, setAddKbItemModal] = useState(false);
  const handleToggle = () => {
    setAddKbItemModal(!addKbItemModal);
    setTimeout(() => {
      !addKbItemModal && document.getElementById("inpAddKb").focus();
    }, 100);
  };

  // add item às listas
  const [ToDo, setToDo] = useState([]);
  const [Doing, setDoing] = useState([]);
  const [Done, setDone] = useState([]);
  const [AllLists, setAllLists] = useState([ToDo, Doing, Done]);

  const [areaSelected, setAreaSelected] = useState(0);
  const [kbItemText, setkbItemText] = useState(null);
  const [kbItemId, setkbItemId] = useState(0);

  const addKb = () => {
    kbItemText &&
      (AllLists[areaSelected].push({ cont: kbItemText, id: kbItemId }),
      setkbItemText(null),
      setkbItemId(kbItemId + 1),
      handleToggle());
  };

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
        {AllLists[areaSelected].map((i) => (
          <KbItem id={i.id} texto={i.cont} key={i.id} />
        ))}
      </div>

      {/* add item area */}
      <div className="addKbArea">
        <Button id="addKbBtn" onClick={handleToggle}>
          <AddIcon />
        </Button>
      </div>

      <Modal
        open={addKbItemModal}
        onClose={handleToggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="kbBox">
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
            onClick={handleToggle}
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
    </div>
  );
}

export default Kanban;
