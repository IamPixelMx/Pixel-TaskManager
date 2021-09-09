import React, { useContext, useLayoutEffect, useState, createContext } from 'react';
import { createBrowserHistory, Location, State } from 'history';
import { NotFoundView } from "views";
import { locationToRoute } from "utils";
import { RoutesType } from './initialRoutes';

const history = createBrowserHistory();

const RouterContext = createContext({
  route: locationToRoute(history),
});

const useRouter = () => useContext(RouterContext);

const RouterProvider = ({ routeList, children }: {
  routeList: RoutesType;
  children: React.ReactNode;
}) => {
  const [route, setRoute] = useState(locationToRoute(history));

  const handleRouteChange = (location: { location: Location<State> }) => {
    const route = locationToRoute(location);
    setRoute(route);
  };
  const is404 = Object.keys(routeList).map((key) => routeList[key].path).includes(route.path);  

  useLayoutEffect(() => {
    // Subscribe to listener
    const unlisten = history.listen(handleRouteChange);
    return () => {
      // Unsuscribe
      unlisten();
    };
  }, []);

  return (
    <RouterContext.Provider value={{ route, ...routeList }}>
      {is404 ? <NotFoundView /> : children}
    </RouterContext.Provider>
  );
};

export { history, RouterContext, useRouter };

export default RouterProvider;
