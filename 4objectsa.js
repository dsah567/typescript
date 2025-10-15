"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return user;
}
var newUser = { name: "Dipu",
    email: "dipu@gmail.com",
    isActive: false,
    usr: null };
createUser(newUser);
var myUser = {
    _id: "1234",
    name: "Dipu",
    email: "dipu123@gmail.com",
};
var myUser2 = {
    _id: "1234",
    name: "Dipu",
    email: "dipu123@gmail.com",
    creadCardDetails: 123456
};
myUser.creadCardDetails = 1345;
// myUser._id = '123'; //not allowed
console.log(myUser._id);
