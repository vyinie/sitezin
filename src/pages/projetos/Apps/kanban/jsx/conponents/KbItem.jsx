import "../../css/KbItem.css";
const KbItem = ({ texto, id }) => {
  return (
    <div id={`kbItem${id}`} className="kbItem">
      <p className="kbCont">{texto}</p>
    </div>
  );
};

export default KbItem;
