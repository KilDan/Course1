"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
let persolanMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: {},
    privat: false
};


for (let index = 0; index < persolanMovieDB.count; index++) {
    const a = prompt("Какой Фильм вы посмотрели?", ""),
          b = prompt("Дайте оценку фильму", "");
    persolanMovieDB.movies[a] = b;
}

console.log(persolanMovieDB);