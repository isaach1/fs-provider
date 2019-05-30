import { Component, OnInit } from '@angular/core';
import { Rental } from '../login/models/rental.model';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { PropertyService } from '../services/property.service';

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
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private navCtrl: NavController,
    private propertyService: PropertyService
  ) { }

  ngOnInit() {
    let arrow = async (data: any) => {
      this.nameOfRental = data.params.rentalName;
      this.rentalId = data.params.rentalId;

      this.currentRental = 
        this.propertyService.findRentalById(this.rentalId);

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

    this.activatedRoute.queryParamMap.subscribe(
      arrow
    );
  }

  navigateBack () {
    this.navCtrl.navigateForward('tabs');
  }
}
