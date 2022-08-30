import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonButtons } from '@ionic/angular';
import { alertController } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertCtrl: AlertController, private router:Router) {}

  async alert(){
    const alert = await this.alertCtrl.create({
      header: "hubo un problema",
      message: "el codigo maestro es erroneo",
      buttons: ['entendido']
    });
    await alert.present();
  }

  enter() {
    this.router.navigate(['/main'])
  }


}
