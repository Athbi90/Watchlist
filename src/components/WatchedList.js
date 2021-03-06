import { observer } from "mobx-react";
import movieList from "../library/MovieStore";
import { Watchlist } from "../styles";

import { Header, Icon, Image, List } from "semantic-ui-react";

const WatchedList = () => {
  const watchListMovie = movieList.movies.filter(
    (movie) => movie.isWatched === true
  );
  return watchListMovie.map((mov) => (
    <Watchlist>
      <List selection verticalAlign="middle">
        <List.Item>
          <Image avatar src={mov.image} />
          <List.Content>
            <List.Header>{mov.name}</List.Header>
          </List.Content>
        </List.Item>
        <button onClick={() => (mov.isWatched = false)}>Watched</button>
        <button onClick={() => movieList.deleteMovie(movieList.movies.id)}>
          Delete
        </button>
      </List>
    </Watchlist>
  ));
};
export default observer(WatchedList);
