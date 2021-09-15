import { StateTypes, DispatchType, TasksTypes } from "types";
import {
  FETCH_TASKS_START,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAIL,
  TOGGLE_TASK,
  ADD_TASK,
} from "./constants";

const reducer = (state: StateTypes, { type, payload = {} }: DispatchType) => {
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

    case TOGGLE_TASK:
      return {
        ...state,
        tasks: getNewTaskArray(state.tasks, payload),
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          payload,
      ],
      };

    default:
      throw new Error();
  }
};

const getChildTasks = (tasks: Array<TasksTypes>, id: number) => tasks.filter(({ dependencyIds }) => dependencyIds.includes(id));

const getNewTaskArray = (tasks: Array<TasksTypes>, { id, completedAt }: { id: number, completedAt: number | null }) => {
  const childTasksArr = getChildTasks(tasks, id);
  const childTaskIds = childTasksArr.length === 0 ? null : childTasksArr.map(({ id }) => id);
  const newTaskArray = tasks.map((task) =>
    task.id === id ? { ...task, completedAt } : completedAt === null && childTaskIds && childTaskIds.includes(task.id) ? { ...task, completedAt } : task
  );
  return newTaskArray;
};

export default reducer;
