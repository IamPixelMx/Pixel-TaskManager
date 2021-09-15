import { useContext } from "react";
import { AppContext } from "store";
import { TasksTypes } from "types";

import {
  FETCH_TASKS_START,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAIL,
  TOGGLE_TASK,
  ADD_TASK,
} from "./constants";

const useStore = () => useContext(AppContext);

const useActions = () => {
  const { dispatch } = useStore();
  return {
    fetchTasksStart: () =>
      dispatch({
        type: FETCH_TASKS_START,
      }),

    fetchTasksSuccess: (payload: Array<TasksTypes>) =>
      dispatch({
        type: FETCH_TASKS_SUCCESS,
        payload,
      }),

    fetchTasksFail: (payload: Object) =>
      dispatch({
        type: FETCH_TASKS_FAIL,
        payload,
      }),

    toggleTask: (payload: { id: number, completedAt: number | null }) => dispatch({ type: TOGGLE_TASK, payload }),

    addTask: (payload: TasksTypes) => dispatch({ type: ADD_TASK, payload }),
  };
};

export { useStore, useActions };
