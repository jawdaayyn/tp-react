import React from "react";
import { useAppState } from "../../StateContext";
import toast from "react-hot-toast";
import { FramedText } from "../../components";
import { Header } from "../../components/Header";

export default function Store() {
  const { state, dispatch } = useAppState();
  const rarities = ["common", "rare", "epic", "legendary"];

  return (
    <div
      className="df col"
      style={{
        padding: "25px 50px",
      }}
    >
      <Header />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr ",
        }}
      >
        {rarities.map((e, i) => (
          <div
            className="df col aic"
            style={{
              width: "300px",
              height: "200px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              margin: "40px",
            }}
          >
            <h1>{e.toUpperCase().charAt(0) + e.slice(1) + " Pack"}</h1>
            <button
              onClick={() => {
                const price = Math.round((i + 10) * Math.pow(10, i + 1));
                if (state.user.balance > price) {
                  dispatch({
                    selection: "user",
                    action: {
                      ...state.user,
                      balance: state.user.balance - price,
                      packs: {
                        ...state.user.packs,
                        [e]: state.user.packs[e] + 1,
                      },
                    },
                  });
                  toast(`Succesfully bought this pack !`, {
                    icon: "💸",
                    style: {
                      borderRadius: "10px",
                      background: "#333",
                      color: "#fff",
                    },
                  });
                } else {
                  toast(`You can't afford for this pack !`, {
                    icon: "❌",
                    style: {
                      borderRadius: "10px",
                      background: "#333",
                      color: "#fff",
                    },
                  });

                  return;
                }
              }}
            >{`Buy for ${Math.round((i + 10) * Math.pow(10, i + 1))}$`}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
