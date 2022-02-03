"use strict";
//* Basic Types
let id = 5;
let company = 'Ramon';
let isPublished = true;
//* any allows value to be anything string, boolean, number
let x = 'Hello';
let ids = [1, 2, 3, 4, 5, 6, 7];
//* Tuple
//* Must follow layout [number, string, boolean] but can't be [number, boolean, string]
let person = [1, 'string', true];
//* Tuple Array
let employee;
employee = [
    [1, 'string'],
    [2, 'string'],
    [3, 'string'],
];
//* Union
let id2 = 22;
//* Enum
//* starts at 0, Up = 0, Down = 1, Left = 2, Right = 3
//* You can set values to Up, Down, Left, Right ex. Up = 1 or Up = 'Up'
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
const user = {
    id: 1,
    name: 'John',
};
console.log(user);
//* Type Assertion
let cid = 1;
//*let customerId = <number>cid
let customerId = cid;
//* Functions
function addNum(x, y) {
    return x + y;
}
//* Void is useful when there is noting being returned
function log(message) {
    console.log(message);
}
const user2 = {
    //* id value can not be changed outside of this
    id: 1,
    name: 'John',
};
const add = (x, y) => x + y;
//* Classes
//* inside class is public but you can choose private or protected, which means you can only access with in the class or extended from the class
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
