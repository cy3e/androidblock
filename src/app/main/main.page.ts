import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private router:Router) {}


  qr() {
    this.router.navigate(['/token'])
  }

  mngr() {
    this.router.navigate(['/manager'])
  }
  ngOnInit() {
  }

}
