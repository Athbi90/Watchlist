import React from "react";
import "./App.css";
import { useState } from "react";
import AddtoList from "./components/AddtoList";
import movieList from "./library/MovieStore";
import Watchlist from "./components/Watchlist";

function App() {
  const [movieName, setMovieName] = useState("");
  return (
    <div>
      <h1>Wathclist</h1>
      <AddtoList />
      <Watchlist />
    </div>
  );
}

export default App;
