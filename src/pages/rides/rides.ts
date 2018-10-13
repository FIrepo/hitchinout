import { Component, OnInit } from '@angular/core';
import { NavController, Refresher, LoadingController } from 'ionic-angular';
import { PrometheusProvider } from '../../providers/prometheus/prometheus';

@Component({
  selector: 'rides',
  templateUrl: 'rides.html'
})
export class RidesPage implements OnInit {

  datasets: any[]
  loadingView: any;
  public mytext: String;

  constructor(public navCtrl: NavController, private prometheus: PrometheusProvider, private loadingCtrl: LoadingController) {

  }

  setup() {
    // this.loadingView = this.loadingCtrl.create({
    //   content: 'Bitte warten. Datensätze werden geladen.',
    // });
    // this.loadingView.present();
    this.prometheus.datasets.subscribe((datasets) => {
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
    this.prometheus.fetchDatasets().then(() => {
      refresher.complete();
    })
  }

  /*
   * UI related methods start
   */
  buttonclick(){
    console.log("naveen raghuveer");
    this.mytext = "Hello Naveen Raghuveer"
  }

  changedText(event){
    console.log("New text is : ", event.target.value);
  }

  /*
   * UI related methods ebd
   */
  

}
