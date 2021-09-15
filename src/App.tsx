import React, { useState, useEffect, useCallback } from "react";
import { RouterProvider, initialRoutes, Route } from 'router';
import { RouteType, TasksTypes } from "types";
import { useActions } from "store";
import { HomeView, GroupExpandedView } from "views";
import { Layout } from "components";
import { getGroupsList } from "utils";
import "styles/App.min.css";

const App = () => {
  const { fetchTasksStart, fetchTasksSuccess, fetchTasksFail } = useActions();
  const [routes, setRoutes] = useState(initialRoutes);

  const setRoutesList = (tasksArr: Array<TasksTypes>) => {
    const groupsRoutes: RouteType = {};
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
            {page === "home" ? <HomeView /> : <GroupExpandedView taskGroup={page} />}
          </Route>
        ))}
      </Layout>
    </RouterProvider >
  );
};

export default App;
