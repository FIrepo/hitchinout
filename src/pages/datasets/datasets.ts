import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { NavController, Refresher, LoadingController } from 'ionic-angular';
import { DataProvider } from '../../providers/dataprovider/dataprov';
declare var google;

@Component({
  selector: 'page-datasets',
  templateUrl: 'datasets.html'
})
export class DatasetsPage implements OnInit {

  datasets: any[]
  loadingView: any;

  map : any;
  constructor(public navCtrl: NavController, private hackin: DataProvider, private loadingCtrl: LoadingController) {

  }

  setup() {
    // this.loadingView = this.loadingCtrl.create({
    //   content: 'Bitte warten. Datensätze werden geladen.',
    // });
    // this.loadingView.present();
    this.hackin.datasets.subscribe((datasets) => {
      this.datasets = datasets;
      // if (this.loadingView) {
      //   this.loadingView.dismiss();
      // }
    });
    
  }

  ngOnInit(): void {
    this.setup();
  }

  doRefresh(refresher) {
    // this.hackin.fetchDatasets().then(() => {
    //   refresher.complete();
    // })
  }

}
