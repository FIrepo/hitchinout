import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../../providers/dataprovider/dataprov';
import { AlertController, LoadingController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-transfer',
  templateUrl: 'transfer.html'
})
export class TransferPage {

  tx: any;
  receipt: any;
  disableQRButton = false;
  loadingView: any;
  constructor(
    public barcodeScanner: BarcodeScanner,
    private hackin: DataProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController) {

  }

  ngOnInit() {
    this.scanQR();
  }

  scanQR() {
    this.receipt = false;
    this.barcodeScanner.scan({
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
    }).then((barcodeData) => {

      this.tx = this.hackin.readQRCodeString(barcodeData.text);
      console.log(this.tx);
      this.disableQRButton = true;
      this.showTxConfirmAlert();

    })
  }

  private showTxConfirmAlert() {

    const alert = this.alertCtrl.create({
      title: "Confirm Transaction",
      subTitle: "Receiver: " + this.tx.to + ", Value: " + this.tx.value,
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            this.disableQRButton = false;
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: data => {
            this.loadingView = this.loadingCtrl.create({
              content: 'Bitte warten. Transaction wird gemined.',
            });
            this.loadingView.present();
            this.hackin.transfer(this.tx.argsDefaults[0].value, parseInt(this.tx.argsDefaults[1].value))
              .then((receipt) => {
                this.disableQRButton = false;
                this.receipt = receipt;
                this.loadingView.dismiss();
              }).catch(console.error);
          }
        }
      ]
    });

    alert.present();
  }

  protected showTxConfirmModal() {

  }

}
