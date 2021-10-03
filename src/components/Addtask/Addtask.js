import React from "react";
import "./style.scss";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import EntryText from "../EntryText/EntryText";
import Button from "@mui/material/Button";
import { toggleModalAction } from "../../redux/actions/modalActions";
import { useDispatch, useSelector } from "react-redux";
import { AddTaskAction, EditTaskAction } from "../../redux/actions/toDoActions";
import MyModal from "../MyModal/MyModal";
const INITIAL_STATE = {
  subject: "",
};

const FORM_VALIDATION = Yup.object().shape({
  subject: Yup.string().required("subject is required"),
});

const Addtask = () => {
  const { toDoList } = useSelector((state) => state.toDoReducer);
  const { task } = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(toggleModalAction(false));
  };
  const addTaskHandler = (values, resetForm) => {
    console.log(task);

    dispatch(
      AddTaskAction({
        id: Date.now(),
        description: values.subject,
        isDone: false,
      })
    );
    resetForm();
    closeModalHandler();
  };
  const editTaskHandler = (values, resetForm) => {
    console.log(values);
    dispatch(
      EditTaskAction(toDoList, { ...task, description: values.subject })
    );
    resetForm();
    closeModalHandler();
  };

  return (
    <MyModal>
      <div className="add-task">
        <Formik
          initialValues={
            task ? { subject: task.description } : { ...INITIAL_STATE }
          }
          validationSchema={FORM_VALIDATION}
          onSubmit={(values, { resetForm }) => {
            if (task) {
              editTaskHandler(values, resetForm);
            } else {
              addTaskHandler(values, resetForm);
            }
          }}
        >
          {({ isValid, dirty }) => {
            return (
              <Form className="add-task__form">
                <EntryText
                  name="subject"
                  label="Subject"
                  placeholder="Enter your subject"
                />

                <div className="add-task__action">
                  <Button
                    className="add-task__cancel"
                    variant="contained"
                    onClick={closeModalHandler}
                  >
                    cancel
                  </Button>
                  <Button
                    disabled={!(isValid && dirty)}
                    className="add-task__add"
                    variant="contained"
                    type="submit"
                  >
                    {task ? "EDIT" : "ADD"}
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </MyModal>
  );
};

export default Addtask;
