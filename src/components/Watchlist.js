import { Header, Icon, Image, List } from "semantic-ui-react";
import { useState } from "react";
import movieList from "../library/MovieStore";
import { observer } from "mobx-react";
import { Route, Switch } from "react-router";

const Watchlist = () => {
  const watchListMovie = movieList.movies.filter(
    (movie) => movie.isWatched === false
  );
  return watchListMovie.map((mov) => (
    // <div>
    //   <h1>{mov.name}</h1>
    //   <img src={mov.image} />

    //   <button onClick={() => (mov.isWatched = true)}>Watched</button>

    // <button onClick={() => movieList.deleteMovie(movieList.movies.id)}>
    //   Delete
    // </button>
    // </div>
    /* <Header as="h4" icon textAlign="middle">
        <Icon name="film" circular />
        <Header.Content>{mov.name}</Header.Content>
      </Header> */
    <div>
      <List selection verticalAlign="middle">
        <List.Item>
          <Image avatar src={mov.image} />
          <List.Content>
            <List.Header>{mov.name}</List.Header>
          </List.Content>
        </List.Item>
        <button onClick={() => (mov.isWatched = true)}>Watched</button>
        <button onClick={() => movieList.deleteMovie(movieList.movies.id)}>
          Delete
        </button>
      </List>
    </div>
  ));
};

export default observer(Watchlist);
