import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalAction } from "../../redux/actions/modalActions";
import EmptyView from "../EmptyView/EmptyView";
import Filter from "../Filter/Filter";
import Task from "../Task/Task";
import "./style.scss";

const ListTask = () => {
  const dispatch = useDispatch();
  const { toDoList, filter } = useSelector((state) => state.toDoReducer);
  const openModalHandler = () => {
    dispatch(toggleModalAction(true));
  };
  const filterList = () =>
    toDoList.filter((task) =>
      filter === "done"
        ? task.isDone
        : filter === "undone"
        ? !task.isDone
        : true
    );
  const filteredList = filterList();
  const renderEmptyView = () => {
    if (!filteredList.length) {
      if (filter === "done") {
        return  <EmptyView label = 'No Done Tasks' />
      }
      if (filter === "undone") {
        return <EmptyView label = 'No UnDone Tasks' />;
      }
      if (filter === "all") {
        return <EmptyView label = 'No Tasks' />;
      }
    }
  };
  return (
    <div className="list-task container">
      <div className="list-task__action">
        <div className="list-task__filter">
          <Filter filter={filter} />
        </div>
        <Button
          className="list-task__btn"
          variant="contained"
          onClick={openModalHandler}
        >
          Add Task
        </Button>
      </div>

      <ul className="list-task__list">
        {!filteredList.length
          ? renderEmptyView()
          : filteredList.map((task) => (
              <li className="list-task__item">
                <Task task={task} list={toDoList}></Task>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default ListTask;
