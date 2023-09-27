import React from "react";
import { useAppState } from "../../StateContext";
import { FramedText } from "../../components";

export default function Home() {
  const { state, dispatch } = useAppState();
  return (
    <div className="main">
      <div
        className="df aic"
        style={{
          justifyContent: "space-between",
        }}
      >
        <h1>{`Hello ${state.user.name}`}</h1>

        <FramedText
          bgColor={"pink"}
          color={"red"}
          text={`${state.user.balance}$`}
        />
      </div>
    </div>
  );
}
