import { Component, OnInit } from '@angular/core';
import { NavController, Thumbnail } from 'ionic-angular';
import { DataProvider } from '../../providers/dataprovider/dataprov';

@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html'
})
export class WalletPage  {

  address: string;
  balance: any;
  

  constructor(public navCtrl: NavController,public hackin: DataProvider) {
    var that=this;
     that.address= this.hackin.getAccountAddress();
  
   this.hackin.fetchBalance().then(function(bal){
     that.balance=bal;
   })
  }

  async setup() {
     
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
