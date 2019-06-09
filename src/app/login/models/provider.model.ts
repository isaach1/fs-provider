export class Provider {
    public id: number;
    public firstname: string;
    public lastname: string;
    public role: string;
    public email: string;
    public password: string;

    constructor() {
        this.id = 0;
        this.firstname = "";
        this.lastname = "";
        this.role = "NEW";
        this.email = "";
        this.password = "";
    }

}