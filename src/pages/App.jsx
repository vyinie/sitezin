<<<<<<< HEAD
import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
=======
import { useEffect, useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

>>>>>>> 60404eb (site la)
function App() {
  const [openDifOn, setOpenDifOn] = useState(true);

  function openNavBar(e) {
    if (e.target.className != "navArea") {
      setOpenDifOn(!openDifOn);
      openDifOn
        ? ((document.querySelector(".navAreaWrapper").style.display = "flex"),
          document.querySelector(".lOne").classList.add("on"),
          document.querySelector(".lTwo").classList.add("on"),
          document.querySelector(".lThree").classList.add("on"))
        : ((document.querySelector(".navAreaWrapper").style.display = ""),
          document.querySelector(".lOne").classList.remove("on"),
          document.querySelector(".lTwo").classList.remove("on"),
          document.querySelector(".lThree").classList.remove("on"));
    }
  }
<<<<<<< HEAD
  const [PageTitle, setPageTitle] = useState("Home");

  return (
    <div className="App">
      <header>
=======

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
      link: "/Projects",
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
  useEffect(() => {document.getElementById("HomeLink").click()},[])
  return (
    <div className="App">
      <header>
        <h1 className="logo">VyInIe</h1>
>>>>>>> 60404eb (site la)
        <div onClick={(e) => openNavBar(e)} className="oppenNavBar">
          <div className="lOne"></div>
          <div className="lTwo"></div>
          <div className="lThree"></div>
        </div>
<<<<<<< HEAD
        <h1 className="headerTitle">{PageTitle}</h1>

        <div onClick={(e) => openNavBar(e)} className="navAreaWrapper">
          <div className="navArea">
            <Link id="HomeLink" className="pageLink" to="/">
              Home
            </Link>
            <Link className="pageLink" to="/Projects">
              Projetos
            </Link>
            <Link className="pageLink" to="/Contato">
              Contato
            </Link>
            <Link className="pageLink" to="/kkk">
              n clique
            </Link>
=======

        <h1 className="headerTitle"></h1>

        <div onClick={(e) => openNavBar(e)} className="navAreaWrapper">
          <div className="navArea">
            {pageLinks.map((i) => (
              <Link
                key={i.id}
                onClick={(e) => {
                  setColor(e);
                }}
                className="pageLink"
                to={i.link}
                id={i.id}
              >
                {i.name}
              </Link>
            ))}
>>>>>>> 60404eb (site la)
          </div>
        </div>
      </header>

      <div className="PagesCotainer">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
