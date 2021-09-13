import React, { useContext } from 'react';
import { RouterContext } from './RouterContext';

type Props = {
  children: React.ReactNode;
  path?: string;
};

const Route = ({ path, children }: Props) => {
  // Extract route from RouterContext
  const { route } = useContext(RouterContext);

  // Return null if the supplied path doesn't match the current route path
  return route.path !== path ? null : <React.Fragment>{children}</React.Fragment>;
}

export default Route;

Route.displayName = "RouteComponent";
