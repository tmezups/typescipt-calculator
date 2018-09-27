/// <reference path="game.ts" />


var startButton = document.getElementById('startGame');
startButton!.addEventListener('click', function(){
    console.log('start')
    


    let playerName = HtmlService.getInputValueByID('playername');    
    let person = new Person(playerName);
    let game = new Game(person)

    console.log(person.FormatName());
})