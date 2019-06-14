export default function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      const isInFavorites = state.favorites.find(
        favorite => favorite.id === action.payload.id
      );

      let newFavorites = [];
      if (isInFavorites) {
        const removedFavoriteIndex = state.favorites.findIndex(
          favorite => favorite.id === action.payload.id
        );
        newFavorites = [
          ...state.favorites.slice(0, removedFavoriteIndex),
          ...state.favorites.slice(removedFavoriteIndex + 1)
        ];
      } else {
        const addedFavorite = {
          id: action.payload.id,
          url: action.payload.url
        };
        newFavorites = [...state.favorites, addedFavorite];
      }
      return {
        ...state,
        favorites: newFavorites
      };
    default:
      return state;
  }
}
