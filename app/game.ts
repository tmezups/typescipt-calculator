/// <reference path="person.ts" />
/// <reference path="problem.ts" />
/// <reference path="gameBoard.ts" />
/// <reference path="htmlService.ts" />


interface IGame {
}

class Game implements IGame {
    private _person : Person;
    private _gameBoard : GameBoard;
    private _problems: Problem[] = [];

    
    constructor(person: Person){
        this._person = person;
        
        let noOfProblems : number = this.getnumberofProblems();
        let factor : number = Number(HtmlService.getInputValueByID('factor'));

        for(let i = 1; i <= noOfProblems; i++)
         this._problems.push(new Problem(factor))

        this._gameBoard = new GameBoard(this._problems)
        this._gameBoard.resetGameBoard();
        this._gameBoard.generateBoard();

    }

    private getnumberofProblems() : number {
        let noOfProblems : number = Number(HtmlService.getInputValueByID('problemCount'));    
        if(!noOfProblems)
            noOfProblems = 1;

        if(noOfProblems > 1000)
            noOfProblems = 1000;
            
        return noOfProblems;
    }
}