import {IAnimal} from "./IAnimal"

export class Cat implements IAnimal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(): string {
        return "Meow!"
    }
}