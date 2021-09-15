import React, { useEffect, useState } from "react";
import { TasksTypes } from "types";
import { useStore } from "store";
import { initialRoutes } from "router";
import { TaskItem, Link } from "components";
import { getParentTasks, getGroupTasks } from "utils";

type Props = {
  taskGroup: string;
  linkText?: string;
};

const GroupExpandedView = ({
  taskGroup,
  linkText = "all groups",
}: Props) => {
  const { state: { tasks } } = useStore();
  const [currentTasks, setCurrentTasks] = useState<Array<TasksTypes & { isLocked: boolean }>>([]);

  const checkParentTasksStatus = (parentTasks: Array<TasksTypes>) =>
    parentTasks.some(({ completedAt }) => completedAt === null);

  useEffect(() => {
    const currentGroupTasks = getGroupTasks(taskGroup, tasks);

    const currentGroupTasksWithStatus = () =>
      currentGroupTasks.map((task: TasksTypes) => {
        const parentTasks = getParentTasks(task, tasks);
        return parentTasks === null
          ? { ...task, isLocked: false }
          : { ...task, isLocked: checkParentTasksStatus(parentTasks) };
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
        {currentTasks.map(props => <TaskItem key={props.id} {...props} />)}
      </ul>
    </React.Fragment>
  );
};

export default GroupExpandedView;

GroupExpandedView.displayName = "GroupExpandedView";
