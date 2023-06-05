import { useRef } from "react";
import { SetDisplayToggle } from "/src/functions/SetToggles.jsx";

const SkillsItems = ({ img, title, details }) => {
  const detRef = useRef();

  return (
    <span
      onClick={() => SetDisplayToggle(detRef)}
      onMouseOut={() => SetDisplayToggle(detRef, "true")}
      className="skillItem"
    >
      <img src={img} alt={title} className="skillsImg" />
      <p className="skillItemSub">{title}</p>
      <div ref={detRef} className="skillDetWrapper">
        <p className="skillItemsDet">{details}</p>
      </div>
    </span>
  );
};

export default SkillsItems;
