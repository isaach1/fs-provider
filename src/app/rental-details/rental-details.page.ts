import { Component, OnInit } from '@angular/core';
import { Rental } from '../login/models/rental.model';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../login/models/booking.model';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.page.html',
  styleUrls: ['./rental-details.page.scss'],
})
export class RentalDetailsPage implements OnInit {

  private rentalId: number;
  public nameOfRental: string;
  public currentRental: Rental;

  public rentals: Array<Rental> = [];
  public bookings: Array<Booking> = [];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private navCtrl: NavController,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    let arrow = async (data: any) => {
      this.nameOfRental = data.params.rentalName;
      this.rentalId = data.params.rentalId;

      this.httpClient
        .get("http://localhost:3000/properties/" + this.rentalId)
        .subscribe(
          async (response: any) => {
            this.currentRental = response[0];
            
            if(!this.currentRental) {
              const alert = await this.alertController.create({
                header: 'Alert',
                subHeader: 'Warning',
                message: 'This page does not exist',
                buttons: ['OK']
              });

              await alert.present();

              this.navigateBack();
            } 
          }
        )

      this.httpClient
        .get("http://localhost:3000/properties/" + this.rentalId + "/bookings")
        .subscribe(
          (response: any) => {
            this.bookings = response;
          }
        )
    }

    

    this.activatedRoute.queryParamMap.subscribe(
      arrow
    );
  }

  navigateBack () {
    this.navCtrl.navigateForward('tabs');
  }

  goToEdit() {
    this.navCtrl.navigateForward('edit');
  }

  deleteProperty() {
    this.httpClient
      .delete("http://localhost:3000/properties/" + this.rentalId)
      .subscribe(
        async (response: any) => {
          const alert = await this.alertController.create({
            header: 'Alert',
            subHeader: 'Property Deleted',
            message: 'This property has been successfully deleted!',
            buttons: ['OK']
          });

          await alert.present();
          this.navigateBack();
        }
      )
  }

  accept() {

  }

  reject() {
    
  }
}
