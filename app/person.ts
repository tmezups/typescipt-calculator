interface IPerson {
    name : string;
    FormatName() : string
}

class Person implements IPerson {
    name: string;
    
    constructor(name: string){
        if(name) {
            this.name = name;
        } else {
            this.name = 'Batman'
        }
    }

    FormatName() : string {
        return this.name.toUpperCase();
    }

}