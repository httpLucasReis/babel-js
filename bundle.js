"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    // Exemplo de um construtor

    function Person(name) {
        _classCallCheck(this, Person);

        this.name = name;
    }

    // Exemplo de get e set

    _createClass(Person, [{
        key: "sayName",


        // Exemplo de um método

        value: function sayName() {
            console.log(this.name);
        }

        // Exemplo de um método estático

    }, {
        key: "fullName",
        get: function get() {
            return this.name + "something";
        },
        set: function set(value) {
            this.name = value;
        }
    }], [{
        key: "printAge",
        value: function printAge(age) {
            console.log(age);
        }
    }]);

    return Person;
}();

var person = new Person("Manoel");

console.log(person.sayName());
console.log(Person.printAge(15));
