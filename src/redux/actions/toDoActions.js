import {
  ADD_TASK,
  DEL_TASK,
  DONE_TASK,
  EDIT_TASK,
  FILTER_TASK,
} from "../types";

export const AddTaskAction = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const DelTaskAction = (toDoList, id) => {
  const toDoListUpdated = [...toDoList].filter((task) => task.id !== id);
  return {
    type: DEL_TASK,
    payload: toDoListUpdated,
  };
};

export const EditTaskAction = (toDoList, task) => {
  const taskIndex = toDoList.findIndex((taskItem) => task.id === taskItem.id);
  const toDoListUpdated = [...toDoList];
  toDoListUpdated[taskIndex] = task;

  return {
    type: EDIT_TASK,
    payload: toDoListUpdated,
  };
};

export const DoneTaskAction = (toDoList, task) => {
  const taskIndex = toDoList.findIndex((taskItem) => task.id === taskItem.id);
  const toDoListUpdated = [...toDoList];
  toDoListUpdated[taskIndex] = { ...task, isDone: !task.isDone };
  return {
    type: DONE_TASK,
    payload: toDoListUpdated,
  };
};

export const FilterTaskAction = (filter) => {
  return {
    type: FILTER_TASK,
    payload: filter,
  };
};
