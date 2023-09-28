import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

export const StateContext = createContext();
/* USAGE EXAMPLE
 dispatch({
              selection: "user",
              action: {
                ...state.user,
                balance: state.user.balance + 1,
              },
            })

*/
function reducer(state, action) {
  return {
    ...state,
    [action.selection]: action.action,
  };
}
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    user: {
      name: "Jawdan",
      balance: 100,
      collection: [],
      favorites: [],
      packs: {
        legendary: 2,
        rare: 1,
        epic: 1,
        common: 0,
      },
    },
    cache: {
      pokemons: [],
    },
  });

  const value = {
    state,
    dispatch,
  };

  async function getPokemons() {
    try {
      dispatch({
        selection: "loading",
        action: true,
      });
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const pokemons = await Promise.all(
        data.results.map(async (pokemon) => {
          const { data } = await axios.get(pokemon.url);
          return data;
        })
      );

      dispatch({
        selection: "cache",
        action: {
          pokemons,
        },
      });

      dispatch({
        selection: "loading",
        action: false,
      });
    } catch (err) {
      dispatch({
        selection: "loading",
        action: false,
      });
      console.log(err);
    }
  }
  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useAppState must be used within a StateProvider");
  }
  return context;
};
