import React from "react";
import PhotoListItem from "./PhotoListItem";
import UUID from "uuid";

export default function PhotoList(props) {
  if (props.photos === []) {
    return <div>Loading...</div>;
  }

  const photoItems =
    props.photos &&
    props.photos.map(pic => {
      return <PhotoListItem key={UUID()} url={pic.urls.small} />;
    });

  return <div className="photoList">{photoItems}</div>;
}
