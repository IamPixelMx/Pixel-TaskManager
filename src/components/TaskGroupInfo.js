import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "router";
import { Link } from "components";

const TaskGroupInfo = ({ groupName, tasksCompleted, totalTasks }) => {
  const router = useRouter();
  const page = router[groupName]

  return (
    <div className="taskgroup-box">
      <Link to={page.path}>
        <div
          className="taskgroup-content"
        >
          <i className="taskgroup-icon" />
          <div className="taskgroup-info">
            <p className="text-capitalize bullet-text">{groupName}</p>
            <p className="text-light text-uppercase">
              {`${tasksCompleted} of ${totalTasks} tasks complete`}
            </p>
          </div>
        </div>
      </Link>
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
