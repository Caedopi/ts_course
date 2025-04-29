export class PrivateUser {
    private readonly _surname: string;
    private _name: string;
    protected _protected_name: string;

    constructor(name: string, surname: string) {
        this._name = name;
        this._surname = surname;
        this._protected_name = name;
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

    static static_value = "static value";

    static get_static_value() {
        return "static value";
    }
}