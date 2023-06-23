import "../../css/Lifes.css";
export default function Lifes({ lifes }) {
  const lifePoints = [];
  for (var i = lifes; i > 0; i--) {
    lifePoints.push("l" + i);
  }

  return (
    <div className="lifesContainer">
      {lifePoints.map((i) => (
        <p key={i} className="life" id={`life${i}`}>
          &#128156;
        </p>
      ))}
    </div>
  );
}
