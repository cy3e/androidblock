import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
  code:any;
  constructor( public barcodeScanner: BarcodeScanner){}

  ngOnInit(){}

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData;
      console.log(barcodeData);
    }).catch (e => {
      console.log('Error:'+Error);
    });
  }
}