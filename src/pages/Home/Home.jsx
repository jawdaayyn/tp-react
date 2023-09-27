import React from "react";
import { useAppState } from "../../StateContext";

export default function Home() {
  const { state, dispatch } = useAppState();
  return (
    <div className="df main">
      <div
        className="df main aic col"
        style={{
          padding: "0px 20px",
        }}
      >
        <h1>{`Hello ${state.user.name}`}</h1>
        <span>{`You currently have ${state.user.balance}$`}</span>
      </div>
    </div>
  );
}
