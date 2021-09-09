import React, { useState, useEffect, useCallback } from "react";
import { RouterProvider, initialRoutes, Route } from 'router';
import { useStore, useActions } from "store";
import { HomeView, GroupExpandedView } from "views";
import { Layout } from "components";
import { getGroupsList } from "utils";
import "styles/App.min.css";
import { group } from "console";

const App = () => {
  const { fetchTasksStart, fetchTasksSuccess, fetchTasksFail } = useActions();
  const {
    state: { tasks, currentTaskGroup },
  } = useStore();

  const [routes, setRoutes] = useState(initialRoutes);

  const setRoutesList = (tasksArr: Array<Object>) => {
    const groupsRoutes: { [k: string]: { path: string } } = {};
    const groupsList = getGroupsList(tasksArr);
    groupsList.forEach((group: string) => { groupsRoutes[group] = { path: `/${group.toLowerCase().replace(" ", "-")}` } })
    const finalRoutesList = { ...initialRoutes, ...groupsRoutes };
    setRoutes(finalRoutesList);
  }

  const fetchData = useCallback(() => {
    fetchTasksStart();
    fetch("data.json")
      .then(res => res.json())
      .then(tasks => { fetchTasksSuccess(tasks); setRoutesList(tasks) })
      .catch(fetchTasksFail);
  }, // eslint-disable-next-line
    []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <RouterProvider routeList={routes}>
      <Layout>
        {Object.keys(routes).map(page => (
          <Route key={page} path={routes[page].path}>
            {page === "home" ? <HomeView tasks={tasks} /> : <GroupExpandedView tasks={tasks} currentTaskGroup={page} />}
          </Route>
        ))}
      </Layout>
    </RouterProvider >
  );
};

export default App;
