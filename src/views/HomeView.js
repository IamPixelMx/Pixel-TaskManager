import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { TaskGroupInfo } from "components";
import { getGroupProgress, getGroupsList, getGroupTasks } from "utils";

const HomeView = ({ tasks, title = "things to do" }) => {
  const [groupsInfo, setGroupsInfo] = useState([]);

  useEffect(() => {
    const getGroupsInfoArr = () => {
      const groupList = getGroupsList(tasks);
      return groupList.map((group) => {
        const groupTasksArr = getGroupTasks(group, tasks);
        const groupProgress = getGroupProgress(groupTasksArr);
        return {
          groupName: group,
          ...groupProgress,
        };
      });
    };

    const groupsInfoArr = getGroupsInfoArr();
    setGroupsInfo(groupsInfoArr);
  }, [tasks]);

  return (
    <React.Fragment>
      <h1 className="text-capitalize">{title}</h1>
      {groupsInfo.length &&
        groupsInfo.map((props, i) => <TaskGroupInfo key={i} {...props} />)}
    </React.Fragment>
  );
};

export default HomeView;

HomeView.displayName = "HomeView";

HomeView.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
