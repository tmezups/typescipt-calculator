"use strict";
var Person = (function () {
    function Person(name) {
        if (name) {
            this.name = name;
        }
        else {
            this.name = 'Batman';
        }
    }
    Person.prototype.FormatName = function () {
        return this.name.toUpperCase();
    };
    return Person;
}());
var Problem = (function () {
    function Problem(factor) {
        if (factor) {
            this._factor = factor;
        }
        else {
            this._factor = 0;
        }
        this._multiplier = this.getRandomInt(0, 15);
        this._text = this.setText(this._factor, this._multiplier);
    }
    Object.defineProperty(Problem.prototype, "Text", {
        get: function () {
            return this._text;
        },
        enumerable: true,
        configurable: true
    });
    Problem.prototype.CheckAnswer = function (answer) {
        return this._factor * this._multiplier === answer;
    };
    Problem.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Problem.prototype.setText = function (factor, multiplier) {
        return factor + " X " + multiplier;
    };
    return Problem;
}());
var Game = (function () {
    function Game(person, factor, noOfProblems) {
        this.Problems = [];
        this._person = person;
        if (!noOfProblems)
            noOfProblems = 1;
        if (noOfProblems > 1000)
            noOfProblems = 1000;
        for (var i = 1; i <= noOfProblems; i++)
            this.Problems.push(new Problem(factor));
    }
    return Game;
}());
var startButton = document.getElementById('startGame');
startButton.addEventListener('click', function () {
    console.log('start');
    var myNode = document.getElementById("problems");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    var playerName = document.getElementById('playername').value;
    var factor = Number(document.getElementById('factor').value);
    var noOfProblems = Number(document.getElementById('problemCount').value);
    var person = new Person(playerName);
    var game = new Game(person, factor, noOfProblems);
    if (noOfProblems > 1000)
        alert('The limit is 1000');
    var problemLabel = document.createElement('label');
    var problemInput = document.createElement('input');
    problemInput.type = 'text';
    var problemContainer = document.createElement('div');
    problemContainer.appendChild(problemLabel);
    problemContainer.appendChild(problemInput);
    for (var i = 0; i < game.Problems.length; i++) {
        var problemLabel = document.createElement('label');
        problemLabel.innerText = game.Problems[i].Text;
        problemLabel.setAttribute('class', "col-sm-2 control-label");
        var problemInput = document.createElement('input');
        problemInput.type = 'text';
        var problemInputContainer = document.createElement('div');
        problemInputContainer.setAttribute('class', "col-sm-2");
        problemInputContainer.appendChild(problemInput);
        var problemContainer = document.createElement('div');
        problemContainer.setAttribute('class', "form-group");
        problemContainer.appendChild(problemLabel);
        problemContainer.appendChild(problemInputContainer);
        document.getElementById('problems').appendChild(problemContainer);
    }
    console.log(person.FormatName());
});
