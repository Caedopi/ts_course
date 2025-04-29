import {IAnimal} from "./IAnimal"

export class Dog implements IAnimal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
    
    sound(): string {
        return "Whoof!"
    }
}