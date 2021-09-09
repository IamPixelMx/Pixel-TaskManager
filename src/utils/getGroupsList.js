const getGroupsList = (tasksArr) => {
  const groupsArr = tasksArr.map(({ group }) => group);
  const groupsSet = new Set(groupsArr);
  const groupList = Array.from(groupsSet);

  return groupList;
};

export default getGroupsList;
