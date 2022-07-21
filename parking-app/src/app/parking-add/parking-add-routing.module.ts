import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkingAddPage } from './parking-add.page';

const routes: Routes = [
  {
    path: '',
    component: ParkingAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkingAddPageRoutingModule {}
