export abstract class AbstractUser {

    protected _name: string;

    protected constructor(name: string) {
        this._name = name;
    }

    set name(name: string) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

}