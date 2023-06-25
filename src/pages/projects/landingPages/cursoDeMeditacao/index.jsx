import BackIcon from "../../components/BackIcon";
import Img from "/src/imgs/projectsItems/landingPages/acAlma/HomeImg.png";
import "./style.css";
import { useState } from "react";
function CursoMeditacao() {
  const [headerToggle, setHeaderToggle] = useState(true);
  function closeHeader() {
    setHeaderToggle(!headerToggle);
    const links = document.querySelector(".headerBtns");
    const arrow = document.querySelector(".v");
    headerToggle
      ? ((links.style.top = "0"), (arrow.style.rotate = "180deg"))
      : ((links.style.top = ""), (arrow.style.rotate = ""));
  }
  return (
    <div className="body">
      <header className="header">
        <BackIcon  styles={{
            top: "40px",
            width: "40px",
          }}/>
        <p className="headerTitle">
          Curso de <div className="headerMainWord">Meditação</div>
        </p>

        <span className="headerBtns">
          <spam className="headerLinks">
            <p>Home</p>
            <p>Serviços</p>
            <p>Contato</p>
            <p>Sobre</p>
          </spam>
          <p className="loginBtn atHeader">ja tem uma conta?</p>
          <span className="arrow" onClick={closeHeader}>
            <p className="v">V</p>
          </span>
        </span>
      </header>

      <section className="copySection">
        <h1 className="copyTitle">
          <div className="copyMainWord">Inscreva-se agora</div> na
          Newsletter
        </h1>
        <p className="copy">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quam aliquclassName est expedita mollitia, aut veritatis
          magnam natus blanditiis iste dolor libero harum obcaecati
          possimus rerum, aperiam ratione. Sequi, illum doloremque!
        </p>

        <div className="formContainer">
          <input
            className="signupInp"
            type="text"
            placeholder="Nome"
          />
          <input
            className="signupInp"
            type="email"
            placeholder="E-Mail"
          />
          <button className="signupBtn">Cadastrar</button>
          <p className="loginBtn atBody">ja tem uma conta?</p>
        </div>
      </section>
      <div className="imgContainer">
        <img className="HomeImg" src={Img} />
      </div>
    </div>
  );
}

export default CursoMeditacao;
