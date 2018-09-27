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
var GameBoard = (function () {
    function GameBoard(problems) {
        this.generateBoard(problems);
    }
    GameBoard.prototype.generateBoard = function (problems) {
        var problemLabel = document.createElement('label');
        var problemInput = document.createElement('input');
        problemInput.type = 'text';
        var problemContainer = document.createElement('div');
        problemContainer.appendChild(problemLabel);
        problemContainer.appendChild(problemInput);
        for (var i = 0; i < problems.length; i++) {
            var problemLabel = document.createElement('label');
            problemLabel.innerText = problems[i].Text;
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
    };
    GameBoard.prototype.resetGameBoard = function () {
        var myNode = document.getElementById("problems");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
    };
    return GameBoard;
}());
var HtmlService = (function () {
    function HtmlService() {
    }
    HtmlService.getInputValueByID = function (id) {
        return document.getElementById(id).value;
    };
    return HtmlService;
}());
var Game = (function () {
    function Game(person) {
        this._problems = [];
        this._person = person;
        var noOfProblems = this.getnumberofProblems();
        var factor = Number(HtmlService.getInputValueByID('factor'));
        for (var i = 1; i <= noOfProblems; i++)
            this._problems.push(new Problem(factor));
        this._gameBoard = new GameBoard(this._problems);
    }
    Game.prototype.getnumberofProblems = function () {
        var noOfProblems = Number(HtmlService.getInputValueByID('problemCount'));
        if (!noOfProblems)
            noOfProblems = 1;
        if (noOfProblems > 1000)
            noOfProblems = 1000;
        return noOfProblems;
    };
    return Game;
}());
var startButton = document.getElementById('startGame');
startButton.addEventListener('click', function () {
    console.log('start');
    var playerName = HtmlService.getInputValueByID('playername');
    var person = new Person(playerName);
    var game = new Game(person);
    console.log(person.FormatName());
});
