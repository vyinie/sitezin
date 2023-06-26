import "../css/Home.css";
import Projects from "../../projects/Projects";
import myPic from "/src/_images/FotinhaDaora.png";
import github from "/src/_images/contact/github.png";
import curriculo from "/src/_images/contact/curriculo.png";
import linkedin from "/src/_images/contact/linkedin.png";
import { useRef, useEffect, useState } from "react";

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

      {/* home */}
      <div id="homeArea" className="area">
        <div className="ftinha">
          <img id="eu" src={myPic} alt="eu" />
        </div>
        <div className="titleHomeBox">
          <h1 className="titleHome" id="devTitle">
            desenvolvedor
          </h1>
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
        <Projects />
      </div>
    </div>
  );
}
