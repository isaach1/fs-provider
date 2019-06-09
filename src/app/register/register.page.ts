import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  public firstname: string;
  public lastname: string;
  public email: string;
  public password: string;

  constructor(
    private navCtrl: NavController,
    private httpClient: HttpClient,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  goToHome() {
    var provider = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      role: "provider"
    };
    
    this.httpClient
      .post("http://localhost:3000/providers", provider)
      .subscribe(
        (response: any) => {
          console.log(response);
          const providerId = response.id;
          localStorage.setItem("provider_id", providerId);
          this.navCtrl.navigateForward('tabs/tab1');
        },
        async (err) => {
          console.log(err);
          const alert = await this.alertCtrl.create({
            header: 'Alert',
            subHeader: 'This email has already been used',
            message: err.message,
            buttons: ['OK']
          });

        await alert.present();
      }
    );

  }

  goToLogin() {
    this.navCtrl.navigateForward('');
  }

}
