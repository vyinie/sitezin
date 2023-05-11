import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import LayoutGame from "./pages/projetos/Apps/coloRGB/jsx/index.jsx";
import Home from "./pages/Home/jsx/Home.jsx";
import Error from "./pages/Home/jsx/Error.jsx";
import App from "./pages/App";
import Projects from "./pages/projetos/Projects.jsx";
import LayoutToDo from "./pages/projetos/Apps/ToDo/jsx";
import NavBar from "./pages/Home/jsx/NavBar";
import Kanban from "./pages/projetos/Apps/kanban/jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/Projects",
        element: <Projects />,
        children: [
          { path: "/Projects/coloRGB", element: <LayoutGame /> },
          { path: "/Projects/to-do-list", element: <LayoutToDo /> },
          { path: "/Projects/kanban", element: <Kanban /> },
        ],
      },
      { path: "/Contato", element: <NavBar /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
