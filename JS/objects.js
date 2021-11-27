"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

// delete options.name;
// console.log(options);
let counter = 0;
for (let key in options) {

    if (typeof(options[key])== 'object') {
        for (let key1 in options[key]) {
            console.log(`Свойство ${key1} свойства ${key} имеет значение ${options[key][key1]}`);
            counter++;
        }
        continue;
    }
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
    counter++;
}
console.log(counter); 