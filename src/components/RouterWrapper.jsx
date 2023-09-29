import React from "react";
import { useAppState } from "../StateContext";

export const RouterWrapper = ({ children }) => {
  const { state } = useAppState();
  return (
    <div
      className={`main`}
      style={{
        marginLeft: state.close ? "80px" : "150px",
      }}
    >
      {children}
    </div>
  );
};
