import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [ToggleNavBar, setToggleNavBar] = useState(true);

  function openNavBar(e) {
    setToggleNavBar(!ToggleNavBar);
    const navArea = document.querySelector(".navArea");
    navArea.style.display = ToggleNavBar ? "flex" : "";
    document.body.style.overflow = ToggleNavBar ? "hidden" : "";
    if (e.target.className != "navArea") {
      document.querySelector("#lOne").classList.toggle("on", ToggleNavBar);
      document.querySelector("#lTwo").classList.toggle("on", ToggleNavBar);
      document.querySelector("#lThree").classList.toggle("on", ToggleNavBar);
    }
  }

  const pageLinks = [
    {
      name: "Home",
      id: "HomeLink",
      class: "pageLink",
      link: "/",
    },
    {
      name: "Projetos",
      id: "ProjectsLink",
      class: "pageLink",
      link: "/projects",
    },
    {
      name: "Contato",
      id: "ContactLink",
      class: "pageLink",
      link: "/Contato",
    },
    {
      name: "N clique",
      id: "false",
      class: "pageLink",
      link: "/pegaTroxakkkk",
    },
  ];
  function setColor(e) {
    const offLinks = pageLinks.filter((i) => i.id != e.target.id);
    offLinks.map(
      (i) => (document.getElementById(i.id).style.backgroundColor = "")
    );
    e.target.style.backgroundColor = "#179";
  }

  // muda o titulo dependendo do outlet
  const titleRef = useRef();
  const [headerTitle, setHeaderTitle] = useState("VyInIe");
  useEffect(() => {
    titleRef.current.textContent = headerTitle;
  });

  // prepara o localStorage pra projetos que o usam
  useEffect(() => {
    // itens do to do list
    localStorage.getItem("idItemTodo") == null &&
      localStorage.setItem("idItemTodo", 0);

    localStorage.getItem("listTodo") == null &&
      localStorage.setItem("listTodo", "[]");
  }, []);
  return (
    <div className="App">
      <header>
        <h1 className="logo">VyInIe</h1>
        <h1 ref={titleRef} className="headerTitle">
          {headerTitle}
        </h1>

        <div onClick={(e) => openNavBar(e)} className="oppenNavBar">
          <div className="lineToggle" id="lOne"></div>
          <div className="lineToggle" id="lTwo"></div>
          <div className="lineToggle" id="lThree"></div>
        </div>

        <h1 className="headerTitle"></h1>
        <div className="navArea">
          {pageLinks.map((i) => (
            <Link
              key={i.id}
              onClick={(e) => {
                setColor(e);
                openNavBar(e);
                setHeaderTitle(i.name);
              }}
              className="pageLink"
              to={i.link}
              id={i.id}
            >
              {i.name}
            </Link>
          ))}
        </div>
      </header>

      <div className="PagesCotainer">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
