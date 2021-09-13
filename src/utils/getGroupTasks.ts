import { TasksTypes } from "types";

const getGroupTasks = (group: string, tasksArr: Array<TasksTypes>) =>
  tasksArr.filter((task) => task.group === group);

export default getGroupTasks;
