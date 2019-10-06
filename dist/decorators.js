"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person = { name: 'John' };
function addAge(age) {
    return function (person) {
        return {
            age: age,
            name: person.name
        };
    };
}
exports.newPerson = addAge(30)(person);
console.warn(exports.newPerson);
