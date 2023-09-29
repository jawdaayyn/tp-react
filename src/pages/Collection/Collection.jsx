import React from "react";
import { useAppState } from "../../StateContext";
import { legendaries } from "../../services/pokemon";
import toast from "react-hot-toast";
import { Header } from "../../components/Header";
export default function Collection() {
  const { state, dispatch } = useAppState();

  return (
    <div
      className="df col"
      style={{
        padding: "25px 50px",
      }}
    >
      <Header title={"Collection"} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
        }}
      >
        {state.cache.pokemons
          .filter((e) => state.user.collection.includes(e.id))
          .map((pokemon) => {
            const price = legendaries.includes(pokemon.name)
              ? Math.floor(Math.random() * 100000)
              : Math.floor(Math.random() * 1000);
            return (
              <div
                className={pokemon.types[0].type.name}
                key={pokemon.id}
                style={{
                  border: legendaries.includes(pokemon.name)
                    ? "3px solid gold"
                    : pokemon.types[0].type.name === "normal" &&
                      "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "16px",
                  margin: "16px",
                  maxWidth: "200px",
                  textAlign: "center",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width="96"
                  height="96"
                />
                <h2>{pokemon.name}</h2>
                <p
                  style={{
                    fontWeight: 500,
                  }}
                >
                  Type: {pokemon.types.map((type) => type.type.name).join(", ")}
                </p>
                <button
                  onClick={() => {
                    dispatch({
                      selection: "user",
                      action: {
                        ...state.user,
                        balance: state.user.balance + price,
                        collection: state.user.collection.filter(
                          (e) => e !== pokemon.id
                        ),
                      },
                    });
                    toast(`Sold ${pokemon.name} for ${price}$ !`, {
                      icon: "👏",
                      style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                      },
                    });
                  }}
                >{`Sell for $${price}`}</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
