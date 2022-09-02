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

  async err(){
    const alert = await this.alertCtrl.create({
      header: "Hubo un problema",
      message: "El Codigo Maestro no es correcto",
      buttons: ['Entendido']
    });
    await alert.present();
  }

  enter() {
   
    const input = document.getElementById('codigomaestro') as HTMLInputElement | null;
    const code = input?.value;

    if (code == '1234') {
      this.router.navigate(['main'])
    }
   else {
    this.err()
   }
  }

}
