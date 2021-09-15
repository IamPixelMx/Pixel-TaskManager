import React from "react";
import { TaskGroupTypes } from "types";
import { Link } from "components";

const TaskGroupInfo = React.memo(({ groupName, tasksCompleted, totalTasks, toPath }: TaskGroupTypes & { toPath: string }) => (
  <div className="taskgroup-box">
    <Link to={toPath}>
      <div
        className="taskgroup-content"
      >
        <i className="taskgroup-icon" />
        <div className="taskgroup-info">
          <p className="text-capitalize bullet-text">{groupName}</p>
          <p className="text-light text-uppercase">
            {`${tasksCompleted} of ${totalTasks} tasks completed`}
          </p>
        </div>
      </div>
    </Link>
  </div>))


export default TaskGroupInfo;

TaskGroupInfo.displayName = "TaskGroupInfo";
