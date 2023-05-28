import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import NavBar from "./Home/jsx/NavBar";

function App() {
  // prepara o localStorage pra projetos que o usam
  useEffect(() => {
    // itens do to do list
    localStorage.getItem("idItemTodo") == null &&
      localStorage.setItem("idItemTodo", 0);

    localStorage.getItem("listTodo") == null &&
      localStorage.setItem("listTodo", "[]");

    // itens do kanban
    localStorage.getItem("kbItens") === null &&
      localStorage.setItem("kbItens", "[[], [], []]");

    localStorage.getItem("kbItensId") === null &&
      localStorage.setItem("kbItensId", Number(0));
  }, []);

  return (
    <div className="App">
      <header>
        <h1 className="headerTitle">Vyinie</h1>
        <NavBar />
      </header>

      <div className="PagesCotainer">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
