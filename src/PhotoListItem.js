import React, { useContext } from "react";
import FavoritesContext from "./context";

const PhotoListItem = props => {
  const { state, dispatch } = useContext(FavoritesContext);
  return (
    <div className="imageContainer">
      <img className="image" src={props.url} />
      <img className="heart" src="https://icon.now.sh/heart/d3d3d3" />
    </div>
  );
};

export default PhotoListItem;
