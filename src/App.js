import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import PhotoList from "./PhotoList";
import "./App.css";

const API_KEY = "YOUR KEY HERE";

export default function App() {
  const [term, setTerm] = useState("coding");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos(term);
  }, [term]);

  const fetchPhotos = term => {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${term}&client_id=${API_KEY}`
    )
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        setPhotos(data.results);
      });
  };
  return (
    <div>
      <SearchBar
        changeSearchTermState={e =>
          e.target.value === "" ? setTerm("coding") : setTerm(e.target.value)
        }
        value={term}
      />
      <PhotoList photos={photos} />
    </div>
  );
}
