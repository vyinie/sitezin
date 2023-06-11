import "../css/index.css";
import ProjectHeader from "../../../components/ProjectHeader";
// import { lists, cardId, /* itemId */ } from "./kbLists.js";
import KbCard from "./components/KbCard";

import { useEffect, useRef, useState } from "react";

/* ================ materialUI ================ */
import { Box, Button, Modal, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Kanban() {
  const [lists, setLists] = useState([
    {
      name: "To Do",
      id: "ToDo",
      items: [],
      color: "#90d4d9",
    },
    {
      name: "Doing",
      id: "Doing",
      items: [],
      color: "#FFD25F",
    },
    {
      name: "Done",
      id: "Done",
      items: [],
      color: "#60FFB3",
    },
  ]);

  const [cardId, setCardId] = useState(0);
  const [itemId, setItemId] = useState(0);
  // ================ adiciona um card ================
  function addCard() {
    const cardObj = {
      name: "teste",
      id: cardId,
      items: [],
      color: "#60aF83",
    };
    setCardId(cardId + 1);
    setLists([...lists, cardObj]);
  }

  // ================ deleta todos os cards adicionados ================

  function delAllCards() {
    const initialList = lists.filter((i) => typeof i.id != "number");
    setLists(initialList);
    setCardId(0);
  }

  // ================ deleta todos os itens de todos os cards ================
  function delAllItems() {
    lists.map((i) => (i.items.length = 0));
    setItemId(0);
  }

  return (
    <div className="kanban">
      {/* ====================== header ====================== */}
      <ProjectHeader title="Kanban" />

      {/* ================ area de todos os cards ================ */}
      <div className="kbBody">
        <div className="kbCardsArea">
          {lists.map((i) => (
            <KbCard
              key={"cardkey" + i.id}
              color={i.color}
              name={i.name}
              items={i.items}
              cardId={i.id}
              itemId={itemId}
              setItemId={setItemId}
              lists={lists}
              setLists={setLists}
            />
          ))}
        </div>

        {/* ====================== barra lateral ====================== */}
        <div className="aside">
          <span onClick={addCard} className="asideBtn" id="addKbCard">
            Adicionar Card
          </span>
          <span
            onClick={delAllItems}
            className="asideBtn"
            id="delAllKbItem"
          >
            Apagar Todos os items
          </span>
          <span
            onClick={delAllCards}
            className="asideBtn"
            id="delAllKbCard"
          >
            Apagar Todos os Cards
          </span>
        </div>
      </div>
    </div>
  );
}
