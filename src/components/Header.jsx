import React from "react";
import { FramedText } from "../components";
import { TbPokeball } from "react-icons/tb";
import { useAppState } from "../StateContext";

export const Header = ({ title = null }) => {
  const { state } = useAppState();

  return (
    <div
      className="df aic"
      style={{
        justifyContent: "space-between",
      }}
    >
      <h1>{title || `Hello ${state.user.name}`}</h1>

      <div
        className="df aic"
        style={{
          gap: "0 10px",
        }}
      >
        <FramedText
          bgColor={"var(--darkgrey)"}
          color={"var(--whitesmoke)"}
          text={`${state.user.balance}$`}
        />
        <FramedText
          bgColor={"var(--darkgrey)"}
          color={"red"}
          text={`${state.user.collection.length}`}
          icon={<TbPokeball />}
        />
      </div>
    </div>
  );
};
