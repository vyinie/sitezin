import { useState } from "react";
import { Item } from "./components/item";
import "./Projects.css";
const Projects = () => {
  const [projectsList, setProjectsList] = useState([
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
      title: "To Do List",
      des: "To Do List, o nome é bem objetivo",
      id: 2,
      link: "/projects/2",
    },
  ]);
  return (
    <div className="ProjectsBody">
      <section className="itemsContainer">
        {projectsList.map((i) => (
          <Item
            key={i.id}
            title={i.title}
            des={i.des}
            id={i.id}
            link={i.link}
          />
        ))}
      </section>
    </div>
  );
};

export default Projects;
