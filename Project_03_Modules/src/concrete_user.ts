import {AbstractUser} from "./abstract_user";

export class ConcreteUser extends AbstractUser {
    constructor(name: string) {
        super(name);
    }
}