"use strict";

function showFirstMessage(text) {
    console.log(text);
    let num = 20;
}

showFirstMessage("Hello World #2");

function calc(a, b) {
    return (a + b);
}

console.log(calc(5,5));

function ret() {
    let num = 10;
    return num;
}

let num = ret();
console.log(num);

const logger = function() {
    console.log('Hello');
};

logger();


const cacl = (a, b) => {
    console.log('2');
    return  a + b;
};