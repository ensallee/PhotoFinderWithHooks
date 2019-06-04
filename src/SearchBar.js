import React from "react";

export default function SearchBar(props) {
  return (
    <form>
      <input
        onChange={props.changeSearchTermState}
        type="text"
        placeholder="Search photos"
        value={props.term}
      />
    </form>
  );
}
