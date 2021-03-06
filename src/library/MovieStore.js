import { makeAutoObservable } from "mobx";

class movie {
  constructor(movieName, image) {
    this.name = movieName;
    this.image = image;
    this.isWatched = false;
    this.id = null;
  }
}
class MovieList {
  movies = [];
  constructor() {
    makeAutoObservable(this);
  }
  createWatchlist = (movName, image) => {
    const movieName = new movie(movName, image);
    movieName.id = this.movies.length + 1;
    this.movies.push(movieName);
  };
  isWatched = (id) => {
    while (this.movies.id === id) {
      if (this.movies.isWatched === true) {
        return (this.movies.isWatched = false);
      } else if (this.movies.isWatched === false) {
        return (this.movies.isWatched = true);
      }
    }
  };
  deleteMovie = (id) => {
    this.movies = this.movies.filter(() => this.movies.id !== id);
  };
}
const movieList = new MovieList();
export default movieList;
