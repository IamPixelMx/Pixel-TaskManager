import React, { useEffect, useCallback } from "react";
import { HomeView, GroupExpandedView, LoadingView, ErrorView } from "views";
import { useStore, useActions } from "store";
import "styles/App.min.css";

const App = () => {
  const { fetchTasksStart, fetchTasksSuccess, fetchTasksFail } = useActions();
  const {
    state: { tasks, currentTaskGroup, loading, error, errorMsg },
  } = useStore();

  const fetchData = useCallback(() => {
    fetchTasksStart();
    fetch("data.json")
      .then(res => res.json())
      .then(fetchTasksSuccess)
      .catch(fetchTasksFail);
  }, // eslint-disable-next-line
  []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <LoadingView />;

  if (error) return <ErrorView errorMsg={errorMsg} />;

  if (currentTaskGroup)
    return (
      <GroupExpandedView tasks={tasks} currentTaskGroup={currentTaskGroup} />
    );

  return <HomeView tasks={tasks} />;
};

export default App;
