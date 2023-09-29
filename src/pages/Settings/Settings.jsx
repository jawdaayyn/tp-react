import React, { useState } from "react";
import { Header } from "../../components/Header";
import { useAppState } from "../../StateContext";
import toast from "react-hot-toast";
export default function Settings() {
  const { state, dispatch } = useAppState();

  const [validate, setValidate] = useState(false);
  const [name, setName] = useState("");

  return (
    <div
      className="df col"
      style={{
        padding: "25px 50px",
      }}
    >
      <Header title={"Settings"} />

      <div
        className="df col"
        style={{
          marginTop: "50px",
        }}
      >
        <div className="df aic">
          <span
            style={{
              width: "150px",
            }}
          >
            Change your name ?
          </span>
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
            placeholder={state.user.name}
            style={{
              padding: "5px 10px",
              background: "var(--darkgrey)",
              outline: "none",
              border: "2px solid var(--whitesmoke)",
              borderRadius: "6px",
              color: "var(--whitesmoke)",
            }}
          />
          {name.length ? (
            <span
              style={{
                marginLeft: "20px",
                cursor: "pointer",
                padding: "8px",
                borderRadius: "6px",
                border: "2px solid var(--whitesmoke)",
              }}
              onClick={() => {
                toast.success(`Your name is now ${name} !`);
                dispatch({
                  selection: "user",
                  action: {
                    ...state.user,
                    name,
                  },
                }),
                  setName("");
              }}
            >
              Validate
            </span>
          ) : null}
        </div>

        <div
          className="df aic"
          style={{
            marginTop: "20px",
          }}
        >
          <span
            style={{
              width: "150px",
            }}
          >
            Reset the game ?
          </span>
          <button
            onClick={() => {
              setValidate(true);
            }}
            style={{
              cursor: "pointer",
              background: "var(--darkgrey)",
              outline: "none",
              border: "2px solid var(--whitesmoke)",
              borderRadius: "6px",
              color: "var(--whitesmoke",
              padding: "8px 20px",
            }}
          >
            Réinitialiser
          </button>
        </div>
        {validate && (
          <div
            className="df aic"
            style={{
              marginTop: "20px",
            }}
          >
            <span
              style={{
                width: "150px",
              }}
            >
              Are you sure ?
            </span>
            <span
              style={{
                marginRight: "20px",
                cursor: "pointer",
                padding: "8px",
                borderRadius: "6px",
                border: "2px solid var(--whitesmoke)",
              }}
              onClick={() => {
                toast.success("Game reseted !");
                dispatch({
                  selection: "user",
                  action: {
                    ...state.user,
                    balance: 500,
                    collection: [],
                    favorites: [],
                    packs: {
                      legendary: 2,
                      rare: 1,
                      epic: 1,
                      common: 0,
                    },
                  },
                }),
                  localStorage.clear();
                setValidate(false);
              }}
            >
              Oui
            </span>
            <span
              style={{
                cursor: "pointer",
                padding: "8px",
                borderRadius: "6px",
                border: "2px solid var(--whitesmoke)",
              }}
              onClick={() => setValidate(false)}
            >
              Non
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
