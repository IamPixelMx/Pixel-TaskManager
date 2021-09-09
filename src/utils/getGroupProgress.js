const getTaskGroupProgress = (taskGroupArr) => {
  const tasksCompletedArr = taskGroupArr.filter(
    ({ completedAt }) => completedAt
  );

  return {
    tasksCompleted: tasksCompletedArr.length,
    totalTasks: taskGroupArr.length,
  };
};

export default getTaskGroupProgress;
