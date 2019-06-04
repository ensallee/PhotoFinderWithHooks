import React from "react";

const PhotoListItem = props => {
  return (
    <div className="imageContainer">
      <img className="image" src={props.url} />
      <img className="heart" src="https://icon.now.sh/heart/d3d3d3" />
    </div>
  );
};

export default PhotoListItem;
