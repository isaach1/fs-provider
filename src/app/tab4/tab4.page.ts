import { Component, OnInit } from '@angular/core';
import { Provider } from '../login/models/provider.model';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  
  public provider: Provider = new Provider();
  
  constructor(
    private httpClient: HttpClient,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    const providerId = localStorage.getItem("provider_id");
    console.log(providerId);
    console.log("getting data");
    this.httpClient
      .get("http://localhost:3000/providers/" + providerId)
      .subscribe(
        (response: any) =>  {
          console.log(response);
          this.provider.firstname = response[0].firstname;
          this.provider.lastname = response[0].lastname;
          this.provider.email = response[0].email;
        }
      );
  }

  goToHome() {
    this.navCtrl.navigateForward('');
  }

}
