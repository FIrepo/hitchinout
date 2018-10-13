import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { PrometheusProvider } from '../../providers/hackin/hackin';

@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html'
})
export class WalletPage  {

  address: string;
  balance: number;

  constructor(public navCtrl: NavController) {

  }

  setup() {
    // this.address = this.hackin.getAccountAddress();
    // this.hackin.balance.subscribe((balance) => this.balance = balance);
    // this.hackin.fetchBalance();
  }

  doRefresh(refresher) {
    //this.hackin.fetchBalance().then((() => refresher.complete()))
  }

  ngOnInit(): void {
    this.setup();
  }

}
