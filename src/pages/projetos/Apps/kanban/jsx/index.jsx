import "../css/index.css";
import BackIcon from "../../../components/BackIcon";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import KbItemContainer from "./conponents/KbItemContainer";

function Kanban() {
  // =============pro mobile=============
  useEffect(() => {
    kbAreas.map(
      (i) => i.isIn === true && document.getElementById(i.id).click()
    );
  }, []);

  // mostra onde voce ta
  const kbAreas = [
    { id: "kbToDo", isIn: true },
    { id: "kbDoing", isIn: false },
    { id: "kbDone", isIn: false },
  ];

  const setKbArea = (e) => {
    e.target.className != "kbNav" &&
      ((e.target.style.borderBottom = "solid #970 5px"),
      kbAreas
        .filter((i) => i.id != e.target.id)
        .map((i) => {
          document.getElementById(i.id).style.borderBottom = "";
        }),
      kbAreas.map((i) =>
        i.id == e.target.id ? (i.isIn = true) : (i.isIn = false)
      ));
  };

  const selectedArea = kbAreas.filter((i) => i.isIn === true);

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

      <div className="KbContainer">
        <Outlet />
      </div>

      <div className="addKbItemBtn">
        <KbItemContainer id={selectedArea[0].id} />
      </div>
    </div>
  );
}

export default Kanban;
