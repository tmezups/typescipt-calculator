interface IProblem {
    Text: string,
    CheckAnswer(answer: number) : boolean
}

class Problem implements IProblem {
    private _factor : number;
    private _multiplier: number;
    private _text : string;
    constructor(factor: number){
        if(factor){
           this._factor = factor;
        } else {
            this._factor = 0;
        }
        this._multiplier = this.getRandomInt(0, 15);
        this._text = this.setText(this._factor, this._multiplier);
    }

    get Text() : string {
        return this._text;
    }

    CheckAnswer(answer: number) {
        return this._factor * this._multiplier === answer;
    }

    private getRandomInt(min: number, max: number) : number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private setText(factor: number, multiplier : number) : string {
       return factor + " X " + multiplier;
    } 
}