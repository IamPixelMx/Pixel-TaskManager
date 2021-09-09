const getDependecyTasks = (task, tasksArr) => {
  const { dependencyIds } = task;
  if (dependencyIds.length === 0) {
    return null;
  } else {
    return tasksArr.filter(({ id }) => dependencyIds.includes(id));
  }
};

export default getDependecyTasks;
