import UUID from "uuid";

export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      const newFavorite = {
        id: action.payload.id,
        url: action.payload.url
      };

      const addedFavorites = [...state.favorites, newFavorite];

      return {
        ...state,
        favorites: addedFavorites
      };
    default:
      return state;
  }
}
