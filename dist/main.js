"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var two_1 = require("./two");
require("./decorators");
var Soc = /** @class */ (function () {
    function Soc() {
        this.title = 'eggheads!';
    }
    Soc.prototype.getUsers = function () {
        return [{ name: '123' }];
    };
    return Soc;
}());
var App = /** @class */ (function () {
    function App() {
        this.name = 'stupid';
        console.log('constructor was started!');
    }
    return App;
}());
var app = new App();
var two = new two_1.Two;
