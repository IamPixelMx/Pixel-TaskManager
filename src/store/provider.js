import React, { createContext, useReducer } from "react";
import initialState from "./initialState";
import reducer from "./reducer";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };

export default AppProvider;
