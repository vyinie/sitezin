import "../css/Home.css";

export default function Home() {
  return (
    <div className="HomeBody">
      <h1 className="headerTitle" id="homeTitle">VyInIe</h1>
      <div className="imgContainer">
        <img className="ftreal"
          src="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg"
          alt="foto 101% veridica de meu ser"
        />
      </div>
      <p id="homeDesc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quas
        id minima explicabo vel obcaecati, dicta, animi temporibus tempore
        voluptate praesentium itaque facere odit. Iusto quod odit quam voluptas
        dolore.
      </p>
    </div>
  );
}
