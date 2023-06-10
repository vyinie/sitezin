import "../../css/KbItem.css";

import MultipleStopOutlinedIcon from "@mui/icons-material/MultipleStopOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Popover } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { memo, useState } from "react";

const KbItem = ({ text, id, items, cardId, lists, setLists }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const open = Boolean(anchorEl);

  // console.log(lists[0].items);
  function delItem(e) {
    const thisId = e.target.id.slice(8);

    const arr = lists.filter((i) => i.id == cardId);
    const index = lists.indexOf(arr[0]);

    const newItems = items.filter((i) => i.id != thisId);
    lists[index].items = newItems;
    setLists(lists)
  }

  return (
    <div id={`item${id}`} className="cardItem">
      <p className="kbItemText">{text}</p>
      <MoreVertOutlinedIcon onClick={handleClick} className="kbMoreOpt" />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <div className="kbPopover">
          <span className="dadCover">
            <div
              onClick={delItem}
              id={"deletbtn" + id}
              className="btnHover cover"
            ></div>
            <DeleteIcon />
          </span>
          <hr />
          <span className="dadCover">
            <div id={"editbtn" + id} className="btnHover cover"></div>
            <EditIcon className="btnHover" />
          </span>
        </div>
      </Popover>
    </div>
  );
};

export default KbItem;
