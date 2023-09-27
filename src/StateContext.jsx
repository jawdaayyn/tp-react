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
    user: {
      name: "Jawdan",
      balance: 100,
      collection: [],
      favorites: [],
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
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=1292"
      );
    } catch (err) {
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
