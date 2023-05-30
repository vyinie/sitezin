import "../css/Skills.css";
import html from "/src/imgs/skills/html.png";
import css from "/src/imgs/skills/css.png";
import js from "/src/imgs/skills/js.png";
import python from "/src/imgs/skills/python.png";

function Skills() {
  return (
    <div className="skillsBody">
      <p className="headerTitle" id="skillsHeaderTitle">
        Skills
      </p>

      <div className="lengArea">
        <p className="skillsSubTitle">Tecnoligias</p>

        <div className="skillsImgContainer">
          <img src={html} alt="html" className="skillsImg" />
          <img src={css} alt="css" className="skillsImg" />
          <img src={js} alt="js" className="skillsImg" />
          <img src={python} alt="python" className="skillsImg" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
