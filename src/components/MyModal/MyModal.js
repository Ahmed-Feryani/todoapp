import React from "react";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import { toggleModalAction } from "../../redux/actions/modalActions";


const MyModal = ({ children }) => {
  const { show } = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(toggleModalAction(false));
  };
  
  return (
    <Modal
      open={show}
      onClose={closeModalHandler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableEnforceFocus
    >
      {children}
    </Modal>
  );
};

export default MyModal;
