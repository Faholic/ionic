import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrcodePage } from './qrcode.page';

const routes: Routes = [
  {
    path: '',
    component: QrcodePage
  },
  {
    path: 'tab2',
    redirectTo: '/parking-list',
    pathMatch: 'full'
  },
  {
    path: 'tab3',
    redirectTo: '/map',
    pathMatch: 'full'
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
export class QrcodePageRoutingModule {}
