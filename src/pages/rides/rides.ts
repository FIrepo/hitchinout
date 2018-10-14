import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController, Refresher, LoadingController } from 'ionic-angular';
import { PrometheusProvider } from '../../providers/prometheus/prometheus';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'rides',
  templateUrl: 'rides.html'
})
export class RidesPage implements OnInit {

  datasets: any[]
  loadingView: any;
  public mytext: String;
  /* 
    0=> searching for ride
    1=> ride started
    2=> ride ended
  */    
  rideState = 0; 
  driverMarker : any;
  riderMarker : any;

  @ViewChild('map') mapElement : ElementRef;
  map: any;

  constructor(public navCtrl: NavController, private prometheus: PrometheusProvider, private loadingCtrl: LoadingController, public geolocation: Geolocation) {

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

  ionViewDidLoad(){
    this.loadMap();
  }
 
  loadMap(){
    try {
      this.geolocation.getCurrentPosition().then((position) => {
        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
   
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
   
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.riderMarker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.map.getCenter()
      });
      console.log("center coordinates are : ", this.map.getCenter().lat() , " and ", this.map.getCenter().lng());
      let content = "<h4>Information!</h4>";         
     
      this.addInfoWindow(this.riderMarker, content);
    });
    } catch (error) {
      console.log("Error occured : ",error);
    } finally{

    }


    setTimeout(()=>{
      this.addFewOtherMarkers();
    }, 5000)
     
  }

  addFewOtherMarkers(){
    let currentCenter = this.map.getCenter();
    for(let i=0; i<2; i++){
      let the_newcenter = new google.maps.LatLng(currentCenter.lat()+(0.005*i)+0.0005, currentCenter.lng()+(0.05*i)+0.0005);
      new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: the_newcenter
      });
    }

    for(let i=0; i<1; i++){
      let the_newcenter = new google.maps.LatLng(currentCenter.lat()-0.01, currentCenter.lng());
      this.driverMarker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: the_newcenter,
        icon: "/assets/imgs/robocar2.png"
      });

    }
    
    
  }

  //Analogous to ride accepted
  buttonclick(){
    if(this.rideState == 0){ //It means waiting for ride to be accepted
      this.startMovingAfterRideAccepted();
    }else if(this.rideState == 1){ //It means ride is started 

    }else if(this.rideState == 2){ //It means ride ended

    }
  }

  startMovingAfterRideAccepted(){
      //Start moving driverMarker
      let diffInLat = this.riderMarker.getPosition().lat() - this.driverMarker.getPosition().lat();
      console.log("Current Diff in lat is : ", diffInLat);

      //movement in lat = 0.0025
      let latMovement = 0.0025;
      this.driverMarker.setPosition(new google.maps.LatLng(this.driverMarker.getPosition().lat() + latMovement, this.driverMarker.getPosition().lng() ))
      if(diffInLat > 0.005){
        setTimeout(()=>this.startMovingAfterRideAccepted(),1000);
      }      
  }

  addInfoWindow(marker, content){
 
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
   
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
   
  }

  changedText(event){
    console.log("New text is : ", event.target.value);
  }

  /*
   * UI related methods ebd
   */
  

}
