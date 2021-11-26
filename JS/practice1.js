// "use strict";

// let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// let persolanMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     geners: {},
//     privat: false
// };


// for (let index = 0; index < persolanMovieDB.count; index++) {
//     let a, b;
//     do {
//         alert("Вводите данные корректно");
//         a = prompt("Какой Фильм вы посмотрели?", "");
//         b = prompt("Дайте оценку фильму", "");
//     } 
//     while (typeof(a) == 'object' && typeof(b) == 'object' && a.length > 10 );
//     persolanMovieDB.movies[a] = b;
// }


// if (persolanMovieDB.count < 10) {
//     alert("Вы мало посмотрели");
// } else if (persolanMovieDB.count < 30 && persolanMovieDB.count > 10 ) {
//     alert("Вы - классический зритель");
// } else if (persolanMovieDB.count > 30) {
//     alert("Вы - киноман");
// }

// console.log(persolanMovieDB);