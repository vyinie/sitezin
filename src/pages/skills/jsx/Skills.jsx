import "../css/Skills.css";
import html from "/src/imgs/skills/html.png";
import css from "/src/imgs/skills/css.png";
import js from "/src/imgs/skills/js.png";
import python from "/src/imgs/skills/python.png";
import SkillsItems from "./components/SkillsItems";

function Skills() {
  const skills = {
    linguagens: [
      {
        title: "HTML",
        img: html,
        details: "sem frameworks",
      },
      {
        title: "CSS",
        img: css,
        details: "Bootstrap",
      },
      {
        title: "JS",
        img: js,
        details: "React",
      },
      {
        title: "Python",
        img: python,
        details: "PyAutoGUI",
      },
    ],
  };

  return (
    <div className="skillsBody">
      <p className="headerTitle" id="skillsHeaderTitle">
        Skills
      </p>

      <div className="lengArea">
        <p className="skillsSubTitle">Tecnoligias</p>

        <div className="skillsImgContainer">
          {skills.linguagens.map((i) => (
            <SkillsItems
              key={skills.linguagens.indexOf(i)}
              img={i.img}
              title={i.title}
              details={i.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
