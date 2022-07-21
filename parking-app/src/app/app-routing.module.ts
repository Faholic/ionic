import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'parking-list',
    loadChildren: () => import('./parking-list/parking-list.module').then( m => m.ParkingListPageModule)
  },
  {
    path: 'parking-add',
    loadChildren: () => import('./parking-add/parking-add.module').then( m => m.ParkingAddPageModule)
  },
  {
    path: 'parking-detail',
    loadChildren: () => import('./parking-detail/parking-detail.module').then( m => m.ParkingDetailPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'gps',
    loadChildren: () => import('./gps/gps.module').then( m => m.GpsPageModule)
  },
  {
    path: 'qrcode',
    loadChildren: () => import('./qrcode/qrcode.module').then( m => m.QrcodePageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
