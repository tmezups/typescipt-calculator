class HtmlService{
 static getInputValueByID(id: string) : any {
   return (<HTMLInputElement>document.getElementById(id)).value
 }
}