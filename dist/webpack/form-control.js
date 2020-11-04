"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isEmail_1 = __importDefault(require("validator/lib/isEmail"));
var SHOW_ERROR_MESSAGES = 'show-error-message';
var form = document.querySelector('.form');
var username = document.querySelector('.username');
var email = document.querySelector('.email');
var password = document.querySelector('.password');
var password2 = document.querySelector('.password2');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    hideErrorMessages(this);
    checkForEmptyFields(username, email, password, password2);
    checkEmail(email);
    checkEqualPassword(password, password2);
    if (shouldSendForm(this))
        console.log('ENVIADO');
});
function checkEqualPassword(password, password2) {
    if (password.value !== password2.value) {
        showErrorMessage(password, 'Senhas não conferem');
        showErrorMessage(password2, 'Senhas não conferem');
    }
}
function checkEmail(input) {
    if (!isEmail_1.default(input.value))
        showErrorMessage(input, 'Email invalido');
}
function checkForEmptyFields() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    inputs.forEach(function (input) {
        if (!input.value)
            showErrorMessage(input, 'Campo não pode ficar vazio');
    });
}
function hideErrorMessages(form) {
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(function (item) { return item.classList.remove(SHOW_ERROR_MESSAGES); });
}
;
function showErrorMessage(input, msg) {
    var formFields = input.parentElement;
    var errorMessage = formFields.querySelector('.error-message');
    errorMessage.innerText = msg;
    formFields.classList.add(SHOW_ERROR_MESSAGES);
}
;
showErrorMessage(username, 'Mensagen');
hideErrorMessages(form);
function shouldSendForm(form) {
    var send = true;
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(function () { return (send = false); });
    return send;
}
