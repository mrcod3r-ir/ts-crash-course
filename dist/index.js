"use strict";
// Basic Types
var id = 5;
var company = "Traversy Media";
var isPublished = true;
var x = "Hello";
var ids = [1, 2, 3, 4, 6];
var arr = [1, true, "Hello"];
// Tuple
var person = [1, "Brad", true];
// Tuple Array
var employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"]
];
// Union
var pid = "22";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
// console.log(Direction1.Down)
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "up";
    Direction2["Down"] = "down";
    Direction2["Left"] = "left";
    Direction2["Right"] = "right";
})(Direction2 || (Direction2 = {}));
var user = {
    id: 1,
    name: "John"
};
