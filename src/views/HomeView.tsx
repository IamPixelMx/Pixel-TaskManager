import React, { useState, useEffect } from "react";
import { TasksTypes, TaskGroupTypes } from "types";
import { TaskGroupInfo } from "components";
import { getGroupProgress, getGroupsList, getGroupTasks } from "utils";

type Props = {
  tasks: Array<TasksTypes>;
  title?: string;
};

const HomeView = ({ tasks, title = "things to do" }: Props) => {
  const [groupsInfo, setGroupsInfo] = useState<Array<TaskGroupTypes>>([]);

  useEffect(() => {
    const getGroupsInfoArr = () => {
      const groupList = getGroupsList(tasks);
      return groupList.map((group: string) => {
        const groupTasksArr = getGroupTasks(group, tasks);
        const groupProgress = getGroupProgress(groupTasksArr);
        return {
          groupName: group,
          toPath: `/${group.toLowerCase().replace(" ", "-")}`,
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
      {groupsInfo.map(props => <TaskGroupInfo key={props.groupName} {...props} />)}
    </React.Fragment>
  );
};

export default HomeView;

HomeView.displayName = "HomeView";