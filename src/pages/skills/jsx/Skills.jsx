import "../css/Skills.css";
import html from "/src/imgs/skills/html.png";
import css from "/src/imgs/skills/css.png";
import js from "/src/imgs/skills/js.png";

function Skills() {
  return (
    <div className="skillsBody">
      <p className="headerTitle" id="skillsHeaderTitle">
        Skills
      </p>

      <div className="lengArea">
        <p className="skillsSubTitle">Tecnoligias</p>

        <div className="skillsImgContainer">
          <img src={html} alt="" className="skillsImg" />
          <img src={css} alt="" className="skillsImg" />
          <img src={js} alt="" className="skillsImg" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
