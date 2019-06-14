import React, { useState, useEffect, useContext, useReducer } from "react";
import SearchBar from "./SearchBar";
import PhotoList from "./PhotoList";
import FavoritesContext from "./context";
import favoritesReducer from "./reducer";
import env from "./.env.js";
import "./App.css";

export default function App() {
  const initialState = useContext(FavoritesContext);
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  const [term, setTerm] = useState("coding");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos(term);
  }, [term]);

  const fetchPhotos = term => {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${term}&client_id=${
        env.API_KEY
      }`
    )
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        setPhotos(data.results);
      });
  };

  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      <SearchBar
        changeSearchTermState={e =>
          e.target.value === "" ? setTerm("coding") : setTerm(e.target.value)
        }
        value={term}
      />
      <PhotoList photos={photos} />
    </FavoritesContext.Provider>
  );
}
