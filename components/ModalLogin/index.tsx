import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ModalContext } from "../../context/ContextModal";
import { SxProps } from "@mui/material/styles";
import { Theme } from "@emotion/react";

const style: SxProps<Theme> = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ModalLogin = () => {
  const { modalOpen, setModalOpen } = React.useContext(ModalContext);

  const handleClose = () => setModalOpen(false);

  return (
    <Modal
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Bersambung...
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalLogin;
