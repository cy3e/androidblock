import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { alertController } from '@ionic/core';
//import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-tools',
  templateUrl: './tools.page.html',
  styleUrls: ['./tools.page.scss'],
})
export class ToolsPage implements OnInit {

  constructor(public alertController: AlertController, private router: Router) { 
  }

  ngOnInit() {
  }

  async del() {
    const alert = await alertController.create({
      message: 'usted esta deacuerdo con borrar todo rastro de la applicacion del telefono'
      + ' * ' + 'esta accion no se puede deshacer' +' * ',
      buttons: ['estoy de acuerdo','cancelar']
    });

    await alert.present();
  }

  enter()
  {
    //aqui debe haver una funcion que conecte a una base de ddatos para revisar si hay un cliente jasdja
    this.router.navigate(['/main'])

    //aqui va el roolback por si el usuario no fue el correcto que muestr esto 
    this.del();
  }

  cancel()
  {
    this.router.navigate(['/home'])
  }


}
