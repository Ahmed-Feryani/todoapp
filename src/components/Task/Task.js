import React from "react";
import "./style.scss";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DangerousIcon from "@mui/icons-material/Dangerous";
import { useDispatch } from "react-redux";
import { DelTaskAction, DoneTaskAction } from "../../redux/actions/toDoActions";
import { toggleModalAction } from "../../redux/actions/modalActions";
import cx from "classnames";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

const Task = ({ task, list }) => {
  const { id, description, isDone } = task;
  const dispatch = useDispatch();
  const delTaskHandler = (list, id) => {
    dispatch(DelTaskAction(list, id));
  };

  const openModalHandler = (task) => {
    dispatch(toggleModalAction(true, task));
  };
  const toggleDoneHandler = () => {
    dispatch(DoneTaskAction(list, task));
  };
  return (
    <div className="task">
      <div className="task__subject">
        <div className="task__priority"></div>
        <p className={cx("task__para", { "task__para--done": isDone })}>
          {" "}
          {description}{" "}
        </p>
      </div>
      <div className="task__actions">
        <Tooltip title={isDone ? "UnDone" : "Done"}>
          <IconButton onClick={toggleDoneHandler}>
            {isDone ? <CheckCircleIcon /> : <DangerousIcon />}
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit">
          <IconButton onClick={() => openModalHandler(task)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton onClick={() => delTaskHandler(list, id)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default Task;
