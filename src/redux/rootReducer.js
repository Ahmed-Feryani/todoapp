import { combineReducers } from "redux";
import modalReducer from "./reducers/modalReducer";
import toDoReducer from "./reducers/toDoReducer";

const rootReducer = combineReducers({
  modalReducer,
  toDoReducer,
});

export default rootReducer;
