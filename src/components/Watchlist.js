import { Header, Icon, Image, List } from "semantic-ui-react";
import movieList from "../library/MovieStore";
import { observer } from "mobx-react";

const Watchlist = () => {
  const watchListMovie = movieList.movies.filter(
    (movie) => movie.isWatched === false
  );
  return watchListMovie.map((movie) => <p1>{movie.name}</p1>);
  // <div>
  //   <div>
  //     <Header as="h4" icon textAlign="middle">
  //       <Icon name="film" circular />
  //       <Header.Content>Watchlist</Header.Content>
  //     </Header>
  //   </div>
  //   <List selection verticalAlign="middle">
  //     <List.Item>
  //       <Image
  //         avatar
  //         src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
  //       />
  //       <List.Content>
  //         <List.Header>Helen</List.Header>
  //       </List.Content>
  //     </List.Item>
  //   </List>
  // </div>
};

export default observer(Watchlist);
