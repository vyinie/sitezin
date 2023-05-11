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
    kbAreas.map(
      (i) => i.isIn === true && document.getElementById(i.id).click()
    );
  }, []);

  const [kbAreas, setKbAreas] = useState([
    { id: "kbToDo", isIn: true },
    { id: "kbDoing", isIn: false },
    { id: "kbDone", isIn: false },
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
        i.id == e.target.id
          ? ((i.isIn = true),
            setAreaSelected(kbAreas.indexOf(i), console.log(areaSelected)))
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
  const [ToDo, setToDo] = useState([{ cont: "pra fazer", id: 10 }]);
  const [Doing, setDoing] = useState([{ cont: "fazendo", id: 10 }]);
  const [Done, setDone] = useState([{ cont: "fazido", id: 10 }]);
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
      <div className="kbBtnArea">
        {/* btn q muda pra sessao à esquerda */}
        <span className="kbBtnContainer" id="kbLeftBtnContainer">
          <Button
            onClick={() => {
              areaSelected > 0
                ? setAreaSelected(areaSelected - 1)
                : setAreaSelected(2);

              document.getElementById(
                kbAreas[areaSelected].id
              ).style.borderBottom = "solid #d1a509 5px";
              console.log(areaSelected);

              // desmarca as areas n selecionadas
              kbAreas
                .filter((i) => i.id != kbAreas[areaSelected].id)
                .map((i) => {
                  document.getElementById(i.id).style.borderBottom = "";
                });
            }}
          >
            <ArrowBackIcon className="kbBtn" id="KbRightBtn" />
          </Button>
        </span>

        {/* btn q abre o pop-up pra add item */}
        <span className="kbBtnContainer" id="kbAddBtnContainer">
          <Button onClick={handleToggle}>
            <AddIcon className="kbBtn" id="kbAddBtn" />
          </Button>
        </span>

        {/* btn q muda pra sessao à direita */}
        <span className="kbBtnContainer" id="kbRightBtnContainer">
          <Button
            onClick={() => {
              areaSelected < 2
                ? setAreaSelected(areaSelected + 1)
                : setAreaSelected(0);

              // desmarca as areas n selecionadas
              kbAreas.map((i) => {
                i.id == kbAreas[areaSelected].id
                  ? (i.isIn = true)
                  : (i.isIn = false);
              });
              kbAreas.map((i) => {
                i.isIn
                  ? (document.getElementById(i.id).style.borderBottom =
                      "solid #d1a509 5px")
                  : (document.getElementById(i.id).style.borderBottom = "");
              });

              console.log(kbAreas);
            }}
          >
            <ArrowForwardIcon className="kbBtn" id="kbLeftBtn" />
          </Button>
        </span>
      </div>

      {/* pop-up que add itens */}
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
