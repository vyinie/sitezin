import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import LayoutGame from "./pages/projects/Apps/coloRGB/jsx/index.jsx";
import Home from "./pages/Home/jsx/Home.jsx";
import Error from "./pages/Error.jsx";
import App from "./pages/App";
import Projects from "./pages/projects/Projects.jsx";
import LayoutToDo from "./pages/projects/Apps/ToDo/jsx";
import Kanban from "./pages/projects/Apps/kanban/jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/Projects/coloRGB", element: <LayoutGame /> },
      { path: "/Projects/to-do-list", element: <LayoutToDo /> },
      { path: "/Projects/kanban", element: <Kanban /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
