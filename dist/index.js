"use strict";
// Basic Types
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Type Assertion
var cid = 1;
var customerId = cid;
// customerId = 'a'
// let customerId = cid as number
// Functions
function addNum(x, y) {
    return (x = y);
}
// Void
function log(msg) {
    console.log(msg);
}
var user1 = {
    id: 1,
    name: "John"
};
var add = function (x, y) { return x + y; };
var Person = /** @class */ (function () {
    function Person(id, name, password) {
        this.id = id;
        this.name = name;
        this.password = password;
    }
    Person.prototype.register = function () {
        return this.name + " is now registered";
    };
    return Person;
}());
var brad = new Person(1, "Brad Traversy", 1234);
var mike = new Person(2, "Mike Jordan", 4321);
// console.log(brad.password)
console.log(brad.register());
// Extends class
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(3, "Shawn", "Developer");
console.log(emp.name);
console.log(emp.register());
