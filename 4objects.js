"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(obj) {
    console.log(obj.isPaid);
    return { name: "object" };
}
function createUser1(_a) {
    var string = _a.name, boolean = _a.isPaid;
    console.log(string);
    return { name: "object" };
}
createUser({ name: "dipu", isPaid: true });
createUser1({ name: "dipu", isPaid: true });
