import { useEffect, useState } from "react";
import Item from "./components/Item";
import "./Projects.css";
const Projects = (e) => {
  const projectsList = [
    {
      title: "ColoRGB",
      des: "Tente acertar a cor que representa o codigo RGB",
      id: 0,
      link: "/projects/coloRGB",
      img: "coloRGB_kase.png",
    },
    {
      title: "To Do List",
      des: "To Do List, o nome é bem objetivo",
      id: 1,
      link: "/projects/to-do-list",
      img: "kanban_kase.png",
    },
    {
      title: "Kanban",
      des: "tipo o To Do List, só que mais organizado",
      id: 2,
      link: "/projects/kanban",
      img: "ToDo_kase.png",
    },
  ];
  const setId = () => {
    projectsList.map((i) => (i.id = projectsList.indexOf(i)));
  };
  useEffect(() => {
    setId();
  }, []);
  return (
    <div onDrag={() => conosle.log("in drag")} className="ProjectsBody">
      <p className="headerTitle">Projetos</p>
      <div className="itemsContainer">
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
      </div>
    </div>
  );
};

export default Projects;
