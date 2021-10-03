import { TOGGLE_MODAL } from "../types";

export const toggleModalAction = (show, task = false) => {
  return {
    type: TOGGLE_MODAL,
    payload: { show, task },
  };
};
