import { useEffect, useRef, useState } from "react";
import Item from "./components/ProjectItem";
import "./Projects.css";
import colorgb from "/src/imgs/projectsItems/games/coloRGB_kase.png";
import todo from "/src/imgs/projectsItems/apps/ToDo_kase.png";
import acAlma from "/src/imgs/projectsItems/landingPages/acAlma_kase.png";
import emBreve from "/src/imgs/projectsItems/em-breve.png";

const Projects = () => {
  const projectsList = [
    // apps
    [
      {
        title: "To Do List",
        des: "To Do List, o nome é bem objetivo",
        id: 1,
        link: "/to-do-list",
        img: todo,
      },
      // {
      //   title: "Kanban - em reforma",
      //   des: "tipo o To Do List, só que mais organizado",
      //   id: 2,
      //   link: "/kanban",
      //   img: kanban,
      // },
      {
        title: "Sistema de Cadastro",
        des: "projeto de CRUD",
        id: 3,
        link: "/sistema-de-cadastro",
        img: emBreve,
      },
    ],

    // landing pages
    [
      {
        title: "acALMA",
        des: "landing page da newsletter de um curso de meditação, apenas HTML e CSS",
        id: 4,
        link: "/acAlma",
        img: acAlma,
      },
      {
        title: "Em Breve",
        des: "Ainda em desenvolvimento",
        id: 5,
        link: "/",
        img: emBreve,
      },
      {
        title: "Em Breve",
        des: "Ainda em desenvolvimento",
        id: 6,
        link: "/",
        img: emBreve,
      },
      {
        title: "Em Breve",
        des: "Ainda em desenvolvimento",
        id: 7,
        link: "/",
        img: emBreve,
      },
    ],

    // games
    [
      {
        title: "ColoRGB",
        des: "Tente acertar a cor que representa o codigo RGB",
        id: 0,
        link: "/coloRGB",
        img: colorgb,
      },
    ],
  ];

  // muda a sessão de proejtos à mostra | LP === Landing Page
  const projectsId = [
    { id: "apps", isIn: true },
    { id: "LP", isIn: false },
    { id: "games", isIn: false },
  ];

  // ====================== diz a sessão atual ======================
  function saySectionIndex() {
    return projectsId.indexOf(projectsId.find((i) => i.isIn));
  }
  const [index, setIndex] = useState(0);

  function setSectionSelected(e) {
    e.target.className === "selectProjectBtn" &&
      (projectsId.map((i) =>
        i.id === e.target.id ? (i.isIn = true) : (i.isIn = false)
      ),
      projectsId.filter(
        (i) =>
          !i.isIn
            ? (document.getElementById(i.id).style.borderBottomColor =
                "")
            : (document.getElementById(i.id).style.borderBottomColor =
                "#0094ff"),
        setIndex(saySectionIndex())
      ));
  }
  const app = useRef();
  useEffect(() => {
    app.current.click();
  }, []);
  return (
    <div className="ProjectsBody">
      <div className="projectsHeadercontainer">
        <h1 className="projectsHeaderTitle">Projetos</h1>
      </div>
      <div onClick={setSectionSelected} className="selectProjectArea">
        <span ref={app} className="selectProjectBtn" id="apps">
          Apps
        </span>
        <span className="selectProjectBtn" id="LP">
          Landing Pages
        </span>
        <span className="selectProjectBtn" id="games">
          Jogos
        </span>
      </div>
      <div className="itemsContainer">
        {projectsList[index].map((i) => (
          <Item
            key={`item${i.id}`}
            title={i.title}
            des={i.des}
            link={i.link}
            img={i.img}
          />
        ))}
        <div className="bottomBlur">ver mais</div>
      </div>
    </div>
  );
};

export default Projects;
