import React from "react";

const PhotoListItem = props => {
  return (
    <div className="imageContainer">
      <img className="image" src={props.url} />
    </div>
  );
};

export default PhotoListItem;
