import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { NavController, Refresher, LoadingController } from 'ionic-angular';
import { DataProvider } from '../../providers/dataprovider/dataprov';
import { HttpClient } from '@angular/common/http';

declare var google;

@Component({
  selector: 'page-datasets',
  templateUrl: 'datasets.html'
})
export class DatasetsPage implements OnInit {

  datasets: any[]
  loadingView: any;
  booknowbut: String;
  map : any;
  constructor(public navCtrl: NavController, private hackin: DataProvider, private loadingCtrl: LoadingController,public httpClient: HttpClient) {
this.booknowbut="Book now"
  }
  booknow(){
    if(this.booknowbut=="End trip"){

        var stopbooking = this.httpClient.get('http://franklyinnovations.in:3000/car/motor?state=1');
        stopbooking
        .subscribe(data => {
          console.log('my data: ', data);
          this.booknowbut="Book now"
        })
  
        this.hackin.deductBalance()
    }
    else if(this.booknowbut=="Start trip"){
      this.booknowbut="End trip"
      var booking = this.httpClient.get('http://franklyinnovations.in:3000/car/motor?state=0');
      booking
      .subscribe(data => {
        console.log('my data: ', data);
       
      })
    }
    else{
    console.log("booked");
    var booking = this.httpClient.get('http://franklyinnovations.in:3000/car/motor?state=0');
    booking
    .subscribe(data => {
      console.log('my data: ', data);
      setTimeout(() => {
        var stopbooking = this.httpClient.get('http://franklyinnovations.in:3000/car/motor?state=1');
        stopbooking
        .subscribe(data => {
          console.log('my data: ', data);
          this.booknowbut="Start trip"
        })
      }, 4000);
    })
  }
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
