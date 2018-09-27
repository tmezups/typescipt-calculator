class GameBoard {
    constructor(private problems: Problem[]){

    }

    generateBoard() : void {

        var problemLabel = document.createElement('label')
        var problemInput = document.createElement('input')
        problemInput.type = 'text'
        var problemContainer = document.createElement('div')
        problemContainer.appendChild(problemLabel);
        problemContainer.appendChild(problemInput);
     
         for(let i = 0; i < this.problems.length; i++) {
     
             var problemLabel = document.createElement('label')
             problemLabel.innerText = this.problems[i].Text;
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
     
    }

    resetGameBoard() : void {
        var myNode = document.getElementById("problems");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
    }
}