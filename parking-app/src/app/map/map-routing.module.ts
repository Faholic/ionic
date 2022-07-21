import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapPage } from './map.page';

const routes: Routes = [
  {
    path: '',
    component: MapPage
  },
  {
    path: 'tab2',
    redirectTo: '/parking-list',
    pathMatch: 'full'
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapPageRoutingModule {}