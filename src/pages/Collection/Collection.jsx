import React from "react";
import { useAppState } from "../../StateContext";
import { legendaries } from "../../services/pokemon";

export default function Collection() {
  const { state } = useAppState();

  return (
    <div
      className="df col"
      style={{
        padding: "25px 50px",
      }}
    >
      <h1>Pokedex</h1>
      <div
        className="pokemon-list"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
        }}
      >
        {state.cache.pokemons
          .filter((e) => state.user.collection.includes(e.id))
          .map((pokemon) => (
            <div
              className={pokemon.types[0].type.name}
              key={pokemon.id}
              style={{
                border: legendaries.includes(pokemon.name)
                  ? "3px solid gold"
                  : pokemon.types[0].type.name === "normal" && "1px solid #ccc",
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
            </div>
          ))}
      </div>
    </div>
  );
}
