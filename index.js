/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  let movieTitleList = []
  for (let index = 0; index < movies.length; index++) {
    const movie = movies[index];
    let movieTitle = movie.title
    movieTitleList.push(movieTitle)
  }
return movieTitleList;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  let highestScore = 0;

  for (let m = 0; m < movies.length; m++) {
    const movie = movies[m];

    if (movies.length === 0) {
      return highestScore;
    }
    if (Number(movie.metascore) > Number(highestScore)){
       highestScore = movie.metascore;
    }
  }
  return Number(highestScore);
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  let imdbAverage = 0;

  if (movies.length === 0) {
    return imdbAverage;
  }
  for (let m = 0; m  < movies.length; m ++) {
    const movie = movies[m];
    imdbAverage += Number(movie.imdbRating)
  }
  return imdbAverage/movies.length;
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  let ratingObj = {};
  let count = 0;

  if (movies.length === 0) {
    return ratingObj;
  }

  for (let m = 0; m < movies.length; m++) {
    const movie = movies[m];
    let rating = movie.rated;

    ratingObj[rating] = ''

    if(ratingObj.hasOwnProperty(rating)){
      ++count;
      ratingObj[rating] = count;
    }
  }
  return ratingObj;
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  if (movies.length === 0){
    return null;
  }
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    if(movie.imdbID === id) {
      return movie;
    }
  }
  return null;
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  let movieArr = [];

  if (movies.length === 0){
    return movieArr;
  }
for (let m = 0; m < movies.length; m++) {
  const movie = movies[m];
  if (movie.genre.toLowerCase().includes(genre.toLowerCase())){
    movieArr.push(movie)
  }
}
return movieArr;
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  let movieArr = [];
  let reg = /\d+/g;

  if (movies.length === 0){
    return movieArr;
  }

  for (let m = 0; m < movies.length; m++) {
    const movie = movies[m];
    let num = movie.released.match(reg)

    for (let r = 0; r < num.length; r++) {
      const releasedYear = num[r];
      if (releasedYear.length === 4) {
        if (releasedYear <= year) {
          movieArr.push(movie);
        }
      }
    }
  }
  return movieArr;
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  let string = ''
  let highestBoxOffice = 0

  if (movies.length === 0){
    return null;
  }

  for (let m= 0; m < movies.length; m++) {
    const movie = movies[m];
    let bigHit = Number(movie.boxOffice.slice(1).split(",").join(""))
    if(bigHit > highestBoxOffice) {
      highestBoxOffice = bigHit
      string = movie.title;
    }
  }
  return string;
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
