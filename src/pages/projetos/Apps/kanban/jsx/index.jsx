import "../css/index.css";
import BackIcon from "../../../components/BackIcon";

function Kanban() {
  // =============pro mobile=============
  
  // mostra onde voce ta
  const kbAreas = ["kbToDo", "kbDoing", "kbDone"];
  const setKbArea = (e) => {
    kbAreas
      .filter((i) => i != e.target.id)
      .map((i) => (document.getElementById(i).style.borderBottom = ""));
    e.target.style.borderBottom = "solid #970 5px";
  };

  return (
    <div className="Kanban">
      <BackIcon />
      <div className="kbNav" onClick={setKbArea}>
        <span className="kbNavBtn" id="kbToDo">
          À Fazer
        </span>
        <span className="kbNavBtn" id="kbDoing">
          Fazendo
        </span>
        <span className="kbNavBtn" id="kbDone">
          Feito
        </span>
      </div>

      <div className="KbContainer"></div>
    </div>
  );
}

export default Kanban;
