export class PrivateUser {
    private readonly _surname: string;
    private _name: string;

    constructor( name: string, surname: string) {
        this._name = name;
        this._surname = surname;
    }

    get surname(): string {
        return this._surname;
    }

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        if (value.trim() === '') {
            throw new Error(`${value} is not a valid name`);
        }
        this._name = value;
    }
}