import { useEffect, useState } from "react";
import Item from "./components/Item";
import "./Projects.css";
import coloRGB_kase from "./components/imgs/coloRGB_kase.png";
import ToDo_kase from "./components/imgs/ToDo_kase.png";
const Projects = (e) => {
  const projectsList = [
    {
      title: "ColoRGB",
      des: "Tente acertar a cor que representa o codigo RGB",
      id: 0,
      link: "/projects/coloRGB",
      img: coloRGB_kase,
    },
    {
      title: "To Do List",
      des: "To Do List, o nome é bem objetivo",
      id: 1,
      link: "/projects/to-do-list",
      img: ToDo_kase,
    },
    {
      title: "Kanban",
      des: "tipo o To Do List, só que mais organizado",
      id: 2,
      link: "/projects/kanban",
      img: "#",
    },
  ];
  const funcTeste = () => {
    projectsList.map((i) => (i.id = projectsList.indexOf(i)));
  };
  useEffect(() => {
    funcTeste();
  }, []);
  return (
    <div onDrag={() => conosle.log("in drag")} className="ProjectsBody">
      <section className="itemsContainer">
        {projectsList.map((i) => (
          <Item
            key={i.id}
            title={i.title}
            des={i.des}
            id={`project${i.id}`}
            link={i.link}
            img={i.img}
          />
        ))}
      </section>
    </div>
  );
};

export default Projects;
