import { Box, Button, Modal, TextField } from "@mui/material";
import { useState } from "react";
import "../../css/KbItemContainer.css";
const KbItemContainer = ({ id }) => {
  // popup pra add itens

  const [addKbItemModal, setAddKbItemModal] = useState(true);
  const handleToggle = () => {
    setAddKbItemModal(!addKbItemModal);
  };
  return (
    <div>
      <Button onClick={handleToggle}>Open modal</Button>
      <Modal
        open={addKbItemModal}
        onClose={handleToggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="box">
          <TextField
            className="inpAddKb"
            fullWidth
            variant="outlined"
            label="add kb"
          />
          <Button className="cancelAddKb" color="error" variant="contained">
            Cancel
          </Button>
          <Button className="confirmAddKb" variant="contained">
            Add
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default KbItemContainer;
