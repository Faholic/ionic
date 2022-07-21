import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkingListPageRoutingModule } from './parking-list-routing.module';

import { ParkingListPage } from './parking-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkingListPageRoutingModule
  ],
  declarations: [ParkingListPage]
})
export class ParkingListPageModule {}
