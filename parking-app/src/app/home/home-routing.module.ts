import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'tab2',
    loadChildren: () => import('../parking-list/parking-list.module').then( m => m.ParkingListPageModule)
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
