export class Booking {
    public id: number;
    public dateFrom: string;
    public dateTo: string;
    public userId: number;
    public propertyId: number;
    public role: string;
    
    constructor() {
        this.id = 0;
        this.dateFrom = "";
        this.dateTo = "";
        this.userId = 0;
        this.propertyId = 0;
        this.role = "";
    }
}