const getTaskGroupProgress = (taskGroupArr: Array<any>) => {
  const tasksCompletedArr = taskGroupArr.filter(
    ({ completedAt } : {completedAt : number | null}) => completedAt
  );

  return {
    tasksCompleted: tasksCompletedArr.length,
    totalTasks: taskGroupArr.length,
  };
};

export default getTaskGroupProgress;
