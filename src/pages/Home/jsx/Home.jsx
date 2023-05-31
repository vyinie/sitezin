import "../css/Home.css";
import Projects from "../../projects/Projects";
import myPic from "/src/imgs/FotinhaDaora.png";
import Skills from "../../skills/jsx/Skills";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="HomeBody">
      {/* home */}
      <div id="homeArea" className="area">
        {/* fotinha */}
        <div className="imgContainer">
          <img className="pic" src={myPic} alt="fotinha mil gral" />
        </div>
        <div className="homeDesc">
          <table className="homeTab">
            <tbody>
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
            </tbody>
          </table>
          <p className="timeTitle">TEMPO DE ATUAÇÃO</p>

          <p className="timeTitle">7 meses</p>
        </div>
      </div>

      <hr className="divAreas" />
      <div id="projectsArea" className="area">
        {/* area dos projetos */}
        <Projects />
      </div>

      <hr className="divAreas" />
      <div id="skillsArea" className="area">
        {/* area das habilidades */}
        <Skills />
      </div>
    </div>
  );
}
