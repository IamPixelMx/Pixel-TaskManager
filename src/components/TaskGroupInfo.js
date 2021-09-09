import React from "react";
import PropTypes from "prop-types";
import { useActions } from "store";

const TaskGroupInfo = ({ groupName, tasksCompleted, totalTasks }) => {
  const { showTaskGroup } = useActions();

  return (
    <div className="taskgroup-box">
      <div
        className="taskgroup-content"
        onClick={() => showTaskGroup(groupName)}>
        <i className="taskgroup-icon" />
        <div className="taskgroup-info">
          <p className="text-capitalize bullet-text">{groupName}</p>
          <p className="text-light text-uppercase">
            {`${tasksCompleted} of ${totalTasks} tasks complete`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskGroupInfo;

TaskGroupInfo.displayName = "TaskGroupInfo";

TaskGroupInfo.propTypes = {
  groupName: PropTypes.string.isRequired,
  tasksCompleted: PropTypes.number.isRequired,
  totalTasks: PropTypes.number.isRequired,
};
