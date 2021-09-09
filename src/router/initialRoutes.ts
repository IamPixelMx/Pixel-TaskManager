export type RoutesType = { [route: string]: { path: string } };

export type RoutesListType = {
  [key: string]: RoutesType;
}

export const initialRoutes: RoutesType = {
  home: {
    path: '/',
  },
};