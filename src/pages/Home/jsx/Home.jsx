import "../css/Home.css";
import Projects from "../../projetos/Projects";
import myPic from "/src/imgs/FotinhaDaora.png";

export default function Home() {
  const startDate = new Date("2022-02-27 "); //data de inicio
  const currentlyDate = new Date(); //data de hj

  //diferença ente ambas
  const timeCounter = Math.abs(currentlyDate - startDate);

  // converte as palavras ao plural
  function sAfter(num, word, suf) {
    if (num != 1) {
      return word + suf;
    } else {
      return word;
    }
  }

  const divider = 1000 * 60 * 60 * 24; //1 dia em ms

  // calcula os anos
  const years = Math.floor(timeCounter / (divider * 365));
  const showYs = sAfter(years, "ano", "s");

  // calcula os meses
  const month = Math.floor(years - 365);
  const showMs = sAfter(month, "mes", "es");

  // calcula os dias
  const days = Math.floor(4);
  const showDs = sAfter(days, "dia", "s");

  return (
    <div className="HomeBody">
      {/* fotinha */}
      <div className="imgContainer">
        <img className="pic" src={myPic} alt="fotinha mil gral" />
      </div>
      <div className="homeDesc">
        <table className="homeTab">
          <tr className="tabRow">
            <td className="tabCell">NOME:</td>
            <td className="tabCell resp">Marcus</td>
          </tr>
          <tr className="tabRow">
            <td className="tabCell">FUNÇÃO:</td>
            <td className="tabCell resp">Web Dev</td>
          </tr>
          <tr className="tabRow">
            <td className="tabCell">ATUAÇÃO:</td>
            <td className="tabCell resp">Front-End</td>
          </tr>
        </table>
        <p className="timeTitle">TEMPO DE ATUAÇÃO</p>

        <p className="timeTitle">{`${years} ${showYs}, ${month} ${showMs} e ${days} ${showDs}, `}</p>
      </div>
      {/* area dos projetos */}
      <Projects />
    </div>
  );
}
