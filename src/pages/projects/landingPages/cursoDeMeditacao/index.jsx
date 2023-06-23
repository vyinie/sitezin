import BackIcon from "../../components/BackIcon";
import Img from "./images/HomeImg.png";
import "./style.css";
function CursoMeditacao() {
  return (
    <div id="body">
      <header className="header">
        <BackIcon />
        <p className="headerTittle">
          Curso de <div id="headerMainWord">Meditação</div>
        </p>

        <span className="headerBtns">
          <spam className="headerLinks">
            <p>Home</p>
            <p>Serviços</p>
            <p>Contato</p>
            <p>Sobre</p>
          </spam>
          <p id="loginBtn">ja tem uma conta?</p>
        </span>
      </header>

      <section className="copySection">
        <h1 className="copyTitle">
          <div className="copyMainWord">Inscreva-se agora</div> na
          Newsletter
        </h1>
        <p className="copy">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quam aliquid est expedita mollitia, aut veritatis magnam
          natus blanditiis iste dolor libero harum obcaecati possimus
          rerum, aperiam ratione. Sequi, illum doloremque!
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
        </div>
      </section>
      <div className="imgContainer">
        <img className="HomeImg" src={Img} />
      </div>
    </div>
  );
}

export default CursoMeditacao;
