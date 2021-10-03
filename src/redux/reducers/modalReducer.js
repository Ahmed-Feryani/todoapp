import { TOGGLE_MODAL } from "../types";

const INITIAL_STATE = {
  show: false,
  task: false,
};

const modalReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_MODAL:
      return {
        show: payload.show,
        task: payload.task,
      };

    default:
      return state;
  }
};

export default modalReducer;
