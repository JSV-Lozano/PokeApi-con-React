import React from "react";
const initialState = {
  fav: [],
};
const useHook = () => {
  const [state, setState] = React.useState(initialState);

  const addFavorite = (payload) => {
    if (state.fav.includes(payload)) {
      setState({
        ...state,
        fav: state.fav.filter((id) => id),
      });
    } else {
      setState({
        ...state,
        fav: [...state.fav, payload],
      });
    }
    // setState({
    //   ...state,
    //   fav: [...state.fav, payload],
    // });
  };

  return {
    state,
    addFavorite,
  };
};
export { useHook };
