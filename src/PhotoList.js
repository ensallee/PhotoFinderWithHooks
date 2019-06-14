import React from "react";
import PhotoListItem from "./PhotoListItem";

export default function PhotoList(props) {
  if (props.photos === []) {
    return <div>Loading...</div>;
  }

  const photoItems =
    props.photos &&
    props.photos.map(pic => {
      return <PhotoListItem key={pic.id} url={pic.urls.small} id={pic.id} />;
    });

  return <div className="photoList">{photoItems}</div>;
}
