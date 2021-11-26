"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
let persolanMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: {},
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?','');
persolanMovieDB.movies[a] = b;
persolanMovieDB.movies[c] = d;

console.log(persolanMovieDB);