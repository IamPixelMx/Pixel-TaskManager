import React, { useState, useEffect } from "react";
import { TaskGroupTypes } from "types";
import { useStore } from "store";
import { TaskGroupInfo } from "components";
import { getGroupProgress, getGroupsList, getGroupTasks } from "utils";

type Props = {
  title?: string;
};

const HomeView = ({ title = "things to do" }: Props) => {
  const { state: { tasks } } = useStore();
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
      {groupsInfo.map(props => <TaskGroupInfo key={`${props.groupName}-info-component`} {...props} />)}
    </React.Fragment>
  );
};

export default HomeView;

HomeView.displayName = "HomeView";