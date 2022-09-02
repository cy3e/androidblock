import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
  
  code:any;
  constructor( public BarcodeScanner: BarcodeScanner){}

  ngOnInit(){}


  scan(){
    this.BarcodeScanner.scan().then(BarcodeData => {
      this.code = BarcodeData;
      console.log(BarcodeData);
    }).catch (e => {
      console.log('Error:'+Error);
    });
  }
  
}