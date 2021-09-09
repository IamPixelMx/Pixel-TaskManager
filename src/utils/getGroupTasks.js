const getGroupTasks = (group, tasksArr) =>
  tasksArr.filter((task) => task.group === group);

export default getGroupTasks;
