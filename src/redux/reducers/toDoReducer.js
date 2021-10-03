import {
  ADD_TASK,
  DEL_TASK,
  DONE_TASK,
  EDIT_TASK,
  FILTER_TASK,
} from "../types";

const INITIAL_STATE = {
  toDoList: [
    { id: 1, description: "first task", isDone: false },
    { id: 2, description: "second task", isDone: false },
  ],
  filter: "all",
};

const toDoReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        toDoList: [...state.toDoList, payload],
      };
    case DEL_TASK:
      return {
        ...state,
        toDoList: [...payload],
      };
    case EDIT_TASK:
      return {
        ...state,
        toDoList: [...payload],
      };
    case DONE_TASK:
      return {
        ...state,
        toDoList: [...payload],
      };
    case FILTER_TASK:
      return {
        ...state,
        filter: payload,
      };
    default:
      return state;
  }
};

export default toDoReducer;
