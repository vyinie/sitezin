import { useEffect, useState } from "react";
import "/src/css/LayoutColors.css";
import "/src/css/App.css";

import { idRandom, colorRandom } from "../Randomizers";

export default function LayoutColors({
  lifes,
  setLifes,
  trueColor,
  setTrueColor,
  score,
  setScore,
  openDifChecker,
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

  // set difficultylvl
  function setDiff(e) {
    const btns = ["LvlEz", "LvlJunior", "LvlPleno"];

    const offBtns = btns.filter((i) => i != e.target.id);
    offBtns.map((i) => {
      document.getElementById(i).style.boxShadow = "";
      document.getElementById(i).style.backgroundColor = "";
    });

    e.target.style.backgroundColor = "#ddd";
    e.target.style.boxShadow = "#0005 inset -3px 3px 4px";

    document.querySelector(".LayoutColors").style.width = "max-content";
    // blocks.map((i) => (document.getElementById(i).style.width = "32%"));

    if (e.target.id == "LvlEz") {
      setBlocks([0, 1, 2, 3]);
      setLifes(3);
      // blocks.map((i) => (document.getElementById(i).style.width = "47%"));
      document.querySelector(".LayoutColors").style.width = "min-content";
    } else if (e.target.id == "LvlJunior") {
      setLifes(3);
      setBlocks([0, 1, 2, 3, 4, 5]);
    } else if (e.target.id == "LvlPleno") {
      setLifes(1);
      setBlocks([0, 1, 2, 3, 4, 5]);
    }
    setTrueId(idRandom(blocks.length));
    reset();
  }

  // ... resets... the game... ... ... bruh
  function reset() {
    setTrueColor(colorRandom());
    setTrueId(idRandom(blocks.length));
    setFalseColors([
      colorRandom(),
      colorRandom(),
      colorRandom(),
      colorRandom(),
      colorRandom(),
      colorRandom(),
    ]);
  }

  // fig out if u lost and shows the right color
  useEffect(() => {
    if (lifes === 0) {
      const wrongBlocks = blocks.filter((i) => i != trueId);
      wrongBlocks.map((i) => {
        document.getElementById(i).style.backgroundColor = "#0005";
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
              e.target.style.backgroundColor = "#444";
              setLifes(lifes - 1);
            }}
          >
            <div id={`hover${i}`} className="blockHover"></div>
          </span>
        )
      )}

      {/* ========================= difficulty lvl control ========================= */}
      <div
        className="difFControlWrapper"
        onClick={(e) => {
          openDifChecker(e);
        }}
      >
        <div className="difficultyControl">
          {/* NOOB LVL LOL */}
          <button id="LvlEz" className="btnDifficulty" onClick={setDiff}>
            noob
          </button>

          {/* normal LVL */}
          <button onClick={setDiff} id="LvlJunior" className="btnDifficulty">
            Junior
          </button>

          {/* pleno Lvl */}
          <button onClick={setDiff} id="LvlPleno" className="btnDifficulty">
            Pleno
          </button>
        </div>
      </div>
    </div>
  );
}
