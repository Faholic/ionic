import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IParking } from '../../models/parking';

import { MapPage } from '../map/map.page';
import { QrcodePage } from '../qrcode/qrcode.page';
import { ParkingProviderService } from '../parking-provider.service';
import { SettingPage } from '../setting/setting.page';
import { HomePage } from '../home/home.page';
import { ParkingDetailPage } from '../parking-detail/parking-detail.page';


@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.page.html',
  styleUrls: ['./parking-list.page.scss'],
})
export class ParkingListPage {
  parkings: Array<IParking> = [];

  homePage: any;
  mapPage: any;
  qrcodePage: any;
  settingPage: any;
  
  constructor(public navCtrl: NavController, private parkingProvider: ParkingProviderService,) {

    this.homePage = HomePage;
    this.mapPage = MapPage;
    this.qrcodePage = QrcodePage;
    this.settingPage = SettingPage;

    
    
  }

  getParkingList() {
    this.parkingProvider.getParkingList().then((data: any) => {
      this.parkings = data;
    }, error => {
      console.error('Error get data!', error);
    });
  }

 

  ionViewWillEnter() {
    this.getParkingList();
  }
  
  doSearch(event) {
    let query = event.target.value || '';
    
    this.parkingProvider.searchParkingList(query).then((data: any) => {
      this.parkings = data.rows;
    }, (error) => {
      console.error('Error get data!', error);
    });

  }

  viewParkingDetail(parking: IParking) {
    console.log(parking.id);
    let p = parking.id
    this.navCtrl.navigateForward(['/parking-detail', { p }]);
  }
}
