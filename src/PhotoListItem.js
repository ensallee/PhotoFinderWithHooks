import React, { useContext } from "react";
import FavoritesContext from "./context";

const PhotoListItem = props => {
  const {
    state: { favorites = [] },
    dispatch
  } = useContext(FavoritesContext);

  const { url, id } = props;

  const imageObj = {
    url,
    id
  };

  const isFavorite = favorites.find(favorite => favorite.id === id);

  return (
    <div className="imageContainer">
      <img className="image" src={url} alt={url} />
      <img
        className="heart"
        onClick={() => dispatch({ type: "TOGGLE_FAVORITE", payload: imageObj })}
        src={
          isFavorite
            ? "https://icon.now.sh/heart/ff0000"
            : "https://icon.now.sh/heart/d3d3d3"
        }
        alt="heart"
      />
    </div>
  );
};

export default PhotoListItem;
