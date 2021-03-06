import React from "react";
import "./App.css";
import { useState } from "react";
import AddtoList from "./components/AddtoList";
import movieList from "./library/MovieStore";
import Watchlist from "./components/Watchlist";
import WatchedList from "./components/WatchedList";
import { AppWrapper, WatchlistWrapper } from "./styles";
import { Route, Switch } from "react-router";

function App() {
  const [movieName, setMovieName] = useState("");
  return (
    <Switch>
      <AppWrapper>
        <h1>Watchlist</h1>
        <AddtoList />

        <h1>watchlist</h1>
        <Watchlist />

        <h1>Watched List</h1>
        <WatchedList />
      </AppWrapper>
    </Switch>
  );
}

export default App;
