import React, { createContext, useReducer } from "react";
import { StoreTypes } from "types";
import initialState from "./initialState";
import reducer from "./reducer";

const AppContext = createContext<StoreTypes>({ state: initialState, dispatch: () => null });

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };

export default AppProvider;
