"use strict";

let numberOfFilms;
let genres = [];

function writeYourGenres(){
    for (let index = 0; index < 3; index++) {
       persolanMovieDB.genres[index] = prompt(`Ваш любимый жанр ${index + 1}`);
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(persolanMovieDB);
    }
}

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

let persolanMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: {},
    privat: false
};




function rememberMyFilms() {
    for (let index = 0; index < persolanMovieDB.count; index++) {
        let a, b;
        do {
            alert("Вводите данные корректно");
            a = prompt("Какой Фильм вы посмотрели?", "");
            b = prompt("Дайте оценку фильму", "");
        }
        while (a == null || b == null || a.length > 10);
        persolanMovieDB.movies[a] = b;
    }
}

rememberMyFilms();

function detectPersonaLevel() {
    if (persolanMovieDB.count < 10) {
        alert("Вы мало посмотрели");
    } else if (persolanMovieDB.count < 30 && persolanMovieDB.count > 10) {
        alert("Вы - классический зритель");
    } else if (persolanMovieDB.count > 30) {
        alert("Вы - киноман");
    }
}
detectPersonaLevel();

console.log(persolanMovieDB);