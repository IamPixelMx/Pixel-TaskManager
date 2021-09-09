import {
  FETCH_TASKS_START,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAIL,
  SHOW_ALL_GROUPS,
  SHOW_TASK_GROUP,
  TOGGLE_TASK,
} from "./constants";

const reducer = (state, { type, payload = {} }) => {
  switch (type) {
    case FETCH_TASKS_START:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        tasks: payload,
        loading: false,
        error: false,
        errorMsg: "",
      };

    case FETCH_TASKS_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: payload.message || "Sorry, there was an error",
      };

    case SHOW_ALL_GROUPS:
      return {
        ...state,
        currentTaskGroup: "",
      };

    case SHOW_TASK_GROUP:
      return { ...state, currentTaskGroup: payload };

    case TOGGLE_TASK:
      return {
        ...state,
        tasks: getNewTaskArray(state.tasks, payload),
      };

    default:
      throw new Error();
  }
};

const getNewTaskArray = (tasks, { id, completedAt }) => {
  const newTaskArray = tasks.map((task) =>
    task.id === id ? { ...task, completedAt } : task
  );
  return newTaskArray;
};

export default reducer;
