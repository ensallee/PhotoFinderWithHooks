import React from "react";

const PhotoListItem = props => {
  return (
    <div className="photoListItem">
      <div className="media">
        <img src={props.url} />
      </div>
    </div>
  );
};

export default PhotoListItem;
