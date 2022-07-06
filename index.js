// "use strict";

 
const howMutchFilmWatch = +prompt('How much movie you watch?', '');



const a = prompt('Last movie you watch', ''),
      b = prompt('give rating them', ''),
      c = prompt('Last movie you watch', ''),
      d = prompt('give rating them', '');


const personalMovieDb = {
    conut: howMutchFilmWatch,
    movies: {},
    actors: {},
    genres: {},
    privat: false 
};

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;


console.log(personalMovieDb);

