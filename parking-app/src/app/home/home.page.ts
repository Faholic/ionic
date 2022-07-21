import { Component } from '@angular/core';
import { ParkingListPage } from '../parking-list/parking-list.page';
import { MapPage } from '../map/map.page';
import { QrcodePage } from '../qrcode/qrcode.page';
import { SettingPage } from '../setting/setting.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  parkingPage: any;
  mapPage: any;
  qrcodePage: any;
  settingPage: any;

  constructor(public navCtrl: NavController) {
    this.parkingPage = ParkingListPage;
    this.mapPage = MapPage;
    this.qrcodePage = QrcodePage;
    this.settingPage = SettingPage;
  }

}
