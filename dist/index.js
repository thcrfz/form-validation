"use strict";
var verifyUser = function (user, sentValue) {
    return user.username === sentValue.username && user.password === sentValue.password;
};
var bdUser = { username: 'joao', password: '1212121' };
var sentUser = { username: 'joao', password: '1212121' };
var loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
