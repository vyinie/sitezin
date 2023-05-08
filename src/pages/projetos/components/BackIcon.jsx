import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function BackIcon() {
  const navigate = useNavigate();
  return (
    <div
      className="backBtn"
      onClick={() => {
        navigate(-1);
        document.querySelector(".headerTitle").textContent = "Projetos";
      }}
    >
      <ArrowBackIcon sx={{ fontSize: "30px" }} />
    </div>
  );
}

export default BackIcon;
