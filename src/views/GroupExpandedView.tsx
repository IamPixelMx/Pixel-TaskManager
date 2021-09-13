import React, { useEffect, useState } from "react";
import { TasksTypes } from "types";
import { initialRoutes } from "router";
import { TaskItem, Link } from "components";
import { getDependecyTasks, getGroupTasks } from "utils";

type Props = {
  tasks: Array<TasksTypes>;
  taskGroup: string;
  linkText?: string;
};

const GroupExpandedView = React.memo(({
  tasks,
  taskGroup,
  linkText = "all groups",
}: Props) => {
  const [currentTasks, setCurrentTasks] = useState<Array<TasksTypes & { isLocked: boolean }>>([]);

  const checkIfTaskIsLocked = (dependencyTasks: Array<TasksTypes>) =>
    dependencyTasks.some(({ completedAt }) => completedAt === null);

  useEffect(() => {

    const currentGroupTasks = getGroupTasks(taskGroup, tasks);

    const currentGroupTasksWithStatus = () =>
      currentGroupTasks.map((task: TasksTypes) => {
        const dependencyTasks = getDependecyTasks(task, tasks);
        return dependencyTasks === null
          ? { ...task, isLocked: false }
          : { ...task, isLocked: checkIfTaskIsLocked(dependencyTasks) };
      });

    setCurrentTasks(currentGroupTasksWithStatus);
  }, [tasks, taskGroup]);

  return (
    <React.Fragment>
      <div className="header">
        <h1 className="text-capitalize">{taskGroup}</h1>
        <Link to={initialRoutes.home.path} className="btn-link text-uppercase">
          {linkText}
        </Link>
      </div>
      <ul className="todo-list">
        {currentTasks.length &&
          currentTasks.map(props => <TaskItem key={props.id} {...props} />)}
      </ul>
    </React.Fragment>
  );
});

export default GroupExpandedView;

GroupExpandedView.displayName = "GroupExpandedView";
