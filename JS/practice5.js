"use strict";

const str = "test";

console.log(str.toUpperCase());
console.log(str);

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

const logg = "Hello World";

console.log(logg.slice(logg.indexOf("World"), logg.length));

console.log(logg.substring(6,11));

console.log(logg.substr(6,5));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));