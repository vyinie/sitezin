import { useState } from "react";
import github from "/src/imgs/contactLinks/GitHub.png";
import linkedin from "/src/imgs/contactLinks/linkedin.png";
import insta from "/src/imgs/contactLinks/instagram.png";

const NavBar = ({}) => {
  // muda a cor do botão que representa a area q c ta
  function setColor(e) {
    const offLinks = pageLinks.filter((i) => i.id != e.target.id);
    offLinks.map(
      (i) => (document.getElementById(i.id).style.backgroundColor = "")
    );
    e.target.style.backgroundColor = "#179";
  }

  const [ToggleNavBar, setToggleNavBar] = useState(true);
  function openNavBar(e) {
    if (e.target.className != "navArea") {
      setToggleNavBar(!ToggleNavBar); //ativa ou desativa o toggle

      const navArea = document.querySelector(".navAreaWrapper");
      navArea.style.display = ToggleNavBar ? "flex" : ""; //mostra o layout
      document.body.style.overflow = ToggleNavBar ? "hidden" : ""; //impede o scroll

      // faz um x quando aberto
      document.querySelector("#lOne").classList.toggle("on", ToggleNavBar);
      document.querySelector("#lTwo").classList.toggle("on", ToggleNavBar);
      document.querySelector("#lThree").classList.toggle("on", ToggleNavBar);
    }
  }

  const pageLinks = [
    {
      name: "Projetos",
      id: "ProjectsLink",
      class: "pageLink",
    },
    {
      name: "Habilidades",
      id: "skills",
      class: "pageLink",
    },
  ];

  return (
    <div>
      <div onClick={(e) => openNavBar(e)} className="oppenNavBar">
        <div className="lineToggle" id="lOne"></div>
        <div className="lineToggle" id="lTwo"></div>
        <div className="lineToggle" id="lThree"></div>
      </div>
      <div
        className="navAreaWrapper"
        onClick={(e) => {
          openNavBar(e);
        }}
      >
        <div className="navArea">
          {pageLinks.map((i) => (
            <p
              key={i.id}
              onClick={(e) => {
                setColor(e);
                openNavBar(e);
                window.scroll({
                  top: "800",
                  behavior: "smooth",
                });
              }}
              className="pageLink"
              id={i.id}
            >
              {i.name}
            </p>
          ))}
          <hr style={{ width: "80%" }} />

          {/* area de contato */}
          <div className="contactContainer">
            <p className="contactText">Contato</p>

            <div className="contactLinksContainer">
              {/* link do GitHub */}
              <a
                id="githubLink"
                href="https://github.com/vyinie"
                className="contactLink"
              >
                <img
                  className="imgLink"
                  src={github}
                  alt="GitHub"
                />
              </a>

              {/* link do linedin */}
              <a
                href="https://www.linkedin.com/in/marcus-vinicius-023008248/"
                className="contactLink"
              >
                <img className="imgLink" src={linkedin} alt="LinkedIn" />
              </a>

              {/* link do insta */}
              <a href="#" className="contactLink">
                <img className="imgLink" src={insta} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
