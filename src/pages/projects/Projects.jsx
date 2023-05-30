import { useEffect, useState } from "react";
import Item from "./components/Item";
import "./Projects.css";
import colorgb from "/src/imgs/projectsItems/coloRGB_kase.png"
import kanban from "/src/imgs/projectsItems/kanban_kase.png"
import todo from "/src/imgs/projectsItems/ToDo_kase.png"

const Projects = (e) => {
  const projectsList = [
    {
      title: "ColoRGB",
      des: "Tente acertar a cor que representa o codigo RGB",
      id: 0,
      link: "/projects/coloRGB",
      img: colorgb,
    },
    {
      title: "To Do List",
      des: "To Do List, o nome é bem objetivo",
      id: 1,
      link: "/projects/to-do-list",
      img: kanban,
    },
    {
      title: "Kanban",
      des: "tipo o To Do List, só que mais organizado",
      id: 2,
      link: "/projects/kanban",
      img: todo,
    },
  ];
  const setId = () => {
    projectsList.map((i) => (i.id = projectsList.indexOf(i)));
  };
  useEffect(() => {
    setId();
  }, []);
  return (
    <div className="ProjectsBody">
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