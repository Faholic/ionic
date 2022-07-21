import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingPage } from './setting.page';

const routes: Routes = [
  {
    path: '',
    component: SettingPage
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
    path: 'tab4',
    redirectTo: '/qrcode',
    pathMatch: 'full'
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
export class SettingPageRoutingModule {}
