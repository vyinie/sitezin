import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
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
  const [PageTitle, setPageTitle] = useState("Home");

  return (
    <div className="App">
      <header>
        <div onClick={(e) => openNavBar(e)} className="oppenNavBar">
          <div className="lOne"></div>
          <div className="lTwo"></div>
          <div className="lThree"></div>
        </div>
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
