import { Injectable } from '@angular/core';
import { Rental } from '../login/models/rental.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  public rentals: Array<Rental> = [];
  
  constructor() { }

  getAllRentals() { 
    this.rentals = [];

    let rental1 = new Rental();
    rental1.id = 1;
    rental1.name = "Suburban House";
    rental1.image = "https://i.boring.host/16D5g7wX.jpg";
    rental1.location = "Portugal";
    rental1.price = 400;
    rental1.last_renter = "James May";
    this.rentals.push(rental1);

    let rental2 = new Rental();
    rental2.id = 2;
    rental2.name = "Modern House";
    rental2.image = "https://i.boring.host/16D7KHvC.jpg";
    rental2.location = "Japan";
    rental2.price = 150;
    rental2.last_renter = "Richard Hammond";
    this.rentals.push(rental2);
  }

  findRentalById(id: number): Rental {
    let foundRental: Rental = null;
    this.rentals.forEach(
      (rental: Rental) => {
        if(rental.id == id){
          foundRental = rental;
        }
      }
    );
    return foundRental;
  }

}


