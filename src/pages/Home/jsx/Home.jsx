import "../css/Home.css";
import Projects from "../../projects/Projects";
import myPic from "/src/imgs/FotinhaDaora.png";
import github from "/src/imgs/contact/github.png";
import curriculo from "/src/imgs/contact/curriculo.png";
import linkedin from "/src/imgs/contact/linkedin.png";
import Skills from "../../skills/jsx/Skills";
import { useRef, useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const links = [
    {
      id: "github",
      link: "https://github.com/vyinie",
      img: github,
      alt: "GitHub",
    },
    {
      id: "linkedin",
      link: "https://www.linkedin.com/in/marcus-vinicius-023008248/",
      img: linkedin,
      alt: "LinkedIn",
    },
    {
      id: "curriculo",
      link: "https://github.com/vyinie",
      img: curriculo,
      alt: "curriculo",
    },
  ];

  const [text, setText] = useState("");

  function escreve(t, i = 0) {
    i < t.length &&
      (setText(t.slice(0, i + 1)),
      setTimeout(() => {
        escreve(t, i + 1);
      }, 50));
  }


  useEffect(() => {
    setTimeout(() => {
      escreve("Me chamo Marcus e sou um web dev front-end");
    });
  }, []);

  return (
    <div className="HomeBody">
      {/* navbar */}
      <div className="navBar">
        <h1 className="Logo">Vynie</h1>

        <span className="pageLinksContainer">
          <a className="pageLink" href="#projectsArea">
            Projetos
          </a>
          <a className="pageLink" href="#skillsArea">
            Habilidades
          </a>
          <a className="pageLink" href="#contactArea">
            Contato
          </a>
        </span>
      </div>

      {/* home */}
      <div id="homeArea" className="area">
        <div className="ftinha">
          <img id="eu" src={myPic} alt="eu" />
        </div>
        <div className="titleHomeBox">
          <h1 className="titleHome">desenvolvedor</h1>
          <h1 className="titleHome" id="reactTitle">
            react
          </h1>
          <p className="subtitleHome">{text}</p>

          <div className="LinksContainer">
            {links.map((i) => (
              <a key={i.id} href={i.link} className="contactLink">
                <img className="imgLink" src={i.img} alt={i.alt} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div id="projectsArea" className="area">
        {/* area dos projetos */}
        <Projects />
      </div>

      <div id="skillsArea" className="area">
        {/* area das habilidades */}
        <Skills />
      </div>
      <div id="contactArea" className="area">
        {/* area de contato */}
        <Skills />
      </div>
    </div>
  );
}
