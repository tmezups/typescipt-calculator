/// <reference path="person.ts" />
/// <reference path="problem.ts" />


interface IGame {
}

class Game implements IGame {
    private _person : Person;
    public Problems: Problem[] = [];
    constructor(person: Person, factor: number, noOfProblems: number){
        this._person = person;
        
        if(!noOfProblems)
            noOfProblems = 1;

        if(noOfProblems > 1000)
            noOfProblems = 1000;

        for(let i = 1; i <= noOfProblems; i++)
         this.Problems.push(new Problem(factor))

    }
}