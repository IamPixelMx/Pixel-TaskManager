import { useContext } from "react";
import { AppContext } from "store";

import {
  FETCH_TASKS_START,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAIL,
  TOGGLE_TASK,
} from "./constants";

const useStore = () => useContext(AppContext);

const useActions = () => {
  const { dispatch } = useStore();
  return {
    fetchTasksStart: () =>
      dispatch({
        type: FETCH_TASKS_START,
      }),

    fetchTasksSuccess: (payload) =>
      dispatch({
        type: FETCH_TASKS_SUCCESS,
        payload,
      }),

    fetchTasksFail: (payload) =>
      dispatch({
        type: FETCH_TASKS_FAIL,
        payload,
      }),

    toggleTask: (payload) => dispatch({ type: TOGGLE_TASK, payload }),
  };
};

export { useStore, useActions };
