import "../../css/KbItem.css";

import MultipleStopOutlinedIcon from "@mui/icons-material/MultipleStopOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Popover } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useState } from "react";

const KbItem = ({
  texto,
  id,
  hendlerModal,
  SetItemSelectedId,
  del,
  changeEditToggle,
}) => {
  const [openOpts, setOpenOpts] = useState(false);
  function openOptToggle(e) {
    setOpenOpts(!openOpts);
    setanchorEl(e.currentTarget);
  }

  const [anchorEl, setanchorEl] = useState(null);

  return (
    <div id={`kbItem${id}`} className="kbItem">
      <p className="kbText">{texto}</p>
      <span
        onClick={() => {
          hendlerModal();
          SetItemSelectedId(id);
        }}
        className="kbItemBtnContainer"
      >
        <MultipleStopOutlinedIcon className="kbItemBtn" />
      </span>
      <span onClick={openOptToggle} className="kbItemBtnContainer">
        <MoreVertOutlinedIcon className="kbItemBtn" />
      </span>
      <Popover
        id={`opts${id}`}
        open={openOpts}
        anchorEl={anchorEl}
        onClose={openOptToggle}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <div className="popoverBox">
          <DeleteIcon
            onClick={() => {
              del(id);
              setOpenOpts(!openOpts);
            }}
            className="kbItemBtn"
            id={`DelItemBtn${id}`}
          />
          <hr />
          <EditIcon
            onClick={() => {
              SetItemSelectedId(id);
              changeEditToggle();
              setOpenOpts(!openOpts);
            }}
            className="kbItemBtn"
            id={`EditItemBtn${id}`}
          />
        </div>
      </Popover>
    </div>
  );
};

export default KbItem;
