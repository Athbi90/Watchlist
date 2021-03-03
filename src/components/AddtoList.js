import { Input, Button } from "semantic-ui-react";
import { useState } from "react";
import movieList from "../library/MovieStore";
import { observer } from "mobx-react";
const AddtoList = () => {
  const [movieName, setMovieName] = useState("");
  const [movieImage, setMovieImage] = useState("");

  return (
    <>
      <div>
        <Input
          onChange={(event) => setMovieName(event.target.value)}
          placeholder="Enter movie name"
        />
        <Input
          onChange={(event) => setMovieImage(event.target.value)}
          placeholder="Movie image URL"
        />
      </div>
      <div>
        <Button
          onClick={() => movieList.createWatchlist(movieName, movieImage)}
          color="blue"
        >
          Add to Watchlist
        </Button>
      </div>
    </>
  );
};

export default observer(AddtoList);
