import "../../css/KbItem.css";
import MultipleStopOutlinedIcon from "@mui/icons-material/MultipleStopOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { useEffect, useState } from "react";
const KbItem = ({ texto, id, toggleBtn, setToggleBtn }) => {
  return (
    <div id={`kbItem${id}`} className="kbItem">
      <p className="kbText">{texto}</p>
      <span
        onClick={() => {
          setToggleBtn(!toggleBtn);
        }}
        className="kbItemBtnContainer"
      >
        <MultipleStopOutlinedIcon className="kbItemBtn" />
      </span>
      <span className="kbItemBtnContainer">
        <MoreVertOutlinedIcon className="kbItemBtn" />
      </span>
    </div>
  );
};

export default KbItem;
