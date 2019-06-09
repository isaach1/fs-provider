import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public name: string;
  public location: string;
  public price: number;
  public imageUrl: string;
  
  constructor(
    private httpClient: HttpClient,
    private alertCtrl: AlertController
  ) {}

  createRental() {
    const provider_id = localStorage.getItem("provider_id");
    var property = {
      name: this.name,
      imageUrl: this.imageUrl,
      location: this.location,
      price: this.price,
      providerId: provider_id
    };

    this.httpClient
      .post("http://localhost:3000/properties", property)
      .subscribe(
        async (response) => {
          console.log(response);
          const alert = await this.alertCtrl.create({
            header: 'Congratulations',
            subHeader: 'Property created!',
            message: 'Property has been successfully created',
            buttons: ['OK']
          });

          await alert.present();
        }
      );
  }

}
