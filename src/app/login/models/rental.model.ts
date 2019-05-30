export class Rental {
    public id: number;
    public name: string;
    public image: string;
    public location: string;
    public price: number;
    public last_renter: string;

    constructor() {
        this.id = 0;
        this.name = "";
        this.image = "";
        this.location = "";
        this.price = 0;
        this.last_renter = "";
    }
}