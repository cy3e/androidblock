import { Component, OnInit } from '@angular/core';
import { ZBarOptions, ZBar } from '@ionic-native/zbar/ngx';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
    
  optionZbar:any;
  scannedOutput:any;
  constructor(
    private zbarPlugin: ZBar
  ) {
    this.optionZbar = {
      flash: 'off',
      drawSight: false
    }
  }
  ngOnInit(){}


  barcodeScanner(){
    this.zbarPlugin.scan(this.optionZbar)
   .then(respone => {
      console.log(respone);
      this.scannedOutput = respone;
   })
   .catch(error => {
      alert(error);
   });
  }
}