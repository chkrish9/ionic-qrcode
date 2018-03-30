import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner'; 
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  qrData=null;
  generatedCode=null;
  scannedCode=null;

  constructor(public navCtrl: NavController, private barcodeScanner:BarcodeScanner) {

  }

  generateCode(){
    this.generatedCode = this.qrData;
  }

  scanCode(){
    this.barcodeScanner.scan().then(barcodeData => {
        this.scannedCode = barcodeData.text;
    });
  }
}
