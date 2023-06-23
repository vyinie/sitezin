import { useEffect, useState } from "react";
import { colorRandom } from "./Randomizers";
import LayoutColors from "./components/LayoutColors";
import Lifes from "./components/lifes.jsx";
import "../css/LayoutGame.css";
import ProjectHeader from "../../../components/ProjectHeader";

export default function LayoutGame() {
  const [trueColor, setTrueColor] = useState(colorRandom());
  const [lifes, setLifes] = useState(3);
  const [score, setScore] = useState(0);

  useEffect(() => {
    localStorage.getItem("hightScore") == null &&
      localStorage.setItem("hightScore", 0);
  }, []);
  const [hightScore, setHightScore] = useState(
    localStorage.getItem("hightScore")
  );

  //========================= limita a vida =======================================
  useEffect(() => {
    if (lifes === 0) {
      setTimeout(() => {
        document.querySelector(".popupWrapper").style.display = "flex";
      }, 1000);
    }
  }, [lifes]);

  //========================= registra os pontos =======================================
  useEffect(() => {
    if (score > hightScore) {
      localStorage.setItem("hightScore", score);
      setHightScore(localStorage.getItem("hightScore"));
    }
  }, [score]);

  return (
    <div className="LayoutGame">
      <ProjectHeader title="coloRGB"/>

      {/* ========================= main layout ======================================= */}
      <div className="gameArea">
      <Lifes lifes={lifes} />

      <div className="displayText">
        <h1>{trueColor.slice(4, -1)}</h1>
      </div>

      <LayoutColors
        lifes={lifes}
        setLifes={setLifes}
        trueColor={trueColor}
        setTrueColor={setTrueColor}
        score={score}
        setScore={setScore}
      />

      {/* ========================= score area ======================================= */}
      <div className="scoreContainer">
        <div className="score">
          <h2>Pontos</h2>
          <h2 id="currentlyScore">{score}</h2>
        </div>
        <div className="score">
          <h2>Record</h2>
          <h2 id="hightScore">{hightScore}</h2>
        </div>
      </div>

      {/* ========================= popup to loosers ======================================= */}
      <div className="popupWrapper">
        <div className="popup">
          <h2>PERDEU</h2>
          <button className="popupBtn">Recomeçar</button>
        </div>
      </div>
    </div>
    </div>
  );
}
