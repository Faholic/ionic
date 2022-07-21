import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkingListPage } from './parking-list.page';
import { HomePage } from '../home/home.page';


const routes: Routes = [
  {
    path: '',
    component: ParkingListPage
  },
  {
    path: 'tab3',
    loadChildren: () => import('../map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('../qrcode/qrcode.module').then( m => m.QrcodePageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('../setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'tab1',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkingListPageRoutingModule {}
