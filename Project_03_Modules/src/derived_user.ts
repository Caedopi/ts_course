import {PrivateUser} from "./private_user";


export class DerivedUser extends PrivateUser {
    constructor(name: string, surname: string, public jobTitle: string) {
        super(name, surname);
        this.name = "Xolo";
        this.jobTitle = jobTitle;
    }

    public change_name() {
        this.name = this._protected_name;
    }
}