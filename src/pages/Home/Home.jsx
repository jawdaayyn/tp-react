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

        <button
          className="df aic jcc"
          style={{
            marginTop: "10px",
            width: "20px",
            height: "20px",
          }}
          onClick={() =>
            dispatch({
              selection: "user",
              action: {
                ...state.user,
                balance: state.user.balance + 1,
              },
            })
          }
        >
          +
        </button>
      </div>
    </div>
  );
}
