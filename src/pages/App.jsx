import { useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  // prepara o localStorage pra projetos que o usam
  useEffect(() => {
    // itens do to do list
    localStorage.getItem("idItemTodo") == null &&
      localStorage.setItem("idItemTodo", 0);

    localStorage.getItem("listTodo") == null &&
      localStorage.setItem(
        "listTodo",
        JSON.stringify([
          { name: "não salvo", id: 0, recurrence: 0, items: [] },
          { name: "compras", id: 1, recurrence: 2, items: [] },
          { name: "casa", id: 2, recurrence: 0, items: [] },
          { name: "trabalho", id: 3, recurrence: 1, items: [] },
          { name: "academia", id: 4, recurrence: 1, items: [] },
        ])
      );
  }, []);

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
