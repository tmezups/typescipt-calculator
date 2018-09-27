/// <reference path="game.ts" />


var startButton = document.getElementById('startGame');
startButton!.addEventListener('click', function(){
    console.log('start')
    
    var myNode = document.getElementById("problems");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    let playerName = (<HTMLInputElement>document.getElementById('playername')).value;
    let factor =  Number((<HTMLInputElement>document.getElementById('factor')).value);
    let noOfProblems = Number((<HTMLInputElement>document.getElementById('problemCount')).value);    
    let person = new Person(playerName);
    let game = new Game(person, factor, noOfProblems)

    if(noOfProblems > 1000)
       alert('The limit is 1000')

   var problemLabel = document.createElement('label')
   var problemInput = document.createElement('input')
   problemInput.type = 'text'
   var problemContainer = document.createElement('div')
   problemContainer.appendChild(problemLabel);
   problemContainer.appendChild(problemInput);

    for(let i = 0; i < game.Problems.length; i++) {

        var problemLabel = document.createElement('label')
        problemLabel.innerText = game.Problems[i].Text;
        problemLabel.setAttribute('class', "col-sm-2 control-label")
        var problemInput = document.createElement('input')
        problemInput.type = 'text'
        var problemInputContainer = document.createElement('div')
        problemInputContainer.setAttribute('class' , "col-sm-2")
        problemInputContainer.appendChild(problemInput)
        var problemContainer = document.createElement('div')
        problemContainer.setAttribute('class' , "form-group" )
        problemContainer.appendChild(problemLabel);
        problemContainer.appendChild(problemInputContainer);
     

        document.getElementById('problems').appendChild(problemContainer)
    }

    console.log(person.FormatName());
})