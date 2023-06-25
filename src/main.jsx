import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

// main
import Home from "./pages/Home/jsx/Home.jsx";
import Error from "./pages/Error.jsx";
import App from "./pages/App";
import Clear from "./functions/ClearCache.jsx";

// landing pages
import CursoMeditacao from "./pages/projects/landingPages/cursoDeMeditacao";

// jogos
import LayoutGame from "./pages/projects/games/coloRGB/jsx/index.jsx";

// Apps
import LayoutToDo from "./pages/projects/Apps/ToDo/jsx";
import Kanban from "./pages/projects/Apps/kanban/jsx";
import Register from "./pages/projects/Apps/register/jsx";
import MHSBarberShop from "./pages/projects/landingPages/MHSBarberShop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/coloRGB", element: <LayoutGame /> },
      { path: "/to-do-list", element: <LayoutToDo /> },
      { path: "/kanban", element: <Kanban /> },
      { path: "/sistema-de-cadastro", element: <Register /> },
      { path: "/clear-cache", element: <Clear/> },
      { path: "/acAlma", element: <CursoMeditacao/> },
      { path: "/MHS-barber-shop", element: <MHSBarberShop/> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
