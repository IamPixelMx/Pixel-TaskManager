import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Layout, TaskItem } from "components";
import { useActions } from "store";
import { getDependecyTasks, getGroupTasks } from "utils";

const GroupExpandedView = ({
  tasks,
  currentTaskGroup,
  linkText = "all groups",
}) => {
  const { showAllGroups } = useActions();
  const [currentTasks, setCurrentTasks] = useState([]);

  const checkIfTaskIsLocked = (dependencyTasks) =>
    dependencyTasks.some(({ completedAt }) => completedAt === null);
  
  useEffect(() => {

    const currentGroupTasks = getGroupTasks(currentTaskGroup, tasks);

    const currentGroupTasksWithStatus = () =>
      currentGroupTasks.map((task) => {
        const dependencyTasks = getDependecyTasks(task, tasks);
        return dependencyTasks === null
          ? { ...task, isLocked: false }
          : { ...task, isLocked: checkIfTaskIsLocked(dependencyTasks) };
      });

    setCurrentTasks(currentGroupTasksWithStatus);
  }, [tasks, currentTaskGroup]);

  return (
    <Layout>
      <div className="header">
        <h1 className="text-capitalize">{currentTaskGroup}</h1>
        <button className="btn-link text-uppercase" onClick={showAllGroups}>
          {linkText}
        </button>
      </div>
      <ul className="todo-list">
        {currentTasks.length &&
          currentTasks.map((task) => <TaskItem key={task.id} {...task} />)}
      </ul>
    </Layout>
  );
};

export default GroupExpandedView;

GroupExpandedView.displayName = "GroupExpandedView";

GroupExpandedView.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentTaskGroup: PropTypes.string.isRequired,
  linkText: PropTypes.string,
};
