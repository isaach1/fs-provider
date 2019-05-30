import { Component } from '@angular/core';
import { Rental } from '../login/models/rental.model';
import { NavController } from '@ionic/angular';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public rentals: Array<Rental> = [];
  
  constructor(
    private navCtrl: NavController,
    private propertyService: PropertyService
  ) {
    this.propertyService.getAllRentals();
    this.rentals = this.propertyService.rentals;
  }

  goRental(rental: Rental) {
    this.navCtrl.navigateForward('rental-details', {
      queryParams: {
        q: "ionic",
        rentalName: rental.name,
        rentalId: rental.id
      }
    });
  }

}
