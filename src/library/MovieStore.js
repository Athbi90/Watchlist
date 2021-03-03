import { makeAutoObservable } from "mobx";

class movie {
  constructor(movieName, image) {
    this.name = movieName;
    this.image = image;
    this.isWatched = false;
  }
}
class MovieList {
  movies = [];
  constructor() {
    makeAutoObservable(this);
  }
  createWatchlist = (movName, image) => {
    const movieName = new movie(this.movieName, this.image);
    this.movies.push(movieName);
  };
}
const movieList = new MovieList();
export default movieList;
