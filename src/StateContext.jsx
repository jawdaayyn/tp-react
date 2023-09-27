import { createContext, useContext, useReducer, useState } from "react";

export const StateContext = createContext();

function reducer(state, action) {}
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});

  const value = {
    state,
    dispatch,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useAppState must be used within a StateProvider");
  }
  return context;
};
