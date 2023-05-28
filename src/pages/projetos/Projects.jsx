import { useEffect, useState } from "react";
import Item from "./components/Item";
import "./Projects.css";
<<<<<<< HEAD
import coloRGB_kase from "./components/imgs/coloRGB_kase.png";
import ToDo_kase from "./components/imgs/ToDo_kase.png";
import kanban_kase from "./components/imgs/kanban_kase.png";
=======

>>>>>>> c3e4959 (sitizin ficnado bonito)
const Projects = (e) => {
  const projectsList = [
    {
      title: "ColoRGB",
      des: "Tente acertar a cor que representa o codigo RGB",
      id: 0,
      link: "/projects/coloRGB",
<<<<<<< HEAD
      img: coloRGB_kase,
=======
      img: "coloRGB_kase.png",
>>>>>>> c3e4959 (sitizin ficnado bonito)
    },
    {
      title: "To Do List",
      des: "To Do List, o nome é bem objetivo",
      id: 1,
      link: "/projects/to-do-list",
<<<<<<< HEAD
      img: ToDo_kase,
=======
      img: "kanban_kase.png",
>>>>>>> c3e4959 (sitizin ficnado bonito)
    },
    {
      title: "Kanban",
      des: "tipo o To Do List, só que mais organizado",
      id: 2,
      link: "/projects/kanban",
<<<<<<< HEAD
      img: kanban_kase,
=======
      img: "ToDo_kase.png",
>>>>>>> c3e4959 (sitizin ficnado bonito)
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
<<<<<<< HEAD
      <section className="itemsContainer">
=======
      <p className="headerTitle">Projetos</p>
      <div className="itemsContainer">
>>>>>>> c3e4959 (sitizin ficnado bonito)
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
<<<<<<< HEAD
      </section>
=======
      </div>
>>>>>>> c3e4959 (sitizin ficnado bonito)
    </div>
  );
};

export default Projects;
