"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTowNum(num1, num2) {
    if (num2 === void 0) { num2 = 2; }
    return num1 + num2;
    // return "hello";
}
var s = addTowNum(5, 6);
var ss = addTowNum(2);
console.log(s);
console.log(ss);
function getValue(myVal) {
    if (myVal > 0) {
        return myVal;
    }
    return "200 OK";
}
var hero = ['dipu', 'sah'];
hero.map(function (heros) {
    return heros.toUpperCase();
});
function handleError(errmsg) {
    throw new Error(errmsg);
}
function greet() {
    console.log("Hello");
    return;
}
function greet2() {
    throw new Error("error");
}
