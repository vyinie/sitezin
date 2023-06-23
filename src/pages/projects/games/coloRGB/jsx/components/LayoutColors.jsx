import { useEffect, useState } from "react";
import "../../css/LayoutColors.css";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import { idRandom, colorRandom } from "../Randomizers";

export default function LayoutColors({
  lifes,
  setLifes,
  trueColor,
  setTrueColor,
  score,
  setScore,
}) {
  // set blocks wit false colors
  const [blocks, setBlocks] = useState([0, 1, 2, 3, 4, 5]);
  const [falseColors, setFalseColors] = useState([
    colorRandom(),
    colorRandom(),
    colorRandom(),
    colorRandom(),
    colorRandom(),
    colorRandom(),
  ]);

  // chooses a random block to true color
  const [trueId, setTrueId] = useState(idRandom(blocks.length));

  // set diflvl
  function setDiff(e) {
    const difConfig = [
      { id: "LvlEz", blocks: [0, 1, 2, 3], lifes: 3, width: "min-content" },
      {
        id: "LvlJunior",
        blocks: [0, 1, 2, 3, 4, 5],
        lifes: 3,
        width: "",
      },
      {
        id: "LvlPleno",
        blocks: [0, 1, 2, 3, 4, 5],
        lifes: 1,
        width: "",
      },
    ];

    // sets style to off btns
    const offBtns = difConfig.filter((i) => i.id != e.target.id);
    offBtns.map((i) => {
      document.getElementById(i.id).style.backgroundColor = "";
    });
    // sets style to on btn
    e.target.style.backgroundColor = "#ddd";

    // for mobile
    setToggleDifOpt(!ToggleDifOpt);

    // modfies ColorLayout style
    const onBtn = difConfig.filter((i) => i.id === e.target.id)[0];
    
    setBlocks(onBtn.blocks);
    setLifes(onBtn.lifes);
    document.querySelector(".LayoutColors").style.width = onBtn.width;

    setTrueId(idRandom(onBtn.blocks.length));
    reset();
  }

  // ... resets... the game... ... ... bruh
  function reset() {
    setTrueId(idRandom(blocks.length));
    setFalseColors([
      colorRandom(),
      colorRandom(),
      colorRandom(),
      colorRandom(),
      colorRandom(),
      colorRandom(),
    ]);
    setTrueColor(colorRandom());
    blocks.map(
      (i) => (document.getElementById(`hover${i}`).style.backgroundColor = "")
    );
  }

  // fig out if u lost and shows the right color
  useEffect(() => {
    if (lifes === 0) {
      const wrongBlocks = blocks.filter((i) => i != trueId);
      wrongBlocks.map((i) => {
        document.getElementById(i).style.backgroundColor = "transparen";
      });
    }
    document.querySelector(".popupBtn").addEventListener(
      "click",
      () => {
        document.querySelector(".popupWrapper").style.display = "";
        document.getElementById("LvlPleno").style.backgroundColor !== ""
          ? setLifes(1)
          : setLifes(3);
        reset();
        setScore(0);
      },
      [lifes]
    );
  });

  // selects the normal lvl when load the page
  useEffect(() => {
    document.getElementById("LvlJunior").click();
  }, []);

  const [ToggleDifOpt, setToggleDifOpt] = useState(true);
  useEffect(() => {
    ToggleDifOpt
      ? (document.querySelector(".difControl").style.display = "flex")
      : (document.querySelector(".difControl").style.display = "");
  }, [ToggleDifOpt]);
  // ===============================HTML===============================
  return (
    <div className="LayoutColors">

      {blocks.map((i) =>
        // load the right block
        i == trueId ? (
          <span
            id={i}
            style={{ backgroundColor: trueColor }}
            key={blocks.indexOf(i)}
            className="colorBlock"
            onClick={() => {
              reset();
              (lifes < 3) &
                (document.getElementById("LvlPleno").style.backgroundColor ===
                  "") && setLifes(lifes + 1);
              setScore(score + 100);
            }}
          >
            <div id={`hover${i}`} className="blockHover"></div>
          </span>
        ) : (
          // load the wrong block
          <span
            id={i}
            style={{ backgroundColor: falseColors[i] }}
            key={blocks.indexOf(i)}
            className="colorBlock"
            onClick={(e) => {
              setLifes(lifes - 1);
              e.target.style.backgroundColor = "#aaa";
            }}
          >
            <div id={`hover${i}`} className="blockHover"></div>
          </span>
        )
      )}

      {/* ========================= dif lvl control ========================= */}
      <span
        className="difOptToggle"
        onClick={() => {
          setToggleDifOpt(!ToggleDifOpt);
        }}
      >
        <SettingsApplicationsIcon sx={{fontSize: "40px", color:"#fff"}} />
      </span>
      <div className="difControl">
        {/* NOOB LVL LOL */}
        <button id="LvlEz" className="btnDif" onClick={setDiff}>
          noob
        </button>

        {/* normal LVL */}
        <button onClick={setDiff} id="LvlJunior" className="btnDif">
          Junior
        </button>

        {/* pleno Lvl */}
        <button onClick={setDiff} id="LvlPleno" className="btnDif">
          Pleno
        </button>
      </div>
    </div>
  );
}
