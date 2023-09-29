import React, { useMemo } from "react";
import { useAppState } from "../../StateContext";
import { FramedText, PackOpening } from "../../components";
import { legendaries } from "../../services/pokemon";
import { TbPokeball } from "react-icons/tb";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import toast from "react-hot-toast";
import { Header } from "../../components/Header";
export default function Home() {
  const { state, dispatch } = useAppState();

  const renderPackOpening = (rarity) => {
    if (state.user.packs[rarity]) {
      return (
        <PackOpening
          rarity={rarity}
          data={state.cache.pokemons.filter(
            (e) => !legendaries.includes(e.name)
          )}
          onOpened={(cards) => {
            const moneyEarnt = Math.floor(Math.random() * 1000);

            const data = {
              ...state.user,
              packs: {
                ...state.user.packs,
                [rarity]: state.user.packs[rarity] - 1,
              },
              collection: [...state.user.collection, ...cards.map((e) => e.id)],
              balance: moneyEarnt + state.user.balance,
            };
            dispatch({
              selection: "user",
              action: data,
            });

            toast(`You earned ${moneyEarnt}$ !`, {
              icon: "👏",
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
            });
          }}
        />
      );
    }
    return null;
  };
  const rarities = ["legendary", "epic", "rare", "common"];

  return (
    <div
      style={{
        padding: "25px 50px",
      }}
    >
      <Header />
      {!state.loading && state.cache.pokemons.length ? (
        <div
          className="df col"
          style={{
            padding: "16px 32px",
          }}
        >
          <h2>
            {Object.values(state.user.packs).some((a) => a > 0)
              ? `${Object.values(state.user.packs).reduce(
                  (acc, curr) => acc + curr,
                  0
                )}  pack(s) waiting for you !`
              : "No packs left"}
          </h2>
          <div
            className="df aic"
            style={{
              marginTop: "20px",
            }}
          >
            {rarities.map((rarity) => renderPackOpening(rarity))}
          </div>
        </div>
      ) : state.loading ? (
        <div
          className="df col"
          style={{
            padding: "16px 32px",
          }}
        >
          <h2>Loading...</h2>
          <div className="df aic">
            {rarities.map((rarity) => (
              <Skeleton
                height={300}
                width={200}
                style={{
                  marginRight: "20px",
                }}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
