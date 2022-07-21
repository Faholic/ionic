import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkingAddPageRoutingModule } from './parking-add-routing.module';

import { ParkingAddPage } from './parking-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkingAddPageRoutingModule
  ],
  declarations: [ParkingAddPage]
})
export class ParkingAddPageModule {}
