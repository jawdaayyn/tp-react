import { useState, useEffect } from "react";
import "./modules.css";
import { getPackTheme } from "../services/utils";
export const FramedText = ({ text, icon, color, bgColor }) => {
  return (
    <div
      className="df aic"
      style={{
        color,
        backgroundColor: bgColor,
        padding: "1rem",
        borderRadius: "10px",
      }}
    >
      <span
        style={{
          marginRight: "1rem",
        }}
      >
        {text}
      </span>
      {icon}
    </div>
  );
};

export const PackOpening = ({ data, rarity = "common", onOpened }) => {
  const [opened, setOpened] = useState(false);

  const [cards, setCards] = useState(
    data.sort((a, b) => 0.5 - Math.random()).slice(0, 10)
  );
  const [index, setIndex] = useState(0);
  const theme = getPackTheme(rarity);

  useEffect(() => {
    if (index === cards.length) {
      onOpened(cards);
      setCards(data.sort((a, b) => 0.5 - Math.random()).slice(0, 10));
      setOpened(false);
      setIndex(0);
    }
  }, [index]);
  return (
    <div
      style={{
        width: "200px",
        height: "300px",
        borderRadius: "8px",
        marginRight: "20px",
      }}
    >
      {!opened && (
        <div
          className="df aic col jcc"
          style={{
            width: "100%",
            height: "100%",
            background: theme.background,
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
          }}
        >
          <span
            style={{
              color: theme.textColor,
              fontSize: "24px",
              marginTop: "20px",
            }}
          >
            {rarity.toUpperCase().charAt(0) + rarity.slice(1) + " Pack"}
          </span>
          <button
            onClick={() => {
              setOpened(true);
            }}
            style={{
              marginTop: "auto",
              marginBottom: "20px",
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              color: "var(--whitesmoke)",
              background: "var(--darkblue)",
              cursor: "pointer",
            }}
          >
            Open
          </button>
        </div>
      )}
      {opened && cards.length > index ? (
        <div
          className="df aic col main"
          style={{
            width: "100%",
            height: "100%",
            background: theme.background,
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => setIndex((prev) => prev + 1)}
        >
          <h1>{cards[index].name}</h1>

          <img
            src={cards[index].sprites.front_default}
            alt={cards[index].name}
            style={{
              marginTop: "20px",
            }}
          />

          <h1
            style={{
              color: "var(--whitesmoke)",
            }}
          >
            CLICK
          </h1>
        </div>
      ) : null}
    </div>
  );
};
