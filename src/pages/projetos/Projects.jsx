import { useEffect, useState } from "react";
import Item from "./components/Item";
import "./Projects.css";
const Projects = (e) => {
  const projectsList = [
    {
      title: "ColoRGB",
      des: "Tente acertar a cor que representa o codigo RGB",
      id: 0,
      link: "/projects/1",
    },
    {
      title: "To Do List",
      des: "To Do List, o nome é bem objetivo",
      id: 1,
      link: "/projects/2",
    },
    {
      title: "Kanban",
      des: "tipo o To Do List, só que mais organizado",
      id: 2,
      link: "/projects/3",
    },
  ];
  const funcTeste = () => {
    projectsList.map((i) => (i.id = projectsList.indexOf(i)));
  };
  useEffect(() => {
    funcTeste();
  }, []);
  return (
    <div className="ProjectsBody">
      <section
        className="itemsContainer"
        onClick={(e) => console.log(e.target.id)}
      >
        {projectsList.map((i) => (
          <Item
            key={i.id}
            title={i.title}
            des={i.des}
            id={`project${i.id}`}
            link={i.link}
          />
        ))}
      </section>
    </div>
  );
};

export default Projects;
