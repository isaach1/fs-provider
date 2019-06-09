import { Component, OnInit } from '@angular/core';
import { Rental } from '../login/models/rental.model';
import { NavController } from '@ionic/angular';
import { PropertyService } from '../services/property.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public rentals: Array<Rental> = [];
  
  constructor(
    private navCtrl: NavController,
    private propertyService: PropertyService,
    private httpClient: HttpClient
  ) {
    // this.propertyService.getAllRentals();
    // this.rentals = this.propertyService.rentals;
  }

  ngOnInit() {
    const providerId = localStorage.getItem("provider_id");
    console.log(providerId);
    this.httpClient
      .get("http://localhost:3000/properties/all/" + providerId)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.rentals = response;
        }
      );
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
